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
  <img src="https://img.shields.io/badge/CI-passing-22c55e?style=flat-square" alt="CI" />
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

## Adding questions

Append to the `QUESTIONS` array in `questions.js`:

```js
{
  id: 101,
  topic: "Section name",
  question: "Question text?",
  answers: ["Option A", "Option B", "Option C", "Option D"],
  correct: 2,          // 0-based index into answers[]
  explanation: "Why this answer is correct.",
  hu: {                // optional Hungarian translation
    question: "...",
    answers: ["...", "...", "...", "..."],
    explanation: "..."
  }
}
```

Answers are shuffled at render time - write them in whatever order is clearest.

## Tech

- Vanilla HTML / CSS / JavaScript - no framework, no build step, no runtime dependencies
- Fisher-Yates shuffle on an index permutation (answers never mutate)
- i18n via `I18N` object in `i18n.js`; active language persisted in `localStorage`
- Topic filter and quiz progress persisted in `localStorage`
- SVG donut ring for score display
- Műhely design tokens in `style.css`; shared visual identity with CoderLAP
- Local fonts and assets; no analytics, advertising, CDN requests or runtime packages
- Keyboard focus, text-based answer feedback, reduced-motion support and iOS safe-area spacing

See [DEVELOPMENT.md](docs/DEVELOPMENT.md) for validation and design maintenance.

## License

Apache License 2.0 - see [LICENSE](LICENSE).

Bundled fonts use the SIL Open Font License 1.1:
[Manrope](assets/fonts/OFL-Manrope.txt) and
[Source Sans 3](assets/fonts/OFL-Source-Sans-3.txt).
