---
name: Ralph Lauren × Tour de France · Cinematic
description: Microsite design target for the Ralph Lauren × Tour de France capsule collection wholesale programme (chosen example C). A's structure with a motion register and one immersive black statement.
extends: brand/rl/DESIGN.md
colors:
  cobrand-accent: "#b08a00"
  cobrand-accent-contrast: "#031e3a"
  cobrand-accent-soft: "#fff8cc"
  cobrand-accent-on-image: "#ffff00"
motion:
  hero-pass: "lateral pan translateX -4% → 4% at scale 1.14, 30s linear, once (the peloton rolls past)"
  hero-rise: "translateY 24px → 0 with fade, 1.4s cubic-bezier(.2,.7,.2,1); CTA delayed 0.6s"
  finish-line: "hero title bar scaleX 0 → 1, 1.2s, delayed 0.9s"
  reveal: "translateY 28px → 0 with fade, 1.1s cubic-bezier(.2,.7,.2,1), 0.12s stagger (max 4)"
  settle: "image scale 1.08 / translateX -2% → none, 2.4s cubic-bezier(.2,.7,.2,1), once"
  reduced-motion: "all motion off"
---

# Design System: Ralph Lauren × Tour de France · Cinematic

<!-- Microsite design target (example C, chosen 2026-11-03). Everything not listed here is inherited unchanged from brand/rl/DESIGN.md and is locked by brand/rl/COBRAND-RULES.md. Partner values live in styles/cobrand.css. -->

## Overview

**Creative North Star: "The Flagship as the Race Goes By"**

A's page, set in motion at the pace of a passing peloton. Behind the hero title the race image pans slowly sideways, as if the riders were going by; the title rises and the yellow bar beneath it draws in like a finish line. Further down, text rises gently and photographs settle from a slight zoom as they enter the view. One immersive black section interrupts the white pages with a single display-size line from the founder, the way a film cuts to a title card.

## Colors

Same partner tokens and placements as A.

## Motion

Ships as a `cb-motion` layer and only runs when the visitor allows motion (`prefers-reduced-motion: no-preference`). Never animates the logos (header, footer) or any primary button; teaser overlay titles stay still.

## Components

- **Statement** (`cb-statement`): a `black` section with one h2 at display size (60px desktop / 40px mobile) and a body attribution. Replaces A's quote block.

## Page composition (homepage)

hero `cobrand` (motion) → programme intro → The Collection (`columns`: Capsule, Performance Layers) → statement (`center, black, statement`) → Merchandising (`columns`) → ordering `teaser cobrand` → contact (`center, narrow, cobrand`).
