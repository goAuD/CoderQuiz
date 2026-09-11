# Release readiness review — 2026-09-11

Baseline: `583118e` on `origin/dev`. Scope: the static quiz, persistence,
DE/HU question bank and CI. No hosting, authentication or DNS changes.

This is an initial review, not certification of the complete curriculum. All 100
question prompts, German choices, correct answers and DE/HU explanations were
read. All bilingual fields were structurally checked; unchanged Hungarian
distractors still need a complete editorial pass. Fourteen questions were
corrected in both languages. The remaining content work below is a release gate
for presenting this bank as thoroughly reviewed.

## Confirmed behavior findings and fixes

| Finding | Impact | Resolution |
| --- | --- | --- |
| Uncaught localStorage access/write errors | Storage restrictions could prevent startup or interrupt answering | Guard access; continue in memory with DE/HU notice |
| First question not saved; unanswered choices reshuffled on restore | Reload could lose a newly started run or change visible answer positions | Save immediately and preserve the permutation |
| Partial snapshot validation, obsolete topics and unsupported languages | Broken or inconsistent saved data could create an unusable or misleading session | Validate before state mutation, fall back to setup/defaults, derive score from selections |
| Content changes reused old answer indices | Previously saved selections could acquire a different meaning | Per-question revisions; discard affected saves with notice |
| “Passed/failed” wording used arbitrary thresholds | Practice score could be mistaken for an official exam result | Constructive practice feedback, same numerical score |
| Result review omitted explanations | Learners could see the answer without the reasoning | Include the current-language explanation |
| CI only checked syntax, count and IDs | Session regressions and incomplete translations escaped checks | Built-in Node behavior/schema tests; no new dependency |
| Checkout action used a movable version tag | External CI code was not fixed to an immutable revision | Pin verified v4.2.2 commit |

Fisher–Yates and the source-index mapping were already appropriate. Tests cover
all 24 four-choice permutations, source immutability, DE/HU answer mapping,
duplicate answers/advances, first-question and completed-result reloads, storage
failures and invalid/legacy snapshots. These are practice checks, not protection
against a user modifying their own score.

## Corrected content

IDs and correct source indices remain stable; each changed entry has `revision: 1`.
The linked primary sources were consulted on 2026-09-11. Interpretations are
paraphrases for learning, not verbatim legal text.

| IDs | Correction | Primary source |
| --- | --- | --- |
| 31, 33 | Distinguish private GPL use from redistribution and the scope of copyleft | [GNU GPL FAQ](https://www.gnu.org/licenses/gpl-faq.en.html#GPLRequireSourcePostedPublic) |
| 32 | Preserve both copyright and permission notice under MIT | [MIT license](https://opensource.org/license/mit) |
| 34 | Freeware is not a source-code license guarantee; open source requires license freedoms | [GNU software categories](https://www.gnu.org/philosophy/categories.en.html), [OSI definition](https://opensource.org/osd) |
| 39 | Parameterized queries separate SQL code and values | [OWASP SQL injection prevention](https://cheatsheetseries.owasp.org/cheatsheets/SQL_Injection_Prevention_Cheat_Sheet.html) |
| 42 | Validation checks structure/business rules; it is not the primary XSS/SQLi defense | [OWASP input validation](https://cheatsheetseries.owasp.org/cheatsheets/Input_Validation_Cheat_Sheet.html) |
| 49 | Ask about confirmation and evidence, not a blanket statutory double-opt-in mandate | [EDPB consent guidelines, section 5.1](https://www.edpb.europa.eu/documents/guideline/guidelines-052020-on-consent-under-regulation-2016679_en) |
| 51 | An SDK does not automatically make every developer a joint controller | [EDPB controller/processor guidelines](https://www.edpb.europa.eu/documents/guideline/guidelines-072020-on-the-concepts-of-controller-and-processor-in-the-gdpr_en) |
| 54 | Separate vulnerability, personal-data breach, authority notification and high-risk subject notification | [GDPR, Articles 4, 33–34](https://eur-lex.europa.eu/eli/reg/2016/679/art_4/par_1/oj) |
| 79 | Use safe output sinks and context-specific encoding; CSP is supplementary | [OWASP XSS prevention](https://cheatsheetseries.owasp.org/cheatsheets/Cross_Site_Scripting_Prevention_Cheat_Sheet.html) |
| 85 | Missing withdrawal information extends the normal period **by** twelve months; explain later information | [FAGG § 12](https://www.ris.bka.gv.at/eli/bgbl/i/2014/33/P12/NOR40162338) |
| 88 | No built-in storage expiry is different from “always lasts longer”; explain necessary-storage exception | [WHATWG Web Storage](https://html.spec.whatwg.org/multipage/webstorage.html), [Austrian TKG § 165](https://www.ris.bka.gv.at/eli/bgbl/i/2021/190/P165/NOR40238623) |
| 90 | Teach the avoided external font request without asserting universal illegality or server location | [Google Fonts data flow](https://fonts.googleblog.com/2022/11/your-privacy-and-google-fonts.html) |
| 98 | Transport encryption does not determine server storage encryption | [OWASP TLS](https://cheatsheetseries.owasp.org/cheatsheets/Transport_Layer_Security_Cheat_Sheet.html) |

## Remaining editorial checks, before calling the bank reviewed

These are concrete follow-up findings from the initial pass. Recheck the cited
statutory articles/current Austrian law before rewriting. Do not turn a useful
default recommendation into an unconditional legal claim.

| Priority | IDs | What to resolve |
| --- | --- | --- |
| High | 44, 61 | Separate analytics terminal-access consent, GDPR legal basis and international transfers; anonymous output does not erase earlier processing |
| High | 47, 56 | Synthetic test data is a useful default; avoid claiming all real test data or all Git personal metadata is categorically forbidden |
| High | 52, 55 | Scope biometric processing and Art. 9 exceptions; Austria's age 14 rule is about the specific consent/online-service situation |
| High | 94, 99 | Qualifying solely automated decisions, statutory exceptions and safeguards under Art. 22 |
| High | 10, 48 | Erasure conditions and all applicable exceptions; practical treatment of backups without promising instant deletion everywhere |
| Medium | 5, 67 | Compatible further processing versus blanket prohibition of any new purpose |
| Medium | 9, 12, 13, 72–74 | Withdrawal scope, time-extension notice, supplied portability data, actual restriction grounds and rectification timing |
| Medium | 18–20 | Risk/scale/core-activity qualifiers for DPIA, records and DPO requirements |
| Medium | 23, 43, 62, 71 | Identification scope of biometrics/IPs, objection grounds and freely given consent |
| Medium | 26–30, 35 | Ambiguous logo distractor, copyright thresholds/term, license rights and CC suitability for software |
| Medium | 63–64, 84, 86 | Verify current Austrian e-commerce/DSA boundaries, entity-specific imprint duties, distance-sales definition and consumer-law wording |
| Medium | 14–15, 75–78 | Notification exceptions, statutory fine ceilings and damages prerequisites |
| Medium | 81, 83, 91–93, 96–97, 100 | Authentication versus per-object authorization, secret versus public keys, logging minimization, risk-appropriate controls and actual implementation in audits |
| Editorial | 87 and remaining HU distractors | Correct “reklámmhálózat”; complete bilingual terminology and ambiguity review |

Repeated concepts include 5/67 (purpose), 8/71 (consent), 13/72 (portability),
15/76 (notification) and 6/70/93 (processor). Keep stable IDs, but make later
variants apply the concept in a distinct scenario instead of repeating a definition.
Several distractors are obviously absurd; balance length/plausibility without
making two choices defensible. A correct-answer index test cannot detect that.

## Coverage and next batches

The 100 questions are one **DSGVO/law module**, not comprehensive IT coverage.
The exact eleven-topic counts are in [DEVELOPMENT.md](DEVELOPMENT.md#current-question-sections):
12 IT-security questions, 31 developer-facing GDPR questions, 57 in the remaining
legal/privacy sections. Programming and general CS currently have no dedicated
module. The expansion sequence and acceptance criteria are in [ROADMAP.md](ROADMAP.md).

## Validation evidence

- Eleven dependency-free Node tests and JS syntax checks.
- Browser: first-question and answered-question reloads preserve order/score;
  DE/HU switching, a four-question run with a 3/4 (75%) result, restored result
  and translated explanations; no horizontal overflow at 390px or 320px.
  No browser console errors observed.
- Local Semgrep baseline: one mutable action-tag finding, zero scan errors;
  local secrets scan: zero findings/errors. The action pin addresses that finding.
- Code scan rerun after the final application change: zero findings and zero errors.
- Semgrep configs: `p/security-audit`, `p/javascript`, `p/github-actions`, `p/secrets`;
  `--metrics off --disable-version-check`. Reports stay outside Git in the temp folder.
  Three known irrelevant/incompatible rules were excluded from the code scan:
  `javascript.crypto-js.cryptojs-weak-algorithm.cryptojs-weak-algorithm`,
  `javascript.express.web.cors-default-config-express.cors-default-config-express`,
  `javascript.koa.web.cors-default-config-koa.cors-default-config-koa`.
  This limits the claim to the executed rules, not a full security guarantee.
- Physical iOS, hosting/auth boundaries and the remaining content review are
  separate pre-deployment checks. No cloud Semgrep workflow was introduced.
