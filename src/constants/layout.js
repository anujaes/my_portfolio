// The element that scrolls the page content (see pages/home/index.jsx)
export const SCROLL_CONTAINER_ID = 'page-scroll';

// A section counts as "active" while it crosses this band of the viewport
export const SCROLL_SPY_ROOT_MARGIN = '-40% 0px -55% 0px';

// Matches MUI's "md" breakpoint, where the two-column layout starts
export const DESKTOP_MEDIA_QUERY = '(min-width:900px)';

// Hides an element visually but keeps it for screen readers and search engines.
// Sizes are px strings: in MUI's sx a bare 1 means 100% (width/height) or 8px (margin).
export const VISUALLY_HIDDEN = {
    position    : 'absolute',
    width       : '1px',
    height      : '1px',
    padding     : 0,
    margin      : '-1px',
    overflow    : 'hidden',
    clip        : 'rect(0 0 0 0)',
    whiteSpace  : 'nowrap',
    border      : 0,
};

// The hero name; the left-side portrait is centred over its text
export const HERO_NAME_ID = 'hero-name';

// Sections with "layout": "full-width" in site.json render below the two columns
export const FULL_WIDTH_LAYOUT = 'full-width';

// MUI AppBar heights (toolbar) at the xs and sm+ breakpoints
export const APPBAR_HEIGHT = { xs: 56, sm: 64 };

// After a deep-link jump, keep correcting for late layout shifts (lazy images) this long
export const HASH_SCROLL_SETTLE_MS = 2000;
