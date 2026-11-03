# Ralph Lauren × Tour de France prototypes

Three homepage example directions, and the remaining pages in the chosen Cinematic direction (see `../direction.md`). Each page is decorated by the real core blocks, scripts and styles of this repo.

```bash
node stardust/prototypes/serve.mjs
# http://localhost:3100/stardust/prototypes/tour-de-france-home-C-proposed.html (chosen; -A- and -B- kept for reference)
# pages: tour-de-france-{collection,merchandising,buyer-resources,ordering-contact}-proposed.html
```

`cinematic.css` and `cinematic.js` are the prototype versions of `cb-statement` and `cb-motion`, shared by every Cinematic page.

`serve.mjs` serves the repo root and answers `/nav.plain.html` and `/footer.plain.html` with `fragments/`, which hold the example nav (Ralph Lauren | Tour de France lockup) and footer ("In partnership with" Tour de France).

## Placeholder assets (prototype only, never publish)

- `assets/rl-*`, `search.png`, `linkedin.png`, `shop-rl.png`: Ralph Lauren starter imagery from the boilerplate.
- `assets/tdf-*`: CC0 / public-domain photography (Wikimedia Commons, rawpixel, StockSnap via Openverse) used as stand-ins for approved Ralph Lauren × Tour de France campaign imagery. Race photos show third-party team kits and sponsors. `tdf-hero-*` and `tdf-teaser-motion` are cropped and darkened 35% for white titles. Replace all of them with licensed assets uploaded to Document Authoring before building (COBRAND-RULES § 2.3).
- `assets/tour-de-france-logo*.png`: Tour de France logo taken from letour.fr (160 × 124 PNG; source copies in `brand/cobrand/logos/`). Ask A.S.O. for the approved file, ideally an SVG.
