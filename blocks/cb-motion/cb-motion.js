/**
 * cb-motion: the Cinematic motion register for a page.
 * Author an empty cb-motion block in the first section, after the hero. It
 * pans the hero image, raises the hero title, draws the cobrand title bar,
 * reveals text and settles images as they scroll into view.
 * Never touches the header, footer (logos), primary buttons or teaser
 * overlay titles. Does nothing when the visitor prefers reduced motion.
 * @param {Element} block The block element
 */
export default function decorate(block) {
  const wrapper = block.parentElement;
  const main = block.closest('main');
  const section = block.closest('.section');
  if (wrapper && wrapper.classList.contains('cb-motion-wrapper')) wrapper.remove();
  if (!main || !window.matchMedia('(prefers-reduced-motion: no-preference)').matches) return;

  document.documentElement.classList.add('cb-motion');
  const hero = (section && section.querySelector('.hero')) || main.querySelector('.hero');
  if (hero) hero.classList.add('cb-motion-hero');

  const io = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-in');
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });

  const ready = (el) => {
    const parentBlock = el.closest('.block');
    return !parentBlock || parentBlock.dataset.blockStatus === 'loaded';
  };

  const tag = () => {
    main.querySelectorAll(':scope > .section:not(.hero-container) :is(h2, h3, h6, blockquote, p, li)')
      .forEach((el) => {
        if (!ready(el) || el.classList.contains('cb-motion-reveal') || el.closest('.cb-motion-reveal')) return;
        if (el.querySelector('a.button.primary, picture') || el.closest('.teaser-overlay, .teaser-media')) return;
        const siblings = [...el.parentElement.children];
        el.style.setProperty('--cb-motion-delay', `${Math.min(siblings.indexOf(el), 4) * 0.12}s`);
        el.classList.add('cb-motion-reveal');
        io.observe(el);
      });
    main.querySelectorAll('.columns picture, .teaser picture').forEach((pic) => {
      const frame = pic.parentElement;
      if (!ready(frame) || frame.classList.contains('cb-motion-settle')) return;
      frame.classList.add('cb-motion-settle');
      io.observe(frame);
    });
  };

  new MutationObserver(tag).observe(main, {
    subtree: true,
    attributes: true,
    attributeFilter: ['data-block-status', 'data-section-status'],
  });
  tag();
}
