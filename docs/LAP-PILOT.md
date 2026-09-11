# CoderLAP question pilot

Eight DE/HU multiple-choice adaptations from six existing CoderLAP subtopics.
The canonical pilot data is [examples/lap-pilot.json](../examples/lap-pilot.json).
The original 100-question bank is not part of this pilot.

The user approved this first sample. Curriculum expansion now proceeds topic by
topic; see [Programming batch 1](#programming-batch-1) below.

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
  Physical iOS remains a device check; this batch awaits the user's content review.
- Local Semgrep (`p/javascript`, `p/python`, `p/security-audit`, the same three
  exclusions as above) reports zero findings and zero errors for `app.js`,
  `i18n.js`, `scripts` and `tests`; metrics and version checks are disabled.
  HTTP checks confirm both banks, asset HEAD responses and blocked repository
  paths, including encoded traversal. No browser console errors were recorded.

Next: programming subtopics 08–14, then 15–20. Expansion of the original 100
questions is paused. Coaster reuse, curriculum navigation, publishing and shared
authentication remain separate work.
