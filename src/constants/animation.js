// Chips / icons popping in when they scroll into view
export const POP_IN = {
    initial    : { opacity: 0, scale: 0 },
    animate    : { opacity: 1, scale: 1 },
    transition : { scale: { type: 'spring', visualDuration: 0.7, bounce: 0.3 } },
};

// Text sliding in from the left on page load
export const SLIDE_IN = {
    initial    : { opacity: 0, x: -50 },
    animate    : { opacity: 1, x: 0 },
    transition : { duration: 0.3, ease: 'linear' },
};

// Profile picture springing in on page load
export const SPRING_IN = {
    initial    : { scale: 0 },
    animate    : { scale: 1 },
    transition : { duration: 0.7, ease: 'linear', scale: { type: 'spring', bounce: 0.5, delay: 0.3 } },
};

// Default share of an element that must be visible before it reveals
export const REVEAL_AMOUNT = 0.5;

// Portrait gliding from the right column to above the name (desktop only)
export const PORTRAIT_FLIGHT = {
    scrollStart    : 0,     // px of scrolling before the portrait starts moving
    scrollDistance : 400,   // px of scrolling over which it travels (0 -> 400)
    startSize      : 200,   // size on first load (right column)
    dockSize       : 140,   // size once docked above the name
    dockGap        : 8,     // space between the docked portrait and the name
    spring         : { stiffness: 90, damping: 24, mass: 0.8 },   // soft glide, no overshoot
};

// Contact panel terminal lines typing in
export const TERMINAL_TYPING = {
    charDelay  : 28,    // ms per character
    lineDelay  : 350,   // pause before the next command
    startDelay : 400,   // after the panel scrolls into view
};
