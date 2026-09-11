<p align="center">
  <img src="assets/logo.svg" width="128" height="128" alt="CoderQuiz" />
</p>

<h1 align="center">CoderQuiz</h1>

<p align="center">
  Exam prep quiz for the Austrian LAP Applikationsentwicklung-Coding.<br/>
  DSGVO · IT law · IT security - through a developer's lens.
</p>

<p align="center">
  <img src="https://img.shields.io/badge/license-Apache_2.0-5b6af0?style=flat-square" alt="License" />
  <img src="https://img.shields.io/badge/questions-100-a78bfa?style=flat-square" alt="100 questions" />
  <img src="https://img.shields.io/badge/languages-DE_%2F_HU-5b6af0?style=flat-square" alt="DE / HU" />
  <img src="https://img.shields.io/badge/dependencies-none-22c55e?style=flat-square" alt="No dependencies" />
  <img src="https://github.com/goAuD/CoderQuiz/actions/workflows/ci.yml/badge.svg?branch=dev" alt="CI on dev" />
</p>

The Műhely interface follows CoderLAP: light surfaces, blue accents, locally served
Manrope and Source Sans 3 fonts, and a mobile layout for choosing topics and answering questions.

---

## Topics

| Section | What you will practice |
| --- | --- |
| DSGVO fundamentals | Legal bases, principles, definitions, fines |
| Data subject rights | Access, deletion, portability, objection |
| Data breaches | Notification timelines, obligations |
| Data protection duties | DPO, DPIA, processor contracts |
| Austrian law | DSG 2018, Datenschutzbehörde, national specifics |
| Copyright | UrhG, protection periods, software as a work |
| Software licenses | GPL, MIT, Apache 2.0, Creative Commons |
| IT security | XSS, CSRF, 2FA, least privilege, API security |
| DSGVO in developer practice | Password hashing, test data, SDK responsibility, dark patterns, Art. 22 automated decisions |
| E-Commerce / ECG | Imprint obligations, distance selling, withdrawal rights |
| ePrivacy / Cookies | Cookie consent, tracking rules, local storage, Google Fonts |

## Running locally

Open `index.html` directly in any modern browser. No server, no install, no build step.

```sh
# optional local HTTP server (Python 3)
python -m http.server 8768 --bind 127.0.0.1
```

Then open <http://127.0.0.1:8768>. Stop the server with `Ctrl+C`.
For a phone on the same trusted Wi-Fi, use `--bind 0.0.0.0` and open
`http://<your-computer-LAN-IP>:8768` on the phone. `localhost` on a phone refers to
the phone itself. This preview server has no authentication; use it only on your
trusted local network and stop it after previewing.

To try the eight questions adapted from existing CoderLAP self-checks:

```sh
python scripts/preview_lap_pilot.py
```

Open <http://127.0.0.1:8770/>. This local pilot uses the same quiz engine with a
separate sample bank. See [LAP-PILOT.md](docs/LAP-PILOT.md) for source mapping and
review criteria. Explanations appear after answering; there is no separate hint.

The first programming batch covers all five self-checks in LAP-15-01 through
LAP-15-07: 35 DE/HU questions. Start its separate preview with:

```sh
python scripts/preview_lap_pilot.py --bank lap-programming-1
```

Open <http://127.0.0.1:8771/>. Keep a separate port per bank to preserve each
practice session. See [the batch notes](docs/LAP-PILOT.md#programming-batch-1).

The second programming batch adds 35 DE/HU questions from LAP-15-08 through
LAP-15-14, with 14 executable JavaScript examples:

```sh
python scripts/preview_lap_pilot.py --bank lap-programming-2
```

Open <http://127.0.0.1:8772/>. The first two curriculum batches cover 70 distinct
LAP self-checks. See [batch 2 notes](docs/LAP-PILOT.md#programming-batch-2).

The third programming batch adds 30 DE/HU questions from LAP-15-15 through
LAP-15-20, with 24 executable JavaScript examples:

```sh
python scripts/preview_lap_pilot.py --bank lap-programming-3
```

Open <http://127.0.0.1:8773/>. All three curriculum batches together cover the
100 self-check positions across all 20 programming subtopics. All three batches
are approved and merged into `dev`; they remain separate previews.
See [batch 3 notes](docs/LAP-PILOT.md#programming-batch-3).

For iPhone testing on the same trusted LAN, start an additional listener on
your computer's LAN address (replace the example IP with your own):

```sh
python scripts/preview_lap_pilot.py --bank lap-programming-3 --bind 192.168.0.50
```

Open <http://192.168.0.50:8773/> on the phone. The default remains loopback-only;
the explicit LAN listener can coexist with it on its separate address. This
preview has no authentication, so use it only on a trusted LAN and stop it with
`Ctrl+C` afterwards. If Windows Firewall blocks access, allow this TCP port only
on the private network from the local subnet. Different host addresses keep
separate browser progress.

## Adding questions

New curriculum work belongs in the LAP-based banks under `examples/`, following
the pinned source mapping in [LAP-PILOT.md](docs/LAP-PILOT.md). Expansion of the
original 100-question bank is paused. Its existing `QUESTIONS` format remains:

```js
{
  id: 101,
  topic: "Section name",
  question: "Question text?",
  answers: ["Option A", "Option B", "Option C", "Option D"],
  correct: 2,          // 0-based index into answers[]
  explanation: "Why this answer is correct.",
  hu: {                // required for published questions; keep answer indices aligned
    question: "...",
    answers: ["...", "...", "...", "..."],
    explanation: "..."
  }
}
```

Answers are shuffled at render time - write them in whatever order is clearest.
Keep IDs stable. When changing an existing question's meaning, choices, correct
answer or explanation, increase its `revision` integer (omitted means `0`). This
prevents an older saved answer being interpreted against revised content.

Run validation with Node.js 20 or newer; no package installation is needed:

```sh
node --test tests/*.test.cjs
```

The tests cover saved sessions, shuffle/score behavior and bilingual data structure.
They do not establish factual accuracy; questions also need source and language review.

## Tech

- Vanilla HTML / CSS / JavaScript - no framework, no build step, no runtime dependencies
- Fisher-Yates shuffle on an index permutation (answers never mutate)
- i18n via `I18N` object in `i18n.js`; active language persisted in `localStorage`
- Topic filter and quiz progress persisted in `localStorage`
- SVG donut ring for score display
- Műhely design tokens in `style.css`; shared visual identity with CoderLAP
- Local fonts and assets; no analytics, advertising, CDN requests or runtime packages
- Keyboard focus, text-based answer feedback, reduced-motion support and iOS safe-area spacing
- A localized back-to-top button appears after scrolling 400px, with room below footer links

The header/footer use `assets/workshop-frame.css`, an identical local copy of
CoderLAP's `site/assets/css/workshop-frame.css`. Update all three project copies
together; app content remains independent. Local Lucide navigation arrows use
the notices in [LICENSE-Lucide.txt](assets/LICENSE-Lucide.txt).

See [DEVELOPMENT.md](docs/DEVELOPMENT.md) for validation and design maintenance.
The [release review](docs/REVIEW.md) records corrected questions, source references
and remaining editorial work; this bank is not yet a complete LAP curriculum.

## License

Apache License 2.0 - see [LICENSE](LICENSE).

Bundled fonts use the SIL Open Font License 1.1:
[Manrope](assets/fonts/OFL-Manrope.txt) and
[Source Sans 3](assets/fonts/OFL-Source-Sans-3.txt).
