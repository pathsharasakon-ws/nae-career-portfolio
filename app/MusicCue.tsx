'use client';

import { useRef, useState } from 'react';

const notes = [261.63, 329.63, 392, 493.88];
const keyWords = ['LISTEN', '', 'ALIGN', '', 'BUILD', '', 'LEARN'];
const blackKeyPositions = [14.28, 28.57, 57.14, 71.42, 85.71];

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
        {keyWords.map((word, index) => <span className={`whiteKey${word ? ' hasWord' : ''}`} key={`${word}-${index}`} style={{ '--key': Math.floor(index / 2) } as React.CSSProperties}>{word && <i>{word}</i>}</span>)}
        {blackKeyPositions.map((left) => <span className="blackKey" key={left} style={{ '--left': `${left}%` } as React.CSSProperties} aria-hidden="true" />)}
      </button>
      <p className="musicHint">CLICK TO PLAY <b aria-hidden="true">♪</b></p>
    </section>
  );
}
