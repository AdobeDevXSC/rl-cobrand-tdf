---
name: Ralph Lauren × Tour de France · A · Flagship
description: Example direction A. The Ralph Lauren standard (brand/rl/DESIGN.md) with the Tour de France present but quiet.
extends: brand/rl/DESIGN.md
colors:
  cobrand-accent: "#b08a00"
  cobrand-accent-contrast: "#031e3a"
  cobrand-accent-soft: "#fff8cc"
  cobrand-accent-on-image: "#ffff00"
---

# Design System: Ralph Lauren × Tour de France · A · Flagship

<!-- Example direction. Everything not listed here is inherited unchanged from brand/rl/DESIGN.md and is locked by brand/rl/COBRAND-RULES.md. Partner values live in styles/cobrand.css. -->

## Overview

**Creative North Star: "The Quiet Flagship, at the Roadside"**

The Ralph Lauren corporate voice, unchanged, hosting the Tour de France. Navy on white, serif headlines, generous spacing. The Tour shows itself in three quiet places: the lockup in the header and footer, a short yellow bar under the hero and teaser titles (like a finish line), and a pale jaune ground for the closing contact section. Race photography carries the energy; the page stays composed around it.

## Colors

All Ralph Lauren colours are inherited and locked. The partner adds one hue, yellow, in three strengths:

- **Tour Yellow** (`--cobrand-accent-on-image`, #ffff00): the title bars on `cobrand` heroes and teasers. 6.52:1 against the darkened image.
- **Maillot Gold** (`--cobrand-accent`, #b08a00): the CTA rule on `cobrand` teasers. 3.24:1 on white. Tour Yellow itself reaches only 1.07:1 on white, so it never sits on a light ground.
- **Jaune Tint** (`--cobrand-accent-soft`, #fff8cc): the `cobrand` section ground behind navy text (15.63:1).

The Tour's near-black (#191919) and its typefaces (Galibier, Open Sans) are not used.

## Typography, Layout, Shapes, Elevation

Inherited unchanged from `brand/rl/DESIGN.md`.

## Imagery

Full-bleed race photography with a 35% darkening under white type, cropped so the title sits over trees or sky and the peloton runs along the lower third. Product imagery stays Ralph Lauren.

## Page composition (homepage)

hero `cobrand` → programme intro (`center, narrow`) → The Collection (`columns`: Capsule, Performance Layers, Merchandising) → founder `quote` → ordering `teaser cobrand` → contact (`center, narrow, cobrand`).
