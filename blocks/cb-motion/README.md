# cb-motion

Partner-layer **cb-motion** block (Ralph Lauren × Tour de France). Purpose: adds the Cinematic motion register to a page. It renders nothing itself.

- The hero image pans slowly sideways, the hero title rises and the `cobrand` title bar draws in.
- Text rises and images in columns and teasers settle as they scroll into view.
- Off under `prefers-reduced-motion: reduce`. Never animates the header, the footer (logos), primary buttons or teaser overlay titles.

## Authoring (Document Authoring)

Model: `standalone`

An empty single-cell block table, once per page, in the first section directly after the hero block. Placing it in the hero's section loads it with the hero, so the motion is ready before the page is shown.

## Supported variations

No variations.

## Universal Editor fields

N/A (Document Authoring project)
