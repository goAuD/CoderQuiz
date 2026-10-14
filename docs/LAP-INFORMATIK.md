# CoderLAP Informatik, batch 1

This bank contains 35 German/Hungarian multiple-choice adaptations from the
first seven Informatik topics. Each question has four choices, one shared correct
answer index and an explanation shown after answering. There is no separate hint.
The canonical data is [lap-informatik-1.json](../examples/lap-informatik-1.json).

## Source snapshot and coverage

Source repository: [CoderLAP](https://github.com/goAuD/CoderLAP), commit
[`7b14ceebc8bb1c44ad11afcfecc2d5f5ec7867bf`](https://github.com/goAuD/CoderLAP/tree/7b14ceebc8bb1c44ad11afcfecc2d5f5ec7867bf).
Both language versions of each complete topic were reviewed on 2026-10-14.

| Topic ID | Source topic | Self-check positions | Adaptation focus |
| --- | --- | --- | --- |
| LAP-11-01 | Begriff Informatik | 1–5 | Data context, units, cooperating systems and a runnable average algorithm |
| LAP-11-02 | Statische und dynamische Webseiten | 1–5 | Build-time HTML, request-time data and browser interaction in concrete implementations |
| LAP-11-03 | Weblog Webshop Webplattform | 1–5 | Publication, orders and cooperating user roles; server-authoritative order data |
| LAP-11-04 | HTML und XML | 1–5 | Semantic document structure, XML parsing and the difference between well-formed data and a stated content rule |
| LAP-11-05 | HTML5 Grundgeruest | 1–5 | Doctype, title versus visible heading, body, encoding and responsive layout |
| LAP-11-06 | Meta Elemente und Metadaten | 1–5 | Metadata beyond meta elements, early encoding declaration, viewport and search snippets |
| LAP-11-07 | SEO und Massnahmen | 1–5 | Useful organic visibility, technical repairs, mobile usability and SEO versus SEA |

Each record keeps its source topic ID, README path, slug and self-check number.
IDs such as `lap-LAP-11-04-2` are stable, with initial revision `1`. The position
refers to this pinned source snapshot; future source edits must not silently
retarget it. Increment the revision when a question's meaning, choices or correct
answer changes after publication.

The questions and distractors are editorial adaptations, not a verbatim import of
the short self-checks. Concrete scenarios make the intended assumptions explicit.
For example, the static-page questions specify when HTML is generated, rather than
assuming every portfolio or webshop uses the same architecture.

This covers 7 of the 43 Informatik topics in the source snapshot. The remaining
36 topics are outside this bank. It is not a complete Informatik exam simulation.

## Code and markup

Code is shared unchanged between German and Hungarian. The quiz displays it as
text; it does not execute the samples in a learner's browser.

| Language | Samples | Verification |
| --- | --- | --- |
| JavaScript | 1 | Standalone average calculation prints `22` and `null`; automated boundary tests cover empty, singleton, zero, mixed-sign and fractional averages |
| HTML | 6 | One complete document and five contextual fragments; inspected with Python's HTML parser and against their questions |
| XML | 3 | Complete documents parsed with Python ElementTree; decoded entity text and stated field expectations checked |

Only the JavaScript example has `expectedOutput`. A markup fragment is not a
running application. The XML example containing `twenty` is deliberately
well-formed but fails the question's stated nonnegative-integer rule. No XSD
document is supplied or claimed to have been validated.

## Primary-source checks

The bank builds on the refreshed CoderLAP text and its bibliography. Google-specific
claims were additionally checked against the following first-party documentation
on 2026-10-14:

- [SEO Starter Guide](https://developers.google.com/search/docs/fundamentals/seo-starter-guide): helpful content, discovery and technical foundations, without ranking guarantees.
- [Supported meta tags](https://developers.google.com/search/docs/crawling-indexing/special-tags): Google does not use the `keywords` meta tag for indexing or ranking.
- [Search snippets](https://developers.google.com/search/docs/appearance/snippet): Google can select query-dependent page text instead of the supplied meta description.

The Google-specific statements are named as such in the questions. SEO exercises
use public example pages and do not imply removing access protection from private
learning material.

## Validation and limits

Run the focused, dependency-free Node tests from the repository root:

```sh
node --test tests/lap-informatik.test.cjs
```

The five tests cover the 35 distinct source positions, pinned commit, source paths
and slugs, bilingual choice structure, labels, absence of separate hints, markup
metadata and actual JavaScript output. The average function is also checked for
input preservation. Its stated domain is a small array of finite numeric
measurements, not arbitrary unvalidated user input.

The source mapping was separately compared with the local CoderLAP registry and
all 14 language files. Each source contains self-check positions 1–5. All three XML
examples parsed successfully, and the six HTML samples passed the described
structural inspection. HTMLParser is not a browser or an HTML conformance validator;
the inspection does not prove rendering or accessibility.

Choice validity, translation equivalence and the usefulness of explanations also
require editorial review. A correct answer index and passing runtime tests alone
cannot prove these qualities. App navigation, escaping, shuffled answers, session
restoration and real-device presentation belong to the shared app integration
checks, not this content-only test file. Run `node --test tests/*.test.cjs` for the
complete automated suite.
