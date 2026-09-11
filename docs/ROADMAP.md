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
- LAP previews: approved eight-question pilot and two approved programming
  batches covering 70 distinct source self-checks; integrated into `dev`.
  A third batch adds the final 30 programming self-checks and awaits user review.

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

- [ ] Build curriculum navigation around the CoderLAP topic hierarchy after pilot review
- [ ] Expand reviewed questions from existing CoderLAP self-checks
- [ ] Add a bookmarking / flagging feature for questions the user wants to revisit
- [ ] Host under coderlap.com domain

## Content direction: CoderLAP first

CoderLAP already has 1,143 self-check questions and matching short answers in
228 registered documents, in both DE and HU (read-only inventory, 2026-09-11).
These include 100 programming, 215 Informatik and 40 IT-security questions.
The existing CoderQuiz bank was written independently; do not assume its topics
or questions already map to that curriculum.

1. The user tried and approved the [eight-question pilot](LAP-PILOT.md).
   Continue its standalone questions and positive post-answer explanations.
   There is no separate pre-answer hint feature.
2. Work by source topic, starting with programming. Its 20 subtopics are split
   into three reviewable batches: 01–07, 08–14 and 15–20. The user has checked
   and approved both batch 1 (35 questions, port 8771) and batch 2 (35 DE/HU
   adaptations for 08–14, port 8772). Both are merged into `dev` and together
   cover 70 distinct source positions. Batch 3 (15–20, 30 questions, port 8773)
   is ready for user review. Together the three banks cover all 100 programming
   self-check positions; this does not yet combine them into one quiz module.
3. Map existing LAP topics/questions to the quiz and identify adaptations,
   missing context and ambiguous choices. Keep a traceable source snapshot.
4. Choose a minimal, versioned content handoff after the pilot. The projects
   should remain independently developable and releasable; no shared runtime
   service or automatic synchronization has been introduced.
5. Expansion and migration of the original 100 questions are paused. Keep the
   bank and its [audit notes](REVIEW.md) available for now; its eventual role or
   removal is a later decision. New content effort goes into the LAP bank.

The earlier independent batches of 20 new questions are superseded by this
source-first approach. Exact curriculum coverage matters more than a count goal.
Code examples render as escaped text; no learner-controlled execution is needed.
Each reviewed adaptation needs aligned DE/HU choices, one defensible correct
answer, a positive explanation, a stable pilot ID and an explicit LAP reference.
Do not add a separate “common exam mistakes” learning section.
Runnable examples retain their expected output and LAP reference for possible
later reuse in CoderCoaster. This is content preparation, not a shared execution
engine or an integration between the projects.

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
