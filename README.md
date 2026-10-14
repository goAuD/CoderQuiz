<p align="center">
  <img src="assets/logo.svg" width="128" height="128" alt="CoderQuiz" />
</p>
<h1 align="center">CoderQuiz</h1>
<p align="center">Practice what you learn in CoderLAP. German and Hungarian, with explanations after every answer.</p>

CoderQuiz is a static practice app for the Austrian LAP
Applikationsentwicklung-Coding. It uses the shared Műhely interface, local fonts
and Lucide icons. There are no runtime dependencies, analytics, advertising,
accounts or server-side learning records.

## Reviewed curriculum

| Package | Source topics | Questions |
| --- | --- | ---: |
| Programming 1 | LAP-15-01 to LAP-15-07 | 35 |
| Programming 2 | LAP-15-08 to LAP-15-14 | 35 |
| Programming 3 | LAP-15-15 to LAP-15-20 | 30 |
| Informatik 1 | LAP-11-01 to LAP-11-07 | 35 |
| **Total** | **27 distinct CoderLAP topics** | **135** |

Every question has four choices, one correct answer, aligned DE/HU explanations,
a stable ID and a link to its source topic. The four packages were checked
against CoderLAP commit `cefce00affa0f357e7cc3e752abf082cad0ae1d0`.
Programming covers all 100 self-check positions in its 20 subtopics; it does not
claim a separate quiz question for every detail in the expanded learning text.

The original independent 100-question law/privacy bank remains in `questions.js`
for local use and history. Its content review is unfinished,
so it is **not included in the published site**. The eight-question pilot is also
kept as a development sample rather than counted twice.

## Build and preview

Node.js 20 or newer, plus Python 3 for the optional preview. No package install.

```sh
node scripts/build-static.cjs
python -m http.server 8775 --bind 127.0.0.1 --directory dist
```

Open <http://127.0.0.1:8775/>. The homepage lists the four packages. Each has its
own URL and saved session, so changing packages does not discard another run.
Language preference is shared within the Quiz origin.

For a phone on the same trusted network, replace `127.0.0.1` with your computer's
LAN address and use that address on the phone. The local preview is not
password-protected. Stop it with `Ctrl+C` after testing. Do not serve the Git
checkout as a production web root; publish only `dist/`.

The source `index.html` still opens the original standalone bank directly.
The existing per-bank development preview remains available:

```sh
python scripts/preview_lap_pilot.py --bank lap-informatik-1
```

Its default port is 8774. Programming previews use 8771, 8772 and 8773.

## Validation

```sh
node --test tests/*.test.cjs
python -m unittest discover -s tests -p "test_*.py"
node scripts/build-static.cjs
```

Tests cover shuffle permutations, restored/revised sessions, language changes,
package isolation, all four complete quiz runs, executable code examples,
bilingual question structure, generated links and the static artifact boundary.
Deployment tests use temporary directories; symlink promotion runs on Linux in CI.
These checks complement editorial source review and browser/mobile checks.

## Content maintenance

- Add reviewed curriculum packages to `quiz-banks.json`; title, description and
  counts come from their source JSON, without a second hand-maintained catalogue.
- Keep question IDs stable. Increase `revision` when a question's meaning,
  choices, correct answer or explanation changes. An affected saved run then
  resets with a clear notice rather than reinterpreting an old answer.
- Explanations appear after answering. There is no separate hint or mistakes chapter.
- Code is displayed as escaped text, never executed in the learner's browser.
  JavaScript output is tested during development; HTML/XML fragments are labelled.
- Keep DE/HU choices in the same source order; the app shuffles their display.

Question banks keep a pinned CoderLAP source commit and per-question references.
Keep German and Hungarian choices and explanations aligned, and run the tests
after editing a bank. General programming examples use JavaScript; technology
topics use their own language. Explanations appear after an answer.

## Hosting and privacy

Target: `https://quiz.coderlap.com`, on the existing Debian/Caddy origin behind
Cloudflare. The initial rollout uses Basic Auth. The browser may request a
separate login from CoderLAP; shared invitation-based access is later work.

Only the language, selected topics and quiz session are stored in the local
browser. Answers and scores are not sent to an application server. Clearing
site data removes these local saves. The homepage and packages link to the
operator's CoderLAP imprint and privacy notice.

CI packages only the generated `dist/` directory, with a SHA-256 checksum.
Deploy the successful `main` build using `scripts/deploy_static.py`; its `--help`
lists the archive, commit and checksum arguments. Keep credentials and
machine-specific deployment notes outside Git.
[Release notes](docs/releases/v0.1.0.md) record the first curriculum release.

Only `docs/releases/` and optional public `docs/assets/` are tracked under
`docs/`. Planning notes and local agent settings stay ignored.

## Shared design and license

`assets/workshop-frame.css` is an identical local copy of CoderLAP's canonical
`site/assets/css/workshop-frame.css`. Keep all three project copies synchronized;
app content and releases remain independent.

Apache 2.0: [LICENSE](LICENSE). Local fonts:
[Manrope](assets/fonts/OFL-Manrope.txt),
[Source Sans 3](assets/fonts/OFL-Source-Sans-3.txt), both SIL OFL 1.1.
Local Lucide icons: [notice](assets/LICENSE-Lucide.txt).
