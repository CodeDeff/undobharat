import React from 'react';

/**
 * UndoBharat Premium Tricolor Loading Spinner
 *
 * A modern, minimal, and premium loading indicator using the Indian Flag colors:
 * - Saffron (#FF9933)
 * - White (#FFFFFF)
 * - India Green (#138808)
 *
 * @param {Object} props
 * @param {'sm' | 'md' | 'lg' | 'xl' | number} [props.size='md'] - Preset size or custom pixel size
 * @param {string} [props.text] - Optional loading text below the spinner
 * @param {boolean} [props.fullScreen=false] - If true, renders a full-screen overlay loader
 * @param {string} [props.speed='1.2s'] - Rotation duration per cycle (1-1.5s recommended)
 * @param {string} [props.className=''] - Additional container classes
 */
const Loader = ({
  size = 'md',
  text,
  fullScreen = false,
  speed = '1.2s',
  className = '',
}) => {
  // Map size prop to numerical pixel values
  const getSizePx = (s) => {
    if (typeof s === 'number') return s;
    switch (s) {
      case 'sm':
        return 24;
      case 'lg':
        return 56;
      case 'xl':
        return 72;
      case 'md':
      default:
        return 40;
    }
  };

  const dimension = getSizePx(size);

  // Stroke width scales smoothly with size
  const strokeWidth = Math.max(3, Math.round((dimension * 0.09) * 10) / 10);

  // SVG dimensions & radius math
  const radius = 38;
  const circumference = 2 * Math.PI * radius; // ~238.76

  // 3 segments: ~75° arc + 45° gap = 120° per sector
  const segmentLength = (75 / 360) * circumference; // ~49.74
  const strokeDasharray = `${segmentLength.toFixed(2)} ${(circumference - segmentLength).toFixed(2)}`;

  const spinnerContent = (
    <div
      className={`inline-flex flex-col items-center justify-center ${className}`}
      role="status"
      aria-label={text || 'Loading'}
    >
      <div
        className="relative flex items-center justify-center"
        style={{ width: dimension, height: dimension }}
      >
        <svg
          viewBox="0 0 100 100"
          className="w-full h-full transform-gpu undobharat-spinner-rotate"
          style={{
            animationDuration: speed,
            filter: 'drop-shadow(0px 2px 4px rgba(0, 0, 0, 0.25))',
            shapeRendering: 'geometricPrecision',
          }}
        >
          {/* Ambient background track ring for visibility & structural anchor on light/dark backgrounds */}
          <circle
            cx="50"
            cy="50"
            r={radius}
            fill="none"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            className="text-gray-300/30 dark:text-gray-600/30"
          />

          {/* Saffron Segment (0°) */}
          <circle
            cx="50"
            cy="50"
            r={radius}
            fill="none"
            stroke="#FF9933"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeDasharray={strokeDasharray}
            transform="rotate(0 50 50)"
          />

          {/* White Segment (120°) */}
          <circle
            cx="50"
            cy="50"
            r={radius}
            fill="none"
            stroke="#FFFFFF"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeDasharray={strokeDasharray}
            transform="rotate(120 50 50)"
          />

          {/* India Green Segment (240°) */}
          <circle
            cx="50"
            cy="50"
            r={radius}
            fill="none"
            stroke="#138808"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeDasharray={strokeDasharray}
            transform="rotate(240 50 50)"
          />
        </svg>
      </div>

      {text && (
        <span className="mt-3 text-sm font-medium text-black dark:text-black tracking-wide animate-pulse">
          {text}
        </span>
      )}

      <style>{`
        @keyframes undobharat-spin {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }
        .undobharat-spinner-rotate {
          animation: undobharat-spin ${speed} cubic-bezier(0.4, 0, 0.2, 1) infinite;
        }
      `}</style>
    </div>
  );

  if (fullScreen) {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/40 backdrop-blur-sm transition-all duration-300">
        <div className="p-6 rounded-2xl bg-white/90 dark:bg-slate-900/90 shadow-2xl border border-slate-200/50 dark:border-slate-800/50 flex flex-col items-center">
          {spinnerContent}
        </div>
      </div>
    );
  }

  return spinnerContent;
};

export default Loader;
