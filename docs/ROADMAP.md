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

## Content expansion sequence

First finish the corrections tracked in [REVIEW.md](REVIEW.md). Increasing the
count does not by itself increase coverage. Then use small, separately reviewed
DE/HU batches, starting with the main learning focus: programming.

| Batch | Proposed scope | Learning tasks |
| --- | --- | --- |
| Programming 1: about 20 questions | JavaScript values/types, branches, loops, functions, arrays and objects | Trace a short snippet, predict its output, explain the next step |
| Programming 2: about 20 | Linear/binary search, bubble sort, collections, complexity, debugging and tests | Trace an iteration, choose a suitable approach, reason about edge cases |
| Informatik 1: about 20 | CPU/RAM/storage, processes/threads, files and permissions | Apply concepts to concrete system behavior |
| Informatik 2: about 20 | IP/DNS/HTTP/TLS, relational data, keys, joins and transactions | Follow a request or a small data example |
| Security 1: about 12–16 additional questions | Authentication/authorization, sessions, password storage, secrets, XSS/SQLi, least privilege | Select and explain a safe implementation in a short scenario |
| Security 2: about 12–16 additional questions | Backups/restoration, updates, phishing, incident response and threat assessment | Decide what to verify or do next, with reasons |

These are planning batches, not implemented modules or promised final counts.
Before adding content, map objectives to the CoderLAP topics and the actual LAP
curriculum. Keep current IDs and the existing quiz flow; decide the minimal
module selector only when the first second-module batch is ready. No package or
backend is needed for static content. Code examples should render as escaped
`pre`/`code` text; no learner-controlled code execution is needed for tracing.

Acceptance per batch: one clear learning objective per question, one defensible
correct answer, plausible distinct distractors, aligned DE/HU choices, a positive
explanation with a worked example where useful, and a primary-source reference
in the review record. Validate executable example outputs locally. Do not add a
separate “common exam mistakes” learning section.

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

If subdomains are chosen, normally create one DNS record for `quiz` and one for
`coaster` (CNAME for a hostname target, A/AAAA for the applicable IP targets), then
configure hosting routes, TLS and access protection. DNS alone does not publish
the applications. See [Cloudflare subdomains](https://developers.cloudflare.com/dns/manage-dns-records/how-to/create-subdomain/).

Shared Basic Auth credentials do not promise a shared browser login across
different origins; the authentication protection space includes the origin
([RFC 9110](https://www.rfc-editor.org/rfc/rfc9110.html#name-protection-space-realm)).
Choose later between one origin with paths and a shared protection space, or
subdomains with a central sign-in service. Keep that architectural decision
separate from question work; no auth provider has been selected.
