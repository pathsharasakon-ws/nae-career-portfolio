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
      const points = p < .42
        ? { x: 42 + (77 - 42) * (p / .42), y: 24 + (58 - 24) * (p / .42), size: 420 - 155 * (p / .42) }
        : p < .74
          ? { x: 77 + (24 - 77) * ((p - .42) / .32), y: 58 + (42 - 58) * ((p - .42) / .32), size: 265 - 105 * ((p - .42) / .32) }
          : { x: 24 + (72 - 24) * ((p - .74) / .26), y: 42 + (66 - 42) * ((p - .74) / .26), size: 160 - 112 * ((p - .74) / .26) };
      el.style.setProperty('--orb-x', `${points.x}vw`);
      el.style.setProperty('--orb-y', `${points.y}vh`);
      el.style.setProperty('--orb-size', `${Math.max(48, points.size)}px`);
      el.style.opacity = p >= .995 ? '0' : '.94';
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
