---
name: Ralph Lauren × Tour de France · B · Partner Spotlight
description: Example direction B. The Ralph Lauren standard with one captured trait amplified (full-bleed photography), a programme-first page order and one maillot gold band.
extends: brand/rl/DESIGN.md
colors:
  cobrand-accent: "#b08a00"
  cobrand-accent-contrast: "#031e3a"
  cobrand-accent-soft: "#fff8cc"
  cobrand-accent-on-image: "#ffff00"
---

# Design System: Ralph Lauren × Tour de France · B · Partner Spotlight

<!-- Example direction. Everything not listed here is inherited unchanged from brand/rl/DESIGN.md and is locked by brand/rl/COBRAND-RULES.md. Partner values live in styles/cobrand.css. -->

## Overview

**Creative North Star: "The Programme Leads the Peloton"**

The page is ordered around what a buyer has to do. Straight after the hero, a single maillot gold band states the programme and offers the line sheets; a three-step row (Preview, Order, Present) follows; then two full-width image teasers carry the collection and the in-store story; a resources list with downloads closes the page before contact. The captured Ralph Lauren trait that is amplified is full-bleed photography: three of the six sections are led by an image.

## Colors

Same partner tokens as A. The difference is placement:

- **Maillot Gold band** (`cobrand-accent` section, #b08a00): the one accent band allowed per page, behind navy text (5.18:1). Its primary button inverts to navy fill with gold text, as the core section style defines.
- **Tour Yellow** title bars over photography (6.52:1), **Maillot Gold** CTA rules, **Jaune Tint** contact ground.

## Typography, Layout, Shapes, Elevation

Inherited unchanged. Step numbers use the mono eyebrow (h6), not a new style.

## Imagery

A moodier race image leads (the peloton under bare trees, darkened 35%); a motion-blurred peloton and a Ralph Lauren campaign image fill the two teasers; thumbnails in the resources list.

## Page composition (homepage)

hero `cobrand` → programme band (`center, narrow, cobrand-accent`) → three steps (`columns`, one row of three) → collection `teaser cobrand` → in-store `teaser cobrand` → buyer resources (`news-list` with downloads) → contact (`center, narrow, cobrand`).
