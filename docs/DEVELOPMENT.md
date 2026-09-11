# Development Log

This file tracks progress, decisions, and context so any conversation thread can pick up where another left off.

## Project identity

- Working name: CoderQuiz (umbrella)
- First module: DSGVO and Law for LAP Applikationsentwicklung-Coding (Austria)
- Repo: D:\GitHub\CoderQuiz (local), https://github.com/goAuD/CoderQuiz
- License: Apache 2.0

## Architecture decisions

**No build step.** The quiz uses index.html, style.css, i18n.js, questions.js and app.js, plus local assets. Open index.html in a browser and it works. This was a deliberate choice to keep the contribution barrier low and avoid toolchain rot.

**Questions as a plain JS array.** QUESTIONS in questions.js is a global const loaded before app.js. Each entry is an object with id, topic, question, answers[], correct (0-based index), and explanation. This makes questions easy to edit in any text editor without understanding the app code.

**Answer shuffling.** Early versions used predictable correct-answer positions. The current app uses Fisher-Yates to shuffle an array of source indices (`state.shuffledOrder`). The displayed answer maps back to its original index for scoring; `correct` in questions.js remains the 0-based index in the source `answers[]` array. Language switches preserve this permutation.

**SVG score ring.** The result screen shows a donut/ring chart. The ring animation uses strokeDashoffset on a circle element. The percentage text inside the SVG is a text element updated directly in app.js (showResults function). An earlier version tried a MutationObserver approach from an inline script in index.html, which was fragile and was removed.

**Dynamic question count.** The module stats and start button derive their counts from `QUESTIONS` and the selected topics. The subtitle is localized introductory copy. No HTML change is needed when questions are added or removed.

**Internationalisation (i18n).** All UI strings live in `i18n.js` as an `I18N` object keyed by language code (`de`, `hu`). The active language is stored in `state.lang` and persisted via `localStorage` (`cq-lang`). The helper `t(key)` reads from the active language. The `html[lang]` attribute is updated on language change for accessibility.

Question content is resolved by `getQ(q, key)`, which returns `q[lang][key]` if the language is not German and that key exists, otherwise falls back to the German field (`q.question`, `q.answers`, `q.explanation`). To add Hungarian content to a question, add a `hu` sub-object: `{ question: "...", answers: [...], explanation: "..." }`. Questions without a `hu` key silently display in German.

Answer shuffle uses a permutation index array (`state.shuffledOrder`) rather than copying answer texts. `state.results` stores `correctOriginalIdx` and `selectedOriginalIdx` (positions in the source `answers[]` array). `renderWrongAnswers` re-derives text from `QUESTIONS` at render time, so switching language after answering correctly translates the wrong-answer review.

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

### 2026-05-04 - Session 5

- Added i18n architecture: i18n.js with full DE and HU UI strings + topic name map
- Added DE/HU language switcher in the header; active language persisted in localStorage
- Refactored state.shuffledOrder: stores index permutation instead of answer texts, so wrong-answer review re-derives text from the current language at render time
- All static UI strings moved out of HTML into JS via applyStaticI18n()
- Renamed master branch to main; created dev branch for ongoing development
- Updated ROADMAP: language switcher and answer distribution marked done

### 2026-05-04 - Session 4

- Renamed project to CoderQuiz across all files (title, h1, CSS comment, LICENSE, DEVELOPMENT.md repo path)
- Fixed two missing umlauts in Q4 and Q65 explanations ("Fur" / "fur" → "Für" / "für")
- Removed dead #final-percent HTML element and its corresponding JS setter
- Replaced innerHTML with safe DOM methods (createElement/textContent) in renderQuestion and renderWrongAnswers
- Replaced manual C,A,D,B answer rotation with runtime Fisher-Yates shuffle of answers per question; correct answer is now identified by isCorrect flag rather than index position

### 2026-05-05 - Session 6

- Added HU translations to all 66 existing questions (q.hu = { question, answers, explanation })
- Fixed exam name to Applikationsentwicklung-Coding across all files
- Added .claude/ to .gitignore
- Expanded DSGVO module from 66 to 100 questions (Q67-Q100) with full DE + HU content
- New topics: Zweckbindung, Rechtsgrundlagen (Art. 6), Transparenzpflicht, Auftragsverarbeiter, Einwilligung-Anforderungen, Datenubertragbarkeit, Einschrankung der Verarbeitung, Berichtigung, Datenpannen-Dokumentation, Bussgeldstufung, Schadensersatz (Art. 82), XSS, CSRF, 2FA, Least Privilege, API-Sicherheit, Fernabsatzvertrag, Widerrufsrecht, KSchG, First/Third-Party Cookies, Local Storage, Tracking-Pixel, Google Fonts, Logging, TOMs, AVV, KI und DSGVO, App-Berechtigungen, Backup-Verschlusselung, API-Design Datenschutz, E2E vs. TLS, automatisierte Entscheidungen (Art. 22), Datenschutz-Audit

## Current question sections

| Section | IDs | Count |
| --- | --- | --- |
| DSGVO Grundlagen | 1-9, 67-71 | 14 |
| Betroffenenrechte | 10-13, 72-74 | 7 |
| Datenpannen | 14-15, 75-76 | 4 |
| Datenschutzpflichten | 16-20 | 5 |
| Datenschutz Osterreich | 21-25, 77-78 | 7 |
| Urheberrecht | 26-29 | 4 |
| Softwarelizenzen | 30-35 | 6 |
| IT-Sicherheit | 36-42, 79-83 | 12 |
| DSGVO in der Praxis (developer focus) | 43-62, 90-100 | 31 |
| E-Commerce and Osterreich | 63-64, 84-86 | 5 |
| ePrivacy and Cookies | 65-66, 87-89 | 5 |
| **Total** | | **100** |

## How to add questions

1. Open questions.js
2. Add a new object to the QUESTIONS array at the end (or in the appropriate section)
3. Assign the next sequential id
4. Write 4 answer options in whatever order is clearest - position does not matter because app.js shuffles them at render time
5. Set `correct` to the 0-based index of the correct answer as written in the source array
6. Add an explanation that reinforces the correct answer

## Architecture decisions (continued)

**Setup screen and topic filter.** A setup screen (id="setup-screen") is shown before the quiz starts. It renders topic chips from the unique topics in QUESTIONS. The user can toggle topics on/off; at least one must remain active. Selected topics are persisted in localStorage ("cq-topics") as a JSON array. `filteredQuestions()` returns QUESTIONS filtered by the current selection; `init()` shuffles the result into `state.questions`.

**Progress persistence.** On starting a run, answering and advancing, `saveProgress()` writes to `cq-progress`: question IDs and revisions, current index, score, selections, topics, screen and the current answer permutation. Restore validates the complete snapshot before changing state, recomputes score from selections, and preserves unanswered choice order too. Missing/revised questions or inconsistent snapshots return to setup with a localized notice. Legacy snapshots without revisions are treated as revision `0`. Storage exceptions leave practice usable in memory with a notice; restart clears the saved run. This is personal practice state, not an authoritative exam record or an anti-cheating mechanism.

**Question revisions.** Keep IDs stable. Increase `revision` (default `0`) whenever an existing question's meaning, choice order, correct answer or explanation changes. Both language versions must retain the same correct source index. All published questions need complete DE/HU text; the runtime's German fallback is only defensive. A revision change invalidates a saved run containing that question, including completed results.

**Language-switch bug fix.** Previously, `setLang()` called `renderQuestion()` which always re-shuffled answer order and reset `state.answered = false`, losing the user's answer. Fixed by adding a `preserveAnswered` parameter to `renderQuestion()`. When called from `setLang()`, the shuffle order and answered state are preserved; the buttons are rebuilt using the same `state.shuffledOrder` and the saved answer from `state.results`.

## Known issues / tech debt

- Question IDs identify saved progress and review entries; keep them stable and unique.
- No linter or formatter configured; code style is informal but consistent

### 2026-05-05 - Session 7

- Added topic filter: setup screen with chip toggles before quiz start; topic selection persisted in localStorage
- Added progress persistence: full quiz state saved to localStorage after each answer and question advance; restored on page reload
- Fixed language-switch bug: switching language mid-question no longer reshuffles answers or resets answered state
- Added inset box-shadow to progress track for sunken-display visual effect

### 2026-05-05 - Session 8

- Added CQ logo SVG (logo.svg): brand-gradient (#5b6af0 → #a78bfa), rounded rect, bold "CQ" text
- Embedded inline SVG logo in header inside `.brand` flex row next to h1; click navigates back to setup screen without clearing progress
- Added SVG favicon via `<link rel="icon" href="logo.svg" type="image/svg+xml">`
- Added module meta strip to setup screen: exam badge (LAP Applikationsentwicklung-Coding) + stats (question count · topic count · DE/HU), rendered by `updateSetupScreen()`
- Added `examLabel` and `moduleStats(nQ, nT)` keys to both DE and HU in i18n.js
- Added `.brand`, `.logo-link`, `.module-meta`, `.module-badge`, `.module-stats-text` CSS rules

## Future session notes

If you are continuing this project in a new conversation, the key context is:

- questions.js has 100 questions; answers shuffled at render time via index permutation (state.shuffledOrder)
- i18n.js has full DE + HU UI strings including setupHeading, setupSub, startBtn(n); HU question content per q.hu
- All 100 questions have full HU translations
- app.js flow: load -> tryRestoreProgress() or showSetupScreen() -> init() on start -> quiz -> showResults()
- localStorage keys: cq-lang (language), cq-topics (selected topic names array), cq-progress (quiz state JSON)
- The integration branch is `dev`; verify remote branches before planning a release.
- CI checks syntax and runs `node --test tests/*.test.cjs` with Node's built-in test runner; authenticated hosting is a separate milestone (see ROADMAP.md).
- Header image and favicon share assets/logo.svg; logo click → showSetupScreen() (no progress clear).
- Tauri desktop wrapper is the long-term target

### 2026-09-11 – Műhely interface

- Reused CoderLAP's palette, typefaces, code-bracket icon and corner radii.
  Design tokens live in `style.css`; keep shared values aligned with CoderLAP's
  `site/assets/css/base.css`. There is no shared package or build dependency.
- Copied Manrope and Source Sans 3, each with Latin and Latin Extended WOFF2
  subsets and their OFL licenses from CoderLAP.
  All runtime assets load locally. Keep each font's license when redistributing.
- Setup uses a desktop introduction beside the topic selector, stacked on mobile.
  Quiz and result screens retain a narrower reading width. Mobile header rows
  align brand/CoderLAP on the left and GitHub/language controls on the right.
  Header and footer span the full viewport width with safe-area-aware side gutters;
  setup and question content keep their own reading-width limits.
- Header stays in normal document flow, with safe-area spacing and no sticky blur.
  Screen reveal is restrained and respects reduced motion. No artificial loader:
  questions are bundled locally and ready when the app starts.
- Topic and language buttons expose `aria-pressed`; topic selection retains focus.
  Question/result transitions focus the new heading. Answer feedback includes
  localized text and a status region, alongside the green/red visual state.
- Score and completed-question progress update immediately after answering.
  The progress bar reaches 100% after the last answer. Scoring thresholds,
  question data, answer shuffling and localStorage keys remain unchanged.
- CoderLAP links follow the selected DE/HU language. New footer copy is localized.

Validation for interface changes:

1. Run `node --check app.js`, `node --check i18n.js`, `node --check questions.js`
   and `node --test tests/*.test.cjs` (Node.js 20+; no install step).
2. Preview using the command in README. Check DE/HU at desktop, 320–390px mobile
   and landscape widths; verify long words, focus outlines and touch targets.
3. Select only Datenpannen (4 questions), verify the last topic cannot be deselected,
   then complete a run with both correct and incorrect answers. Check immediate
   score, text feedback, 100% completion and the result review.
4. Switch language and reload after an answer and at the result screen. Check the
   answer order, saved selection, score and translated feedback. Restart and check
   that the saved result clears. Use keyboard navigation and reduced motion too.
5. Verify all runtime asset URLs are local and the four font files return successfully.
   Physical iOS scrolling/safe areas remain a device check before deployment.

The initial font binding mixed system glyphs with local fonts: Manrope Latin
lacked Hungarian `ő/ű`, while Source Sans 3 Latin Extended lacked most basic Latin
characters. Both subsets are now declared with ranges matching their character
maps. When adjusting typography, check `Árvíztűrő tükörfúrógép` in headings and
body text, including uppercase accents. The README uses a larger shared logo.

### 2026-09-11 – Session recovery and release review

- Guarded storage reads/writes, invalid languages, obsolete filters and malformed
  saved sessions. Runs now save at the first unanswered question.
- Added dependency-free behavior and bilingual schema tests, including all 24
  four-choice shuffle permutations, reloads and simulated storage failures.
- Replaced invented exam pass/fail wording with practice feedback. Percentages
  remain a measure of this run, not an official LAP result.
- Result review includes the explanation as well as the correct answer, and
  translates both when switching language.
- Pinned the CI checkout action to its verified v4.2.2 commit. Semgrep stays local;
  rule downloads are allowed, findings upload/metrics are not enabled.

### 2026-09-11 – CoderLAP question pilot

- The current 100 questions were developed independently of CoderLAP. The new
  direction reuses LAP self-checks; see ROADMAP.md and LAP-PILOT.md.
- Eight adaptations live in `examples/lap-pilot.json`, with DE/HU choices and
  post-answer explanations, a pinned source commit and per-question references.
- Optional `code` is a JavaScript string displayed using `textContent` inside
  a keyboard-scrollable `pre`/`code` block. The quiz never executes that string.
  Optional `source.slug` links the explanation to the selected language's LAP
  topic. Code and source links also appear in the result review.
- `python scripts/preview_lap_pilot.py` serves the sample bank on loopback port
  8770 without copying or replacing the production bank or quiz implementation.
  Its server refuses port reuse to avoid competing listeners on Windows.
  Stop the existing server before restarting after Python changes.
- Fourteen Node tests cover existing behavior, the pilot data, displayed code
  outputs and source-link/reload behavior. Browser checks completed all eight
  questions at 390px and restored a DE result at 320px without page overflow;
  long code lines scroll inside their blocks. Physical iOS remains a device check.

### 2026-09-11 – First programming curriculum batch

- Added `examples/lap-programming-1.json`: five source-aligned DE/HU adaptations
  for each subtopic from LAP-15-01 to LAP-15-07, with post-answer explanations.
- The preview's `--bank lap-programming-1` option selects this bank and defaults
  to port 8771, keeping the original pilot on 8770 and its saved session separate.
  `--bank` accepts only explicitly listed banks; the asset allowlist is retained.
- Code blocks support `codeLanguage` (`javascript` / `pseudocode`) and show a
  localized, accessible language label. Existing snippets default to JavaScript.
  `expectedOutput` records checked JavaScript console lines for tests and later
  content reuse; it is not shown before answering or executed in the browser.
- Twenty Node tests now cover the two sample banks and existing behavior, with
  extra sorting/searching/summation edge cases. Full source mapping, adaptation
  decisions and browser validation are recorded in LAP-PILOT.md.
- The existing 100-question bank remains available; new content work follows
  LAP topics. No production dependency, synchronization service or Coaster
  integration was introduced.

### 2026-09-11 – Second programming curriculum batch

- Added `examples/lap-programming-2.json`: 35 bilingual adaptations for
  LAP-15-08 through LAP-15-14, including 14 runnable JavaScript examples with
  recorded output. Both curriculum banks now cover 70 distinct source positions.
- `--bank lap-programming-2` starts the same preview on port 8772. `BANK_PORTS`
  centralizes permitted bank names and default ports; the loopback binding and
  file-serving allowlist remain in force.
- Reused the full-run and schema tests for both programming banks. Added
  cross-bank uniqueness checks and factorial base-case/domain verification.
  All 25 tests pass; the source and browser review is recorded in LAP-PILOT.md.
- Batch 1 has user approval; batch 2 awaits content review. No rendering change,
  runtime dependency, deployment or Coaster integration was needed.
