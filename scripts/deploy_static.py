"""Promote a verified CI archive on Debian without changing Caddy or credentials."""
import argparse
import hashlib
import os
from pathlib import Path, PurePosixPath
import re
import tarfile
import tempfile


def deploy(archive, commit, digest, base=Path('/srv/www/coderquiz')):
    if not re.fullmatch(r'[0-9a-f]{40}', commit):
        raise ValueError('Expected a full commit SHA')
    if not re.fullmatch(r'[0-9a-f]{64}', digest):
        raise ValueError('Expected the CI archive SHA-256')
    if hashlib.sha256(archive.read_bytes()).hexdigest() != digest:
        raise ValueError('Archive checksum mismatch')
    base = base.absolute()
    if base.is_symlink() or base.resolve() != base:
        raise ValueError('Deployment root must not be a symlink')
    base.mkdir(parents=True, exist_ok=True, mode=0o755)
    base.chmod(0o755)
    releases = base / 'releases'
    releases.mkdir(parents=True, exist_ok=True, mode=0o755)
    if releases.is_symlink():
        raise ValueError('Release directory must not be a symlink')
    releases.chmod(0o755)
    target = releases / commit
    if target.exists():
        raise ValueError('This immutable release already exists')
    current = base / 'current'
    if current.exists() and not current.is_symlink():
        raise ValueError('Current must be a release symlink')
    previous = current.resolve() if current.is_symlink() else None
    if previous and (previous.parent != releases or not previous.is_dir()):
        raise ValueError('Current points outside the release directory')

    with tarfile.open(archive, 'r:gz') as package:
        members = package.getmembers()
        for member in members:
            name = PurePosixPath(member.name)
            if name.is_absolute() or '..' in name.parts or '\\' in member.name or not (member.isfile() or member.isdir()):
                raise ValueError('Archive contains an unsafe path or entry type')
        with tempfile.TemporaryDirectory(prefix='.incoming-', dir=releases) as temporary:
            incoming = Path(temporary) / 'site'
            incoming.mkdir(mode=0o755)
            for member in members:
                destination = incoming / member.name
                if member.isdir():
                    destination.mkdir(parents=True, exist_ok=True, mode=0o755)
                else:
                    destination.parent.mkdir(parents=True, exist_ok=True, mode=0o755)
                    with package.extractfile(member) as source, destination.open('xb') as output:
                        output.write(source.read())
                    destination.chmod(0o644)
            for required in ['index.html', 'app.js', 'catalog.js', 'catalog-data.js', 'robots.txt', 'quiz']:
                if not (incoming / required).exists():
                    raise ValueError(f'Missing site entry: {required}')
            if any((incoming / name).exists() for name in ['.git', '.github', 'docs', 'scripts', 'tests']):
                raise ValueError('Repository files must not be published')
            # mkdir's mode is reduced by umask; Caddy must still traverse public directories.
            incoming.chmod(0o755)
            for directory in incoming.rglob('*'):
                if directory.is_dir():
                    directory.chmod(0o755)
            incoming.rename(target)
    # The old release remains available; os.replace switches the symlink atomically.
    next_link = base / 'current.next'
    next_link.symlink_to(target, target_is_directory=True)
    os.replace(next_link, current)
    print(f'Current release: {commit}')
    print(f'Previous release: {previous.name if previous else "none (first deployment)"}')
    return target


if __name__ == '__main__':
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument('--archive', type=Path, required=True)
    parser.add_argument('--commit', required=True)
    parser.add_argument('--sha256', required=True)
    args = parser.parse_args()
    deploy(args.archive, args.commit, args.sha256)
