# CoderQuiz - Roadmap

## Current rollout decision: 2026-10-14

The user approved the Quiz subdomain launch with temporary Basic Auth. Shared
invitation-based sign-in stays a separate later task. Four normal static package
URLs now expose 135 reviewed LAP questions: all 100 programming self-checks and
35 Informatik questions. Only `dist/` is deployable. The legacy bank remains local.

The [v0.1.0 release](https://github.com/goAuD/CoderQuiz/releases/tag/v0.1.0)
is deployed at `https://quiz.coderlap.com/`. Its main CI artifact matches all
27 deployed files. Proxied DNS, valid HTTPS, Basic Auth rejection of missing or
incorrect credentials, and private/no-store responses are verified.
After the operator signed in manually, authenticated production checks passed:
all four package paths, DE/HU switching, answer explanations and saved-answer
restoration after reload/package switching. The 390 px browser viewport had no
horizontal overflow; a fresh physical iPhone check remains a follow-up.
CoderLAP entry-link activation is tracked in the shared roadmap below.
See [DEPLOYMENT.md](DEPLOYMENT.md).
SkillDisplay remains pending the teacher's reply; this rollout does not add it.

## Earlier cross-project plan: 2026-09-30

The shared execution order is maintained in the CoderLAP
[learning-platform roadmap](https://github.com/goAuD/CoderLAP/blob/dev/docs/plans/2026-09-30-learning-platform-roadmap.md).
Documentation PR #13 is merged into `dev` (`ed0c41c`). Before deployment, make
the approved LAP programming banks available from a normal static entry point;
the preview server's bank substitution is not a production delivery mechanism.
Then verify hosting, DNS, TLS and access protection before enabling LAP links.
Progress/search work and the SkillDisplay pilot have separate scopes in that
plan. Its new document is being introduced in the companion LAP documentation PR.

The sections below retain the Quiz-specific content and implementation detail.

CoderQuiz is a collection of exam prep quizzes aimed at Austrian apprenticeship
exams (LAP). Published packages follow the CoderLAP curriculum; the independent
DSGVO and law bank is retained in the repository for editorial reference.

## Historical state before curriculum launch

- Module: DSGVO and Law (DE + HU)
- Questions: 100, focused on DSGVO through a developer's lens; all with full HU translations
- Topic filter: setup screen with chips; last selection persisted in localStorage
- Progress persistence: quiz state saved to localStorage; restored on page reload
- Tech: Vanilla HTML/CSS/JS, no dependencies, no build step
- Interface: approved shared Műhely header/footer, local fonts and Lucide icons,
  DE/HU mobile and keyboard support, back-to-top navigation
- Hosting: local / file:// for now
- LAP previews: approved eight-question pilot and three approved programming
  batches covering all 100 programming source self-checks; integrated into `dev`.

## Latest Integration — 2026-09-11

PR #11 (back-to-top) and PR #12 (shared header/footer) are approved and merged
into `dev` at `e464d1766000e35b963bfe5745ca07cc98653529`. The resulting tree
matches the reviewed code; CI and CodeQL passed on that merge commit.
CoderLAP's matching frame is deployed; CoderCoaster's is merged into its `main`.
The three `workshop-frame.css` copies are byte-identical.

At that point, production hosting, DNS and shared sign-in were deferred by
user decision. The 2026-10-14 release above supersedes that hosting/DNS pause.
The root source `index.html` still opens the independent DSGVO bank locally;
the production build generates the curriculum catalogue in `dist/index.html`.

## Short-term Goals

- [x] Bring question count to 100 for the DSGVO module
- [x] Add a language switcher (DE/HU) - i18n architecture in place, all 100 questions have HU content
- [x] Answer distribution fixed - answers are shuffled at render time, no manual rotation needed
- [x] Topic filter - setup screen with topic chips; quiz starts with filtered question set
- [x] Progress persistence - quiz state saved to localStorage; restored after page reload
- [x] Set up GitHub Actions workflow for basic validation (syntax check, question count, duplicate ID check)
- [x] Adapt the CoderLAP Műhely identity to setup, quiz and result screens
- [x] Deploy the reviewed static packages behind temporary Basic Auth
- [x] Complete authenticated production browser verification

## Medium-term Goals

- [x] Build a static package catalogue for the reviewed CoderLAP banks
- [ ] Expand reviewed questions from existing CoderLAP self-checks
- [ ] Add a bookmarking / flagging feature for questions the user wants to revisit
- [x] Host at quiz.coderlap.com

## Content direction: CoderLAP first

CoderLAP now has 1,164 self-check questions and matching short answers in
235 registered documents, in both DE and HU (reviewed release, 2026-10-14).
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
   is also approved and merged after desktop and iPhone review. The three banks cover all 100 programming
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

CoderLAP and CoderQuiz run behind Caddy Basic Auth on the existing Debian
origin. Cloudflare has a proxied `quiz` CNAME pointing to `coderlap.com`;
Full (strict) TLS remains enabled. CoderQuiz links back to CoderLAP, including
the shared privacy and imprint pages. CoderCoaster hosting remains a separate
task; no Coaster or shared-auth DNS record was added in this rollout.

Shared Basic Auth credentials do not promise a shared browser login across
different origins; the authentication protection space includes the origin
([RFC 9110](https://www.rfc-editor.org/rfc/rfc9110.html#name-protection-space-realm)).
Choose later between one origin with paths and a shared protection space, or
subdomains with a central sign-in service. Keep that architectural decision
separate from question work; no auth provider has been selected.
