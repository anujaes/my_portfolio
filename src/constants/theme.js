// Colours for components: CSS variables from css/theme.css, so they follow
// the active light/dark theme automatically.
export const COLORS = {
    accent   : 'var(--accent)',
    text     : 'var(--text)',
    line     : 'var(--line)',
    ink      : 'var(--ink)',        // dark accents / buttons
    inkHover : 'var(--ink-hover)',
    onInk    : 'var(--on-ink)',
    slate    : 'var(--slate)',
    mist     : 'var(--mist)',
    mistDeep : 'var(--mist-deep)',
    muted    : 'var(--muted)',
    field    : 'var(--field)',      // input background
    surface  : 'var(--surface-solid)',
    shadow   : 'var(--shadow)',
};

export const THEME_MODES   = { light: 'light', dark: 'dark' };
export const THEME_STORAGE_KEY = 'portfolio-theme';
export const FONT_FAMILY   = '"Poppins", Arial, sans-serif';

// Real colour values for MUI's own components (menus, chips, alerts),
// which need concrete colours rather than CSS variables.
export const MUI_PALETTES = {
    light: {
        mode       : 'light',
        background : { default: '#f9fcff', paper: '#ffffff' },
        text       : { primary: '#000000', secondary: '#52606d' },
    },
    dark: {
        mode       : 'dark',
        background : { default: '#10151c', paper: '#1c242e' },
        text       : { primary: '#e4e9ef', secondary: '#aab6c3' },
    },
};
