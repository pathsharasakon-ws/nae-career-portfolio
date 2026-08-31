'use client';

import { useRef, useState } from 'react';

const notes = [261.63, 329.63, 392, 493.88];

export default function MusicCue() {
  const [playing, setPlaying] = useState(false);
  const timer = useRef<number | null>(null);

  const play = () => {
    if (playing) return;
    const AudioContextClass = window.AudioContext || (window as typeof window & { webkitAudioContext?: typeof AudioContext }).webkitAudioContext;
    if (!AudioContextClass) return;
    const audio = new AudioContextClass();
    setPlaying(true);
    notes.forEach((frequency, index) => {
      const oscillator = audio.createOscillator();
      const gain = audio.createGain();
      const start = audio.currentTime + index * .19;
      oscillator.type = 'triangle';
      oscillator.frequency.value = frequency;
      gain.gain.setValueAtTime(.0001, start);
      gain.gain.exponentialRampToValueAtTime(.075, start + .025);
      gain.gain.exponentialRampToValueAtTime(.0001, start + .32);
      oscillator.connect(gain).connect(audio.destination);
      oscillator.start(start);
      oscillator.stop(start + .34);
    });
    timer.current = window.setTimeout(() => {
      setPlaying(false);
      void audio.close();
    }, 1050);
  };

  return (
    <section className={`musicCue${playing ? ' isPlaying' : ''}`} aria-label="An interactive musical transition">
      <div className="musicCueCopy"><small>A SMALL ENCORE</small><p>Four notes.<br />One way of working.</p></div>
      <button type="button" onClick={play} aria-label="Play four musical notes">
        {['LISTEN', 'ALIGN', 'BUILD', 'LEARN'].map((word, index) => <span key={word} style={{ '--key': index } as React.CSSProperties}><i>{word}</i></span>)}
      </button>
      <p className="musicHint">CLICK TO PLAY <b aria-hidden="true">♪</b></p>
    </section>
  );
}
