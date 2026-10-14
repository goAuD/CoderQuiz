# Protected static deployment

Approved rollout: `quiz.coderlap.com`, existing Debian/Caddy origin and Cloudflare
proxy, temporary Basic Auth. Separate browser login may be required. This does
not implement shared accounts or invitation-based authentication.

## Release flow

1. Review a feature branch, pass CI, merge into `dev`, then merge the reviewed
   release into `main`. Deploy the successful **main commit's** artifact.
2. CI builds only `dist/` and uploads `coderquiz-dist-<full-commit-sha>` containing
   `coderquiz-dist.tar.gz` and its SHA-256 sidecar. No raw repository is served.
3. From the already authenticated operator machine, use `gh run download` for
   that exact successful run. Compare its `headSha`, branch and checksum.
4. Copy the archive and `scripts/deploy_static.py` to a non-public staging folder
   on Debian using existing SSH. No GitHub credential or new runner is needed there.
5. Run as the unprivileged deployment owner:

```sh
python3 deploy_static.py --archive /path/to/coderquiz-dist.tar.gz \
  --commit FULL_MAIN_COMMIT_SHA --sha256 EXPECTED_ARCHIVE_SHA256
```

The helper rejects checksum mismatches, unsafe archive paths, links and existing
release directories. It extracts to a new staging directory, sets public-file
permissions, and atomically changes `/srv/www/coderquiz/current`. Previous
releases remain in `/srv/www/coderquiz/releases/<sha>`. No Caddy reload is needed
for subsequent static-content releases.

The source commit, CI run URL, archive SHA-256 and release target belong in the
release record. Check the actual deployed files against the artifact, not just
the homepage title. The source `index.html` alone is the legacy app, not this site.

## Initial Caddy and DNS setup

Keep existing vhosts intact. Add a separate `quiz.coderlap.com` block with:

- the same existing LAP Basic Auth account and TLS certificate references,
  read locally on the server; never copy credentials or hashes into Git or notes;
- root `/srv/www/coderquiz/current`, compression and `file_server` without browse;
- the existing security/noindex headers and log-header redaction;
- `Cache-Control: private, no-store` for protected HTML and question assets;
- a 404 error handler serving `/404.html`, preserving the 404 status.

Back up the current configuration privately and verify it has not changed since
preparation. Run the Caddy adapter to check syntax and inspect that authentication
precedes static serving. Prefer `caddy validate` with sufficient privileges. Where
the operator's permitted deployment path is `systemctl reload caddy`, the service's
`caddy reload` performs the actual configuration load and reports failure; restore
the on-disk backup if it fails. Do not weaken TLS-key permissions to run a check.
See [Caddy reload](https://caddyserver.com/docs/command-line#caddy-reload) and
[configuration load semantics](https://caddyserver.com/docs/api#post-load).

Once the protected host works at the origin, add one Cloudflare record:

| Type | Name | Target | Proxy | TTL |
| --- | --- | --- | --- | --- |
| CNAME | quiz | coderlap.com | Proxied | Auto |

Keep the existing Full (strict) TLS setting. The origin certificate must cover
`quiz.coderlap.com`; verify SAN and expiry before using the existing certificate.
Do not change apex/www, email, Coaster or other application records.
[Cloudflare record instructions](https://developers.cloudflare.com/dns/manage-dns-records/how-to/create-dns-records/).

## Verification and rollback

- Without credentials, the origin must return 401 for homepage and question JS.
  Wrong credentials must also fail. Check both existing LAP and new Quiz.
- Through real HTTPS, confirm a valid certificate and authenticated catalogue,
  all four package paths, DE/HU switch, answer/reload, separate saved runs and links.
- Check `Cache-Control`, noindex, unknown paths/404, and that repository files are
  absent. A Cloudflare challenge page is not proof of successful app delivery.
- Enable CoderLAP's Quiz links only after these checks pass.
- To roll content back, confirm the chosen previous release directory exists,
  create a temporary symlink to it, then atomically replace `current` with `mv -Tf`.
  Do not delete either release while diagnosing a problem.
- For initial Caddy failure, restore the exact private configuration backup and
  gracefully reload. Confirm the existing LAP remains healthy. DNS can stay
  uncreated until the host is verified.

The linked CoderLAP privacy notice describes this service's Basic Auth, local
language/topic/session storage and existing proxy/server processing. Learning
answers are not uploaded. The logs, external proxy and access restriction still
need to be maintained as real operational configuration, not just website text.
