export const clamp = (value, min, max) => Math.min(Math.max(value, min), max);

export const lerp = (from, to, t) => from + (to - from) * t;

export const easeInOutCubic = (t) => (t < 0.5 ? 4 * t ** 3 : 1 - (-2 * t + 2) ** 3 / 2);

export const easeOutCubic = (t) => 1 - (1 - t) ** 3;
