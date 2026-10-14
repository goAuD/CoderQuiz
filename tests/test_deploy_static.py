"""Only temporary directories: never run a deployment against the server."""
import hashlib
import importlib.util
import io
import os
from pathlib import Path
import tarfile
import tempfile
import unittest

spec = importlib.util.spec_from_file_location('deploy_static', Path(__file__).resolve().parents[1] / 'scripts/deploy_static.py')
module = importlib.util.module_from_spec(spec)
spec.loader.exec_module(module)


class DeploymentTest(unittest.TestCase):
    def package(self, directory, unsafe=None):
        archive = directory / 'site.tar.gz'
        with tarfile.open(archive, 'w:gz') as tar:
            for name in ['index.html', 'app.js', 'catalog.js', 'catalog-data.js', 'robots.txt', 'quiz/bank/index.html']:
                entry = tarfile.TarInfo(name)
                entry.size = 2
                tar.addfile(entry, io.BytesIO(b'OK'))
            if unsafe:
                entry = tarfile.TarInfo(unsafe)
                entry.size = 2
                tar.addfile(entry, io.BytesIO(b'NO'))
        return archive, hashlib.sha256(archive.read_bytes()).hexdigest()

    @unittest.skipIf(os.name == 'nt', 'Linux deployment: Windows symlink creation needs extra privileges')
    def test_promotion_preserves_previous_release_and_refuses_rewrite(self):
        with tempfile.TemporaryDirectory() as temporary:
            directory = Path(temporary)
            archive, digest = self.package(directory)
            base = directory / 'deployed'
            first = module.deploy(archive, 'a' * 40, digest, base)
            second = module.deploy(archive, 'b' * 40, digest, base)
            self.assertEqual((base / 'current').resolve(), second)
            self.assertTrue((first / 'index.html').exists())
            with self.assertRaisesRegex(ValueError, 'already exists'):
                module.deploy(archive, 'b' * 40, digest, base)

    @unittest.skipIf(os.name == 'nt', 'Unix directory modes are verified on Linux')
    def test_private_shell_umask_does_not_make_public_assets_unreadable(self):
        with tempfile.TemporaryDirectory() as temporary:
            directory = Path(temporary)
            archive, digest = self.package(directory)
            base = directory / 'deployed'
            previous_mask = os.umask(0o077)
            try:
                release = module.deploy(archive, 'c' * 40, digest, base)
            finally:
                os.umask(previous_mask)
            for folder in [base, base / 'releases', release, release / 'quiz', release / 'quiz/bank']:
                self.assertEqual(folder.stat().st_mode & 0o777, 0o755)
            self.assertEqual((release / 'quiz/bank/index.html').stat().st_mode & 0o777, 0o644)

    def test_checksums_and_traversal_cannot_change_current(self):
        with tempfile.TemporaryDirectory() as temporary:
            directory = Path(temporary)
            archive, digest = self.package(directory, '../outside.html')
            base = directory / 'deployed'
            with self.assertRaisesRegex(ValueError, 'checksum'):
                module.deploy(archive, 'a' * 40, '0' * 64, base)
            with self.assertRaisesRegex(ValueError, 'unsafe'):
                module.deploy(archive, 'a' * 40, digest, base)
            self.assertFalse((base / 'current').exists())
            self.assertFalse((base / 'releases/outside.html').exists())


if __name__ == '__main__':
    unittest.main()
