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

// Portrait swap (desktop): the right-side portrait shrinks away as the page
// scrolls; once it's gone, it pops out above the name on the left.
export const PORTRAIT_SWAP = {
    size            : 200,   // right-side portrait on first view
    dockSize        : 140,   // left-side portrait above the name
    dockGap         : 8,     // space between the left portrait and the name
    hideDistance    : 160,   // px of scrolling over which the right portrait shrinks away
    scrubSpring     : { stiffness: 70, damping: 22, mass: 0.8 },     // smooths the scroll-driven shrink
    // springs by duration: visualDuration = seconds to (visually) arrive, bounce = 0 (none) .. 1 (a lot)
    popTransition   : { type: 'spring', visualDuration: 0.8, bounce: 0.2 }, // left portrait popping out / in
    spaceTransition : { type: 'spring', visualDuration: 0.7, bounce: 0 },   // space opening above the name
};

// Contact panel terminal lines typing in
export const TERMINAL_TYPING = {
    charDelay  : 28,    // ms per character
    lineDelay  : 350,   // pause before the next command
    startDelay : 400,   // after the panel scrolls into view
};

// Hero typewriter (types a phrase, pauses, erases, types the next)
export const TYPEWRITER = {
    startDelay  : 1000,  // ms before the first phrase starts
    typeSpeed   : 110,   // ms per character typed
    deleteSpeed : 45,    // ms per character erased
    pause       : 1200,  // ms a finished phrase stays on screen
};

// Short line under the hero title that draws itself in after the title appears
export const TITLE_SEPARATOR = {
    width      : 56,     // px
    height     : 2,      // px
    transition : { duration: 0.6, delay: 0.5, ease: 'easeOut' },
};
