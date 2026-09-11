# CoderLAP question pilot

Eight DE/HU multiple-choice adaptations from six existing CoderLAP subtopics.
The canonical pilot data is [examples/lap-pilot.json](../examples/lap-pilot.json).
The original 100-question bank is not part of this pilot.

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
