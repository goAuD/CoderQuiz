# Development Log

This file tracks progress, decisions, and context so any conversation thread can pick up where another left off.

## Project identity

- Working name: CoderQuiz (umbrella)
- First module: DSGVO and Law for LAP Applikationsentwickler-Coding (Austria)
- Repo: C:\GitHub\CoderQuiz (local), will mirror to GitHub
- Domain: coderlap.com (registered, not yet pointed)
- License: Apache 2.0

## Architecture decisions

**No build step.** The quiz is three files: index.html, style.css, questions.js, app.js. Open index.html in a browser and it works. This was a deliberate choice to keep the contribution barrier low and avoid toolchain rot.

**Questions as a plain JS array.** QUESTIONS in questions.js is a global const loaded before app.js. Each entry is an object with id, topic, question, answers[], correct (0-based index), and explanation. This makes questions easy to edit in any text editor without understanding the app code.

**Correct answer distribution.** Early versions had all correct answers at position 1 (B), making the quiz gameable. The fix was to manually assign correct positions following a repeating C, A, D, B pattern so that across 66 questions the distribution is roughly equal: A=17, B=16, C=17, D=16. When adding new questions, continue the pattern or re-run a distribution check.

**SVG score ring.** The result screen shows a donut/ring chart. The ring animation uses strokeDashoffset on a circle element. The percentage text inside the SVG is a text element updated directly in app.js (showResults function). An earlier version tried a MutationObserver approach from an inline script in index.html, which was fragile and was removed.

**Dynamic question count in subtitle.** The header subtitle reads "X Fragen" where X is set from QUESTIONS.length at init time via a span#question-count. This means adding or removing questions from questions.js automatically updates the displayed count with no HTML change needed.

## Progress log

### 2026-05-04 - Session 1

- Created initial project: index.html, style.css, app.js, questions.js
- 50 questions covering DSGVO, DSG 2018, UrhG, licenses, IT security, ECG, ePrivacy
- Dark UI with CSS variables, no framework
- Apache 2.0 license, local git repo initialized

### 2026-05-04 - Session 2 (same day, continued)

- Removed em-dashes from all question and answer text
- Removed article number references (e.g., "Art. 5 DSGVO") from question body text
- Added dynamic question count to the header subtitle
- Removed duplicate "Privacy by Design" question
- Added more software development adjacent questions (later revised, see below)

### 2026-05-04 - Session 3 (continued)

- Revised question focus: removed generic software development questions (OOP, Git, Scrum, SQL, debugging)
- Replaced with DSGVO topics viewed through a developer's lens: password hashing, test data anonymization, SDK responsibility, dark patterns, deletion timelines, biometric data, personal data in Git repos, analytics consent, profiling rules
- Total questions grew to 66
- Fixed "always B correct" problem by reshuffling answer arrays so correct positions follow C, A, D, B repeating pattern
- Created docs/ folder with ROADMAP.md and DEVELOPMENT.md (this file)
- Updated README.md to English

## Current question sections

| Section | IDs | Count |
|---|---|---|
| DSGVO Grundlagen | 1-9 | 9 |
| Betroffenenrechte | 10-13 | 4 |
| Datenpannen | 14-15 | 2 |
| Datenschutzpflichten | 16-20 | 5 |
| Datenschutz Osterreich | 21-25 | 5 |
| Urheberrecht | 26-29 | 4 |
| Softwarelizenzen | 30-35 | 6 |
| IT-Sicherheit | 36-42 | 7 |
| DSGVO in der Praxis (developer focus) | 43-62 | 20 |
| E-Commerce and Osterreich | 63-64 | 2 |
| ePrivacy and Cookies | 65-66 | 2 |
| **Total** | | **66** |

## How to add questions

1. Open questions.js
2. Add a new object to the QUESTIONS array at the end (or in the appropriate section)
3. Assign the next sequential id
4. Check what correct position the pattern calls for: the repeating sequence is C(2), A(0), D(3), B(1). Question 67 would be C(2), 68 would be A(0), and so on.
5. Write 4 answer options and put the correct answer text at the target index position
6. Add an explanation that reinforces the correct answer

## Known issues / tech debt

- No automated test for answer distribution - a manual count or a small Node script is needed after bulk changes
- The question id field is not actually used by the quiz logic; it is there for human reference only
- No linter or formatter configured; code style is informal but consistent

## Future session notes

If you are continuing this project in a new conversation, the key context is:

- questions.js has 66 questions, correct answers at varied positions
- app.js and index.html are committed and clean
- The next milestone is reaching 100 questions in the DSGVO module
- Hungarian translation is planned but not started
- GitHub Pages deployment and GitHub Actions workflow are next after question count target is met
