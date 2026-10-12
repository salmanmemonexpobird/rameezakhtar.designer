'use client';
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const CV_URL = '/assets/img/cv/Rameez-Akhtar-CV.pdf';
const CV_FILE_NAME = 'Rameez-Akhtar-CV.pdf';
const DURATION = 3000;

type Point = [number, number];

const getPoint = (point: Point, i: number, a: Point[], smoothing: number) => {
  const cp = (current: Point, previous: Point | undefined, next: Point | undefined, reverse: boolean): Point => {
    const p = previous || current;
    const n = next || current;
    const length = Math.sqrt(Math.pow(n[0] - p[0], 2) + Math.pow(n[1] - p[1], 2)) * smoothing;
    const angle = Math.atan2(n[1] - p[1], n[0] - p[0]) + (reverse ? Math.PI : 0);
    return [current[0] + Math.cos(angle) * length, current[1] + Math.sin(angle) * length];
  };
  const cps = cp(a[i - 1], a[i - 2], point, false);
  const cpe = cp(point, a[i - 1], a[i + 1], true);
  return `C ${cps[0]},${cps[1]} ${cpe[0]},${cpe[1]} ${point[0]},${point[1]}`;
};

const getPath = (update: number, smoothing: number, pointsNew: Point[] | null) => {
  const points: Point[] = pointsNew ? pointsNew : [[4, 12], [12, update], [20, 12]];
  const d = points.reduce(
    (acc, point, i, a) => (i === 0 ? `M ${point[0]},${point[1]}` : `${acc} ${getPoint(point, i, a, smoothing)}`),
    ''
  );
  return `<path d="${d}" />`;
};

const CvDownloadButton = () => {
  const buttonRef = useRef<HTMLAnchorElement>(null);
  const svgRef = useRef<SVGSVGElement>(null);
  const timers = useRef<ReturnType<typeof setTimeout>[]>([]);
  const state = useRef({ y: 20, smoothing: 0 });

  const draw = () => {
    if (svgRef.current) svgRef.current.innerHTML = getPath(state.current.y, state.current.smoothing, null);
  };

  useEffect(() => {
    draw();
    const pending = timers.current;
    return () => {
      pending.forEach(clearTimeout);
      gsap.killTweensOf(state.current);
    };
  }, []);

  const startDownload = () => {
    const link = document.createElement('a');
    link.href = CV_URL;
    link.download = CV_FILE_NAME;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const button = buttonRef.current;
    if (!button || button.classList.contains('loading')) return;

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      startDownload();
      return;
    }

    button.classList.add('loading');
    state.current.y = 20;
    state.current.smoothing = 0;

    gsap.to(state.current, {
      smoothing: 0.3,
      duration: (DURATION * 0.065) / 1000,
      onUpdate: draw,
    });
    gsap.to(state.current, {
      y: 12,
      duration: (DURATION * 0.265) / 1000,
      delay: (DURATION * 0.065) / 1000,
      ease: 'elastic.out(1.12, 0.4)',
      onUpdate: draw,
    });

    timers.current.push(
      setTimeout(() => {
        if (svgRef.current) {
          svgRef.current.innerHTML = getPath(0, 0, [[3, 14], [8, 19], [21, 6]]);
        }
        startDownload();
      }, DURATION / 2),
      setTimeout(() => {
        button.classList.remove('loading');
        state.current.y = 20;
        state.current.smoothing = 0;
        draw();
      }, DURATION + 600)
    );
  };

  return (
    <a
      ref={buttonRef}
      className="tp-cv-dl"
      href={CV_URL}
      download={CV_FILE_NAME}
      aria-label="Download CV"
      title="Download CV"
      style={{ ['--duration' as string]: DURATION } as React.CSSProperties}
      onClick={handleClick}
    >
      <ul>
        <li>Download CV</li>
        <li>Downloading</li>
        <li>Downloaded</li>
      </ul>
      <div>
        <svg ref={svgRef} viewBox="0 0 24 24"></svg>
      </div>
    </a>
  );
};

export default CvDownloadButton;
