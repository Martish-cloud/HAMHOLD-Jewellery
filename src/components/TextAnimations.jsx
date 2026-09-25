import React, { useState, useEffect, useRef } from 'react';

function checkReducedMotion() {
  if (typeof window === 'undefined') return false;
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

/**
 * 1. NEON YELLOW LEFT-TO-RIGHT TYPEWRITING EFFECT
 * Apply to:
 * - NEW ARRIVALS
 * - MOST WANTED
 * - PRIVATE JEWELLERY OFFERS
 * - CRAFTED WITH INTENTION.
 * - FIND SOMETHING THEY'LL NEVER FORGET
 */
export function NeonTypewriterText({ text, className = '' }) {
  const containerRef = useRef(null);
  const chars = Array.from(text);

  const [hasStarted, setHasStarted] = useState(() => checkReducedMotion());
  const [revealedIndex, setRevealedIndex] = useState(() =>
    checkReducedMotion() ? chars.length : 0
  );
  const [isComplete, setIsComplete] = useState(() => checkReducedMotion());

  useEffect(() => {
    if (typeof window === 'undefined') return;
    if (checkReducedMotion()) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setHasStarted(true);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.15 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!hasStarted || isComplete) return;

    if (revealedIndex >= chars.length) {
      setIsComplete(true);
      return;
    }

    // Typing cadence: 38ms per character for an elegant, fluid luxury feel
    const timer = setTimeout(() => {
      setRevealedIndex((prev) => prev + 1);
    }, 38);

    return () => clearTimeout(timer);
  }, [hasStarted, revealedIndex, chars.length, isComplete]);

  return (
    <span
      ref={containerRef}
      className={`inline-block relative ${className}`}
      aria-label={text}
    >
      <span aria-hidden="true" className="whitespace-pre-wrap">
        {chars.map((char, index) => {
          const isRevealed = index < revealedIndex;
          const isLead = index === revealedIndex - 1 && !isComplete;
          const isRecent = index >= revealedIndex - 3 && index < revealedIndex - 1 && !isComplete;

          let charClass = 'transition-colors duration-500 inline-block';

          if (!isRevealed) {
            charClass += ' opacity-0 select-none pointer-events-none';
          } else if (isLead) {
            charClass += ' text-[#FAFF00] drop-shadow-[0_0_10px_rgba(250,255,0,0.85)] drop-shadow-[0_0_20px_rgba(250,255,0,0.45)]';
          } else if (isRecent) {
            charClass += ' text-[#FAF4A8] drop-shadow-[0_0_6px_rgba(250,255,0,0.35)]';
          } else {
            charClass += ' text-inherit';
          }

          return (
            <span key={index} className={charClass}>
              {char}
            </span>
          );
        })}

        {/* Subtle, non-blinking luxury neon yellow lead indicator while typing */}
        {!isComplete && revealedIndex > 0 && revealedIndex < chars.length && (
          <span
            aria-hidden="true"
            className="inline-block w-[2px] h-[0.7em] bg-[#FAFF00] shadow-[0_0_8px_#FAFF00] align-baseline ml-0.5 rounded-full"
          />
        )}
      </span>
    </span>
  );
}

/**
 * 2. BLUR WIPE TEXT EFFECT
 * Apply to:
 * - FOR HER
 * - FOR HIM
 * - HAMHOLD
 * - THE HAMHOLD EDIT
 */
export function BlurWipeText({ text, children, className = '' }) {
  const content = text || children;
  const containerRef = useRef(null);

  const [hasTriggered, setHasTriggered] = useState(() => checkReducedMotion());
  const [isFinished, setIsFinished] = useState(() => checkReducedMotion());

  useEffect(() => {
    if (typeof window === 'undefined') return;
    if (checkReducedMotion()) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setHasTriggered(true);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.15 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <span
      ref={containerRef}
      onAnimationEnd={() => setIsFinished(true)}
      className={`inline-block relative ${
        isFinished
          ? ''
          : hasTriggered
          ? 'animate-blur-wipe'
          : 'opacity-0'
      } ${className}`}
    >
      {content}
    </span>
  );
}

/**
 * 3. GHOST INTERLEAP TEXT EFFECT
 * Apply to:
 * - Signature Collection
 * - THE HAMHOLD COLLECTIONS
 * - DISCOVER YOUR SIGNATURE
 * - WHY HAMHOLD?
 * - JEWELLERY THAT HOLDS *A MOMENT.
 */
export function GhostInterleapText({ text, children, className = '' }) {
  const content = text || children;
  const containerRef = useRef(null);

  const [hasTriggered, setHasTriggered] = useState(() => checkReducedMotion());
  const [isFinished, setIsFinished] = useState(() => checkReducedMotion());

  useEffect(() => {
    if (typeof window === 'undefined') return;
    if (checkReducedMotion()) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setHasTriggered(true);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.15 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <span ref={containerRef} className={`relative inline-block ${className}`}>
      {/* Ghost Layer 1: subtle leading ghost converging from left/top */}
      {hasTriggered && !isFinished && (
        <span
          aria-hidden="true"
          className="absolute inset-0 pointer-events-none select-none animate-ghost-converge-1"
        >
          {content}
        </span>
      )}

      {/* Ghost Layer 2: subtle counter ghost converging from right/bottom */}
      {hasTriggered && !isFinished && (
        <span
          aria-hidden="true"
          className="absolute inset-0 pointer-events-none select-none animate-ghost-converge-2"
        >
          {content}
        </span>
      )}

      {/* Main Text: converges cleanly into position */}
      <span
        onAnimationEnd={() => setIsFinished(true)}
        className={
          isFinished
            ? ''
            : hasTriggered
            ? 'animate-ghost-main inline-block'
            : 'opacity-0 inline-block'
        }
      >
        {content}
      </span>
    </span>
  );
}
