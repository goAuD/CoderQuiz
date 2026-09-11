# CoderLAP question pilot

Eight DE/HU multiple-choice adaptations from six existing CoderLAP subtopics.
The canonical pilot data is [examples/lap-pilot.json](../examples/lap-pilot.json).
The original 100-question bank is not part of this pilot.

The user approved this first sample. Curriculum expansion now proceeds topic by
topic; see [Programming batch 1](#programming-batch-1) below.

Current handoff (2026-09-11): all three programming batches are approved and
merged into `dev` (35 + 35 + 30 questions across all 20 programming subtopics).
The shared header/footer and back-to-top button are also approved and merged
through PRs #11/#12. These are still separate preview banks; the default root
app still uses the independent DSGVO bank. Hosting, shared sign-in and the
production curriculum entry point remain to be decided; see [ROADMAP.md](ROADMAP.md).

“Hint” in this project discussion means the **explanation after answering**.
There is no separate clue, help button, hint penalty or multi-stage hint system.

## Try it

From the CoderQuiz repository, with Python 3.9+:

```sh
python scripts/preview_lap_pilot.py
```

Open <http://127.0.0.1:8770/>. Stop with Ctrl+C. The server listens on this
computer only. A separate port keeps this practice state separate from the
usual preview; keep using 8770 for this pilot, not another question bank.

The development server reuses the existing HTML, CSS, translations and quiz
engine. Only the question response and preview labels change. No generated
application copy, package, backend service or deploy configuration is needed.
Use all six topics for eight questions, or select one topic to review its examples.

## Source mapping and adaptation

All source references point to CoderLAP commit
`466a2ee8a5dbd8dc17b67a546e3ac7aacf5115e8`. Each record contains the topic ID,
source path, slug and self-check question position. That position identifies the
question **within this source snapshot**; it is not a permanent ID for future
automated imports. Do not silently retarget an entry when source questions move.

| Source topic | Self-check | Pilot focus | Adaptation |
| --- | --- | --- | --- |
| LAP-01-01 | 1 | ASCII bit width | Direct question; explanation connects 7 bits with 128 codes |
| LAP-01-02 | 6 | Bit/byte conversion | Concrete 100 Mbit/s calculation with explicit decimal units and idealized conditions |
| LAP-15-17 | 1 | Loop body versus condition checks | Include the original runnable `for` example |
| LAP-15-17 | 4 | Empty-array summation | Include the summation example with the specified empty input |
| LAP-15-05 | 1 | Why Bubble Sort's boundary shrinks | State traversal and swap rule; explain the first pass of the LAP example |
| LAP-15-06 | 2 | First binary-search comparison | Extract a complete runnable midpoint calculation with the original array |
| LAP-07-07 | 2 | Incremental backup | Sunday/Monday/Tuesday scenario makes the reference backup explicit |
| LAP-07-07 | 5 | Synchronization and recovery | Specify deletion propagation and disabled version history instead of an ambiguous yes/no question |

Four choices and expanded explanations are editorial adaptations, not text
already present verbatim in the self-check sections. General programming code is
JavaScript, shared unchanged between DE/HU. The browser renders it as plain text
in a keyboard-scrollable code block; it does not execute the examples.

After answering, the source link opens the matching language's existing
`/topics/<slug>/` page. Result review retains the code and source link so the
question remains understandable there too. CoderLAP's current access protection
still applies to those links.

## Validation and review criteria

Run `node --test tests/*.test.cjs`. Tests cover bilingual choice completeness,
source fields, execution of the three displayed JavaScript snippets, code/answer
state after reload, translated explanations and source links. Existing bank and
session tests run alongside them. Source paths/slugs/positions were compared
with the local CoderLAP registry and DE/HU self-check sections.

The local Semgrep scan of `app.js`, `scripts` and `tests` with `p/javascript`,
`p/python` and `p/security-audit` returned zero findings and zero scan errors.
Metrics and version checks were disabled; the same three exclusions documented
in REVIEW.md were used. No cloud workflow was added.

Review the pilot for an unambiguous task, one defensible answer, useful
alternatives and an explanation that teaches the reasoning. The supplied code
must be sufficient without having another page open. Verify on a real phone
before publishing; viewport checks do not reproduce every iOS behavior.

This sample does not settle the complete import schema, curriculum navigation,
automatic content synchronization, hosting or shared authentication. Those
decisions follow the content review. The next batch should reuse LAP questions,
with reviewed adaptations where needed, instead of setting an arbitrary new
question-count target.

## Programming batch 1

The user has tried and approved this batch.

`examples/lap-programming-1.json` contains **35 DE/HU questions**, five per
subtopic, adapted from all self-check positions in LAP-15-01 through LAP-15-07.
It uses the same pinned CoderLAP commit as the eight-question pilot. The original
pilot remains a separate sample; its sorting and search topics overlap this
batch, so do not concatenate both banks as though every source were unique.

```sh
python scripts/preview_lap_pilot.py --bank lap-programming-1
```

Open <http://127.0.0.1:8771/>. The default bank still uses 8770; the programming
bank defaults to 8771. An explicit `--port` can override the default, but use a
different origin per bank because browser storage is scoped to the origin.
Both previews bind to loopback only. Restart after changing the Python server;
JSON, CSS and JavaScript changes are read on subsequent requests.

| LAP topic | Self-check positions | Adaptation focus |
| --- | --- | --- |
| 15-01 · Development lifecycle | 1–5 | Concrete requirements versus design; introduction and maintenance; phases allow feedback |
| 15-02 · Procedural and object-oriented programming | 1–5 | Function-oriented workflow; object state and behavior; separate class instances; task-appropriate structure |
| 15-03 · Algorithm | 1–5 | Precise summation steps, language-independent logic, finite countdown and efficiency |
| 15-04 · Pseudocode | 1–5 | Traceable notation, language independence, design use, implementation and an explicit boundary |
| 15-05 · Bubble Sort / Quick Sort | 1–5 | First pass, early exit, duplicate preservation, recursion and empty/singleton copies |
| 15-06 · Linear / binary search | 1–5 | Index versus value, midpoint, excluded search range, empty input and presorting cost |
| 15-07 · Program development workflow | 1–5 | Clarify input/output, plan, test examples and edges, debugger steps and iterative correction |

Source questions are adapted editorially, rather than mechanically converted.
The 15-05/5 question displays Quick Sort's empty/singleton behavior and explains
the corresponding Bubble Sort copy behavior; tests verify both functions. The
15-06/4 question displays binary search and explains the linear empty case;
tests again verify both. Newly added illustrative examples stay within the
source concept and are not claimed to be verbatim LAP snippets.

Question IDs `lap-LAP-15-01-1` etc. identify these adaptations; keep them stable
and increment `revision` for semantic changes. Source positions refer to the
pinned snapshot, not to a future reordered document. No automatic import or
cross-bank progress migration is implemented.

There are **12 complete JavaScript snippets and one pseudocode example**.
Optional `codeLanguage` is `javascript` or `pseudocode`; omitted means JavaScript
for compatibility with the pilot. A visible, accessible label distinguishes the
notations, including Hungarian “Pszeudokód”. The browser still displays code as
text only. `expectedOutput` holds checked console lines for JavaScript examples;
it is test/reuse metadata and is not rendered as an extra pre-answer clue.
Pseudocode is traced by hand and has no executable-output claim.

Validation for this batch:

- All 20 Node tests pass, including all 35 questions through the real quiz code,
  DE/HU feedback, language labels, mid-run restoration and final score reload.
- All 12 JavaScript snippets produce their recorded outputs. Sorting preserves
  inputs and duplicates; empty/singleton, search hit/miss and summation edge
  cases pass. The pseudocode trace produces 6 for [2, 4].
- All 35 paths, slugs and topic labels match the pinned LAP registry. Both source
  languages have five self-check positions in each of the seven subtopics.
- A browser run completed all 35 questions at 390/320px, switching HU to DE and
  reloading mid-run, without page overflow. Code blocks scroll internally.
  Physical iOS remains a device check; the user's content review is complete.
- Local Semgrep (`p/javascript`, `p/python`, `p/security-audit`, the same three
  exclusions as above) reports zero findings and zero errors for `app.js`,
  `i18n.js`, `scripts` and `tests`; metrics and version checks are disabled.
  HTTP checks confirm both banks, asset HEAD responses and blocked repository
  paths, including encoded traversal. No browser console errors were recorded.

The next batch covers 08–14 below, followed by 15–20. Expansion of the original 100
questions is paused. Coaster reuse, curriculum navigation, publishing and shared
authentication remain separate work.

## Programming batch 2

`examples/lap-programming-2.json` adds **35 DE/HU questions** from all five
self-check positions in each subtopic LAP-15-08 through LAP-15-14. References
still use CoderLAP commit `466a2ee8a5dbd8dc17b67a546e3ac7aacf5115e8`.
The first two curriculum banks have 70 distinct question IDs and source
positions; they remain separate previews for review.

```sh
python scripts/preview_lap_pilot.py --bank lap-programming-2
```

Open <http://127.0.0.1:8772/>. The preview's single `BANK_PORTS` mapping is the
allowlist and the source of default ports: pilot 8770, batch 1 8771, batch 2
8772. Existing preview origins retain their own saved sessions.

| LAP topic | Self-check positions | Adaptation focus |
| --- | --- | --- |
| 15-08 · Language structure | 1–5 | Syntax versus meaning, literals and identifiers, checking the task beyond valid syntax |
| 15-09 · Interpreter / compiler | 1–5 | Translation targets, interpretation, mixed execution, assembler stage and syntax checks |
| 15-10 · Debugger | 1–5 | Runtime inspection, state before a breakpoint line, step into, active call chain and logging |
| 15-11 · Assembler | 1–5 | Symbolic machine operations, assembler output, abstraction level, control and architecture dependence |
| 15-12 · Recursive functions | 1–5 | Self-call, zero base case, smaller subproblem, iterative comparison and stack limits |
| 15-13 · ASCII tables | 1–5 | 128 codes including control characters, mapping, decimal/hex examples, Unicode and format rules |
| 15-14 · Variables and types | 1–5 | Named values, operation behavior, actual JavaScript types, initialization and language-specific terminology |

The **14 JavaScript snippets** are complete, display-only examples with checked
`expectedOutput` metadata. Debugger questions describe precisely where the
program is paused; ordinary execution tests confirm the final outputs, not a
particular debugger UI. No debug session runs inside the quiz. Assembly is taught
through concrete tool/architecture scenarios without labelling JavaScript as
assembly or introducing an assembler dependency.

The recursion examples deliberately use small nonnegative integer inputs.
Tests cover 0 through 10 for every displayed factorial implementation, including
the zero base case and agreement between recursive and iterative versions.
Their input domain is part of the teaching example, not a production input
validation API. The stack question explains that a reachable base case alone
does not guarantee enough runtime resources.

### Precision checks

These editorial clarifications keep the source learning objective while avoiding
overgeneralizations. Primary references checked on 2026-09-11:

- JavaScript declaration/initialization and the shared `number` type for integer
  and fractional numeric literals: [MDN Grammar and types](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Grammar_and_types).
- Interpretation can use bytecode; modern runtimes can combine execution
  strategies: [V8 Ignition](https://v8.dev/docs/ignition). The questions describe
  a concrete mixed-runtime scenario rather than classifying every language.
- Compiler, assembler and linker are different steps in the described C toolchain:
  [GCC Overall Options](https://gcc.gnu.org/onlinedocs/gcc/Overall-Options.html)
  and [GNU as](https://sourceware.org/binutils/docs/as/Overview.html).
- `charCodeAt()` returns a UTF-16 code unit, so its use is explicitly restricted
  to ASCII characters A and 0 in the example: [MDN charCodeAt](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/charCodeAt).

### Validation

- 25 Node tests pass, covering both full 35-question runs, DE/HU explanations,
  shuffled answer mapping, mid-run and result restoration, source coverage,
  all displayed JavaScript outputs and meaningful algorithm edge cases.
- All 35 new paths, slugs and topic labels match the pinned LAP registry; each
  source document has five matching question/answer positions in both languages.
- The browser run completed all 35 questions and all 14 code blocks, switched HU
  to DE, and restored question 13 after reload. At 390/320px no page overflow was
  found; longer lines scroll inside code blocks. Result reload also passed and
  the browser console reported no errors. Real iOS testing remains open.
- HTTP checks confirmed all three preview banks, allowed assets and blocked
  repository paths, including encoded traversal. Local Semgrep on `scripts` and
  `tests` returned zero findings and zero errors, using the same rule sets and
  exclusions as batch 1 with metrics and version checks disabled.

The user has tried and approved this batch. The session recovery work, pilot
and both programming batches were merged into `dev` through PRs #4–#7 on
2026-09-11. The final programming batch follows below.

## Programming batch 3

`examples/lap-programming-3.json` adds **30 DE/HU questions** from all five
self-check positions in LAP-15-15 through LAP-15-20. The source remains pinned
to `466a2ee8a5dbd8dc17b67a546e3ac7aacf5115e8`. The three curriculum banks now
cover 100 distinct source positions across all 20 programming subtopics.
The user approved this batch, including iPhone testing. PR #9 and the LAN-preview
fix in PR #10 are merged into `dev`; the banks retain their separate previews.

```sh
python scripts/preview_lap_pilot.py --bank lap-programming-3
```

Open <http://127.0.0.1:8773/>. `BANK_PORTS` adds this origin without changing
ports 8770–8772 or their saved sessions.

| LAP topic | Self-check positions | Adaptation focus |
| --- | --- | --- |
| 15-15 · Variables and constants | 1–5 | Changing scores, fixed configuration, named values and const object bindings |
| 15-16 · Scope | 1–5 | Local/global/block scope, explicit data flow and closure lifetime |
| 15-17 · Loops | 1–5 | Body/check counts, final state, reading input, empty sums and recursive repetition |
| 15-18 · Pre/postcondition loops | 1–5 | Check order, initially false conditions and zero versus at least one execution |
| 15-19 · Branches | 1–5 | Choosing paths, if/else, switch cases, default and combining decisions with repetition |
| 15-20 · OOP | 1–5 | Classes, separate instances, encapsulation, polymorphism and clear responsibilities |

The **24 JavaScript snippets** retain checked `expectedOutput` metadata. They
are displayed as text, never executed in the quiz; explanations appear only
after answering. The two loop topics deliberately approach overlapping source
objectives through different examples. Positions 15-17:1 and 15-17:4 reuse the
approved pilot concepts, so the exploratory pilot must not be blindly appended
to the curriculum banks. Class/instance basics recur from batch 1 because the
LAP source revisits them before encapsulation and polymorphism.

### Precision and input assumptions

- `const` protects a binding from reassignment, while an object's properties may
  remain mutable: [MDN const](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/const).
- The global/local example explicitly assumes a standalone classic script;
  top-level module declarations have module scope. The closure example separates
  name visibility from retained state: [MDN Closures](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Closures).
- The input-reading example uses the specified nonempty list `[0, 2]`; it is not
  a general input-validation routine. Countdown uses small nonnegative integers.
  Pre/postcondition behavior follows [MDN Loops and iteration](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration).
- Encapsulation uses JavaScript private instance fields and public methods:
  [MDN Private elements](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/Private_elements).
  The polymorphism example uses two objects offering the same method without
  requiring a shared base class. OOP benefits depend on an appropriate design.

### Validation

- All 31 Node tests pass, including full runs of all three programming banks,
  DE/HU explanations, shuffle mapping, mid-run/result restoration and every
  recorded JavaScript output. Additional checks exercise independent closure
  and class state, the countdown zero case, and known/unknown branch inputs.
- All 30 references match the pinned LAP registry. Both languages contain five
  self-check questions and five answers in each of the six source documents.
- A browser run completed all 30 questions and 24 code blocks at 390/320px,
  switched HU to DE and restored question 11 and the final result after reload.
  One long function call overflowed the question heading at 320px; a shorter
  heading fixed it while preserving the complete code. All five branching
  questions were rechecked in both languages at 320px without page overflow.
  The console reported no errors. Physical iOS remains a device check.
- HTTP checks passed for all four banks, allowed asset HEAD requests and blocked
  repository paths, including encoded traversal. Local Semgrep on `scripts`
  and `tests` returned zero findings and zero errors with the previously recorded
  rule sets/exclusions, metrics off and version checks disabled.

No runtime rendering change, dependency, automatic synchronization or production
deployment was introduced. Curriculum navigation and the next main topic remain
separate work after content review.
