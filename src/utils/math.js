export const clamp = (value, min, max) => Math.min(Math.max(value, min), max);

export const lerp = (from, to, t) => from + (to - from) * t;

export const easeOutCubic = (t) => 1 - (1 - t) ** 3;

export const easeInOutSine = (t) => -(Math.cos(Math.PI * t) - 1) / 2;

export const easeOutSine = (t) => Math.sin((t * Math.PI) / 2);
