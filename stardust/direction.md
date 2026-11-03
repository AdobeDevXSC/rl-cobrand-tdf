# Direction: Ralph Lauren × Tour de France

**Brief.** Ralph Lauren × Tour de France capsule collection launch for the 2027 Tour, presented to wholesale partners. Audience: wholesale and retail buyers and their store teams. Partner brand source: https://www.letour.fr/en/ (captured 2026-11-03, see `brand/cobrand/partner.json`).

**Phrase.** Cobranded microsite for Tour de France capsule wholesale buyers — 3 variants. Brand-faithful to the Ralph Lauren standard (brand/rl/DESIGN.md); targeted palette move: add the partner accent #b08a00 (maillot gold, from Tour yellow #ffff00) as an accent role only, per brand/rl/COBRAND-RULES.md. A = Flagship (faithful, partner quiet), B = Partner Spotlight (amplify full-bleed photography, programme-first IA, one accent band), C = Cinematic (A's structure with a motion register). Density balanced.

**Partner tokens** (`styles/cobrand.css`): accent `#b08a00` (3.24:1 on white), contrast RL Navy `#031e3a` (5.18:1 on the accent), soft `#fff8cc` (navy 15.63:1), on-image `#ffff00` Tour yellow (6.52:1 on #595959). Tour yellow itself fails on white (1.07:1), so it is used only over darkened photography. The Tour's near-black grounds and its typefaces (Galibier, Open Sans) are set aside.

**How these were built.** The Stardust skills are not enabled in this environment, so the three directions were produced by hand following the Stardust output layout (`PRODUCT.md`, `DESIGN-{A,B,C}.{md,json}`, `stardust/prototypes/*-proposed.html`). The Ralph Lauren standard was taken from `brand/rl/DESIGN.md` and the core code rather than from an extract of this microsite's preview (its starter content is not yet copied). Each prototype is decorated by the real core blocks, scripts and styles.

## Examples (homepage)

| Example | File | Composition | Partner elements |
|---|---|---|---|
| A · Flagship | `prototypes/tour-de-france-home-A-proposed.html` | hero → intro → collection columns → founder quote → ordering teaser → contact | Lockup, yellow bars on hero and teaser, gold CTA rule, one jaune soft section |
| B · Partner Spotlight | `prototypes/tour-de-france-home-B-proposed.html` | hero → gold programme band → three steps → two full-width teasers → buyer resources list → contact | Lockup, one `cobrand-accent` band, yellow bars on hero and two teasers, jaune contact section |
| C · Cinematic | `prototypes/tour-de-france-home-C-proposed.html` | A's order, with a black display statement in place of the quote block | Lockup, A's accent placements, motion (peloton pan, finish-line bar, scroll reveals, image settle) |

All three use core blocks only (hero, columns, quote, teaser, news-list). C adds two prototype-only layers that would ship as `cb-statement` and `cb-motion`.

## Checks

`tools/cobrand-check/cobrand-check.js`, 2026-11-03: A, B and C `passed: true` with 0 findings at 1440px and 390px; every block loaded, no broken images. C under `prefers-reduced-motion: reduce` runs no animations; logos and primary buttons never animate. Screenshots: `validation/tour-de-france-home-{A,B,C}/`.

Visual review fix before presenting: titles over the busiest race photos were hard to read (the core hero and teaser have no overlay), so the stand-in images in title slots were recropped and darkened 35% (`tdf-hero-*.jpg`, `tdf-teaser-motion.jpg`).

## Choice

**C · Cinematic**, chosen by the user on 2026-11-03 (no reason given). Its direction is now the microsite's root `DESIGN.md` and `DESIGN.json`. A and B stay on disk for reference (`DESIGN-A`, `DESIGN-B` and their prototypes).

## Remaining pages (step 6)

Prototyped in the Cinematic direction on 2026-11-03. They share `prototypes/cinematic.css` and `prototypes/cinematic.js` (the future `cb-statement` and `cb-motion`); the nav, footer and homepage C link them together.

| Page | File | Composition | Check (1440 / 390) | Approval |
|---|---|---|---|---|
| Homepage | `prototypes/tour-de-france-home-C-proposed.html` | as above (links now point at the pages below) | pass / pass, 0 findings | chosen |
| Collection | `prototypes/tour-de-france-collection-proposed.html` | hero → intro → Capsule / Performance Layers / Accessories columns → palette statement → collection resources list → merchandising teaser → contact | pass / pass, 0 findings | approved 2026-11-03 |
| Merchandising | `prototypes/tour-de-france-merchandising-proposed.html` | hero → intro → Floor / Fixtures & Folding / Window steps → statement → downloads → buyer resources teaser → contact | pass / pass, 0 findings | approved 2026-11-03 |
| Buyer Resources | `prototypes/tour-de-france-buyer-resources-proposed.html` | hero → intro → Line Sheets / Lookbook & Imagery (`light`) / For Store Teams lists → contact | pass / pass, 0 findings | approved 2026-11-03 |
| Ordering & Contact | `prototypes/tour-de-france-ordering-contact-proposed.html` | hero → intro → four ordering steps → statement → line sheets teaser → account team contacts (`cobrand`) | pass / pass, 0 findings | approved 2026-11-03 |

All internal links and anchors resolve (15 checked). New stand-in images: `rl-hero-campaign.jpg`, `rl-hero-store.jpg`, `tdf-hero-field.jpg` (darkened 35% for white titles).

Open content questions: account team names, emails and phone numbers (bracketed placeholders on Ordering & Contact); ordering dates and delivery windows; the real resource files (every Download is a placeholder); product and merchandising copy, written from the brief and to be confirmed by the Ralph Lauren product and visual merchandising teams.

## Build (step 7), 2026-11-03

- **Blocks:** `blocks/cb-statement/` (display-size title card; authored in its own `center, black` section) and `blocks/cb-motion/` (page motion register; an empty block in the hero's section, so it loads with the hero and is ready before the page shows). Both have `metadata.json` and `README.md`; `npm run lint` is clean. No core file changed.
- **Pages:** generated from the approved prototypes by `migration-work/tdf-build/convert.mjs` (output in `migration-work/tdf-build/out/`, applied with `--apply`) into local `content/`: `index`, `collection`, `merchandising`, `buyer-resources`, `ordering-contact`, `nav`, `footer`, with images in `content/assets/` on page-relative paths. The script turns the prototype motion class into a `cb-motion` block and statement sections into `cb-statement` blocks, re-targets anchors at heading ids (authored pages have no section ids) and adds a metadata block. It needs `npm install --no-save cheerio@1`. The content-import skill's importer was not used: it scaffolds `tools/importer/`, and `tools/` is a protected folder in a microsite.
- **Local preview checks:** `tools/cobrand-check` pass at 1440 and 390 on all five pages, 0 findings; every block loaded; no broken images; lockup and "In partnership with" line present; 16 internal links and anchors resolve; motion runs with `prefers-reduced-motion: no-preference`, is fully off under `reduce`, and never animates logos or primary buttons. Build vs prototype: mobile identical on every page; desktop within 1px in height and at most 0.34% of pixels (sub-pixel offset, not visible). Screenshots: `validation/built-*/`.
- **Known local-preview difference:** the local server ignores the metadata block, so the tab title shows the page H1; Document Authoring applies the Title and Description.
- **Document Authoring:** not uploaded, nothing previewed or published. Before uploading: replace the stand-in images with licensed ones, upload `content/assets/*` to `/assets/` in DA and switch the image paths, fill the placeholder contacts and download files, then upload each page from `content/`.
