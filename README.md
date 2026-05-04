# CoderQuiz - DSGVO and Law (LAP Prep)

A browser-based quiz for preparing for the Austrian LAP Applikationsentwickler-Coding exam. The focus is on DSGVO (EU GDPR), Austrian data protection law, copyright, software licensing, and IT security - all framed from a developer's perspective.

No build step, no dependencies, no accounts. Open index.html in a browser and start.

## Topics covered

| Section | What you will practice |
|---|---|
| DSGVO fundamentals | Legal bases, principles, definitions, fines |
| Data subject rights | Access, deletion, portability, objection |
| Data breaches | Notification timelines, obligations |
| Data protection duties | DPO, DPIA, processor contracts |
| Austrian law | DSG 2018, Datenschutzbehorde, national specifics |
| Copyright | UrhG, protection periods, software as a work |
| Software licenses | GPL, MIT, Apache 2.0, Creative Commons |
| IT security | CIA triad, SQL injection, XSS, phishing, social engineering |
| DSGVO in developer practice | Password hashing, test data, SDK responsibility, dark patterns, analytics consent, profiling |
| E-Commerce / ECG | Imprint obligations, online contracts |
| ePrivacy / Cookies | Cookie consent, tracking rules |

## Running locally

Open index.html directly in any modern browser. No server needed.

If you prefer a local HTTP server:

```
npx serve .
```

## Adding questions

Open questions.js and append to the QUESTIONS array. Each question follows this shape:

```js
{
  id: 67,
  topic: "Section name",
  question: "Question text?",
  answers: ["Option A", "Option B", "Option C", "Option D"],
  correct: 2,        // 0-based index of the correct answer
  explanation: "Why this answer is correct."
}
```

Keep the correct answer position varied. The existing 66 questions follow a C, A, D, B repeating pattern for the correct index. See docs/DEVELOPMENT.md for the full distribution rationale.

## Project plans

This quiz is the first module under the CoderQuiz name. Planned next steps include reaching 100 questions for this module, adding a Hungarian translation, and adding further modules for Applikationsentwicklung-Coding and Informatik topics. The project will eventually be hosted at coderlap.com.

See [docs/ROADMAP.md](docs/ROADMAP.md) for details.

## Tech

- Vanilla HTML, CSS, JavaScript
- No framework, no build step, no runtime dependencies
- Dark theme via CSS custom properties
- Fisher-Yates shuffle for question randomization
- SVG donut ring for the score display

## License

Apache License 2.0. See [LICENSE](LICENSE).
