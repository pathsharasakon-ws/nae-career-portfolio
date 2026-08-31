'use client';

import { useEffect, useRef } from 'react';

export default function ScrollOrb() {
  const orb = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = orb.current;
    if (!el || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    let frame = 0;
    const update = () => {
      const storyEnd = document.querySelector('.storyBridge')?.getBoundingClientRect().bottom ?? window.innerHeight * 4;
      const total = Math.max(1, window.scrollY + storyEnd - window.innerHeight);
      const p = Math.min(1, Math.max(0, window.scrollY / total));
      const points = p < .5
        ? { x: 67 + (78 - 67) * (p / .5), y: 28 + (55 - 28) * (p / .5), size: 190 - 32 * (p / .5) }
        : { x: 78 + (65 - 78) * ((p - .5) / .5), y: 55 + (70 - 55) * ((p - .5) / .5), size: 158 - 48 * ((p - .5) / .5) };
      el.style.setProperty('--orb-x', `${points.x}vw`);
      el.style.setProperty('--orb-y', `${points.y}vh`);
      el.style.setProperty('--orb-size', `${Math.max(110, points.size)}px`);
      const visibility = p < .08 ? p / .08 : p > .9 ? (1 - p) / .1 : 1;
      el.style.opacity = `${Math.max(0, visibility) * .72}`;
      frame = 0;
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    update();
    addEventListener('scroll', onScroll, { passive: true });
    addEventListener('resize', onScroll);
    return () => {
      removeEventListener('scroll', onScroll);
      removeEventListener('resize', onScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  return <span ref={orb} className="scrollOrb" aria-hidden="true" />;
}
