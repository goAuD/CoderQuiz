# CoderQuiz - Roadmap

CoderQuiz is a collection of exam prep quizzes aimed at Austrian apprenticeship exams (LAP) and related IT certifications. The current module covers DSGVO and legal topics for the Applikationsentwickler-Coding exam.

## Current State

- Module: DSGVO and Law (German)
- Questions: 66, focused on DSGVO through a developer's lens
- Tech: Vanilla HTML/CSS/JS, no dependencies, no build step
- Hosting: local / file:// for now

## Short-term Goals

- [ ] Bring question count to 100 for the DSGVO module
- [ ] Add a Hungarian translation of the DSGVO module
- [ ] Review and improve answer distribution across A/B/C/D positions
- [ ] Set up GitHub Actions workflow for basic validation (JSON lint, question count check)
- [ ] Deploy to GitHub Pages at the project repo

## Medium-term Goals

- [ ] Add a second module: Applikationsentwicklung-Coding (algorithms, data structures, complexity, basic security coding)
- [ ] Add a third module: Informatik (general computer science fundamentals)
- [ ] Introduce a topic filter on the quiz screen so users can drill specific sections
- [ ] Add a bookmarking / flagging feature for questions the user wants to revisit
- [ ] Host under coderlap.com domain

## Long-term / Stretch Goals

- [ ] CoderQuiz as a proper multi-topic landing page at coderlap.com
- [ ] Offline-first PWA (service worker, installable)
- [ ] Desktop app wrapper (Tauri or Electron, most likely Tauri for size)
- [ ] User accounts with progress tracking (would require a backend)
- [ ] Community contribution flow for new questions (PR template, review checklist)

## Non-goals (for now)

- No frameworks (React, Vue, etc.) unless the complexity genuinely demands it
- No paid features
- No tracking or analytics on the quiz itself (DSGVO irony avoidance)

## Domain and Hosting Plan

The domain coderlap.com is already registered. The plan is to host CoderQuiz there, with the DSGVO module as the first published quiz. GitHub Pages will serve as the initial deployment target before any custom domain DNS is pointed.
