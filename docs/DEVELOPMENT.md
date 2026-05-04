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

**Answer shuffling.** Early versions had all correct answers at position 1 (B), making the quiz gameable. A manual C,A,D,B rotation was added as a workaround, but this was still a predictable pattern a careful student could exploit. The proper fix (2026-05-04) is to shuffle each question's answer array at render time in app.js: answers are mapped to `{text, isCorrect}` objects, shuffled via Fisher-Yates, and the correct answer is identified by the `isCorrect` flag rather than by index. The `correct` field in questions.js remains a 0-based index into the source `answers[]` array and is only used to set `isCorrect` before the shuffle.

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
- Fixed "always B correct" problem by reshuffling answer arrays so correct positions follow C, A, D, B repeating pattern (later replaced by runtime shuffle, see 2026-05-04 Session 4)
- Created docs/ folder with ROADMAP.md and DEVELOPMENT.md (this file)
- Updated README.md to English

### 2026-05-04 - Session 4

- Renamed project to CoderQuiz across all files (title, h1, CSS comment, LICENSE, DEVELOPMENT.md repo path)
- Fixed two missing umlauts in Q4 and Q65 explanations ("Fur" / "fur" → "Für" / "für")
- Removed dead #final-percent HTML element and its corresponding JS setter
- Replaced innerHTML with safe DOM methods (createElement/textContent) in renderQuestion and renderWrongAnswers
- Replaced manual C,A,D,B answer rotation with runtime Fisher-Yates shuffle of answers per question; correct answer is now identified by isCorrect flag rather than index position

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
4. Write 4 answer options in whatever order is clearest — position does not matter because app.js shuffles them at render time
5. Set `correct` to the 0-based index of the correct answer as written in the source array
6. Add an explanation that reinforces the correct answer

## Known issues / tech debt

- The question id field is not actually used by the quiz logic; it is there for human reference only
- No linter or formatter configured; code style is informal but consistent

## Future session notes

If you are continuing this project in a new conversation, the key context is:

- questions.js has 66 questions; answers are shuffled at render time so correct position in source does not matter
- app.js and index.html are committed and clean
- The next milestone is reaching 100 questions in the DSGVO module
- Hungarian translation is planned but not started
- GitHub Pages deployment and GitHub Actions workflow are next after question count target is met
