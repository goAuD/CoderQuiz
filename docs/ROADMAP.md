# CoderQuiz - Roadmap

CoderQuiz is a collection of exam prep quizzes aimed at Austrian apprenticeship exams (LAP) and related IT certifications. The current module covers DSGVO and legal topics for the Applikationsentwicklung-Coding exam.

## Current State

- Module: DSGVO and Law (DE + HU)
- Questions: 100, focused on DSGVO through a developer's lens; all with full HU translations
- Topic filter: setup screen with chips; last selection persisted in localStorage
- Progress persistence: quiz state saved to localStorage; restored on page reload
- Tech: Vanilla HTML/CSS/JS, no dependencies, no build step
- Interface: CoderLAP Műhely style, local fonts, DE/HU mobile and keyboard support
- Hosting: local / file:// for now

## Short-term Goals

- [x] Bring question count to 100 for the DSGVO module
- [x] Add a language switcher (DE/HU) - i18n architecture in place, all 100 questions have HU content
- [x] Answer distribution fixed - answers are shuffled at render time, no manual rotation needed
- [x] Topic filter - setup screen with topic chips; quiz starts with filtered question set
- [x] Progress persistence - quiz state saved to localStorage; restored after page reload
- [x] Set up GitHub Actions workflow for basic validation (syntax check, question count, duplicate ID check)
- [x] Adapt the CoderLAP Műhely identity to setup, quiz and result screens
- [ ] Prepare an authenticated deployment under coderlap.com after preview approval

## Medium-term Goals

- [ ] Add a second module: Applikationsentwicklung-Coding (algorithms, data structures, complexity, basic security coding)
- [ ] Add a third module: Informatik (general computer science fundamentals)
- [ ] Add a bookmarking / flagging feature for questions the user wants to revisit
- [ ] Host under coderlap.com domain

## Long-term / Stretch Goals

- [ ] Offline-first PWA (service worker, installable) — lower priority if Tauri desktop is the main target
- [ ] Desktop app wrapper (Tauri or Electron, most likely Tauri for size)
- [ ] User accounts with progress tracking (would require a backend)
- [ ] Community contribution flow for new questions (PR template, review checklist)

## Non-goals (for now)

- No frameworks (React, Vue, etc.) unless the complexity genuinely demands it
- No paid features
- No tracking or analytics on the quiz itself (DSGVO irony avoidance)

## Domain and Hosting Plan

CoderLAP is already used in production behind Caddy Basic Auth. CoderQuiz and
CoderCoaster are planned as related tools, potentially on subdomains of
coderlap.com, with Basic Auth retained. CoderQuiz links back to CoderLAP now;
its final hostname and deployment setup are a separate task. Public GitHub Pages
deployment is no longer the planned first step.
