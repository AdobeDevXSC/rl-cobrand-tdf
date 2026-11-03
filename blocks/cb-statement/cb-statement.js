/**
 * cb-statement: one display-size line with an optional attribution.
 * Authored on a section styled "black" (and usually "center") for the
 * immersive title-card look; works on any section ground.
 * @param {Element} block The block element
 */
export default function decorate(block) {
  const cells = [...block.querySelectorAll(':scope > div > div')];
  const content = document.createElement('div');
  content.className = 'cb-statement-content';
  cells.forEach((cell) => content.append(...cell.childNodes));

  // a plain paragraph as the first item is promoted to the statement heading
  let line = content.querySelector('h1, h2, h3, h4, h5, h6');
  if (!line) {
    const first = content.querySelector('p');
    if (first) {
      line = document.createElement('h2');
      line.append(...first.childNodes);
      first.replaceWith(line);
    }
  }
  if (line) line.classList.add('cb-statement-line');
  content.querySelectorAll('p').forEach((p) => p.classList.add('cb-statement-attribution'));

  block.replaceChildren(content);
}
