import { THEME_MODES, THEME_STORAGE_KEY } from '../constants/theme';

// Light by default; dark only when the visitor has chosen it with the toggle
export function getInitialThemeMode() {
    try {
        if (localStorage.getItem(THEME_STORAGE_KEY) === THEME_MODES.dark) return THEME_MODES.dark;
    } catch { /* storage unavailable */ }
    return THEME_MODES.light;
}

// Switches the CSS variables (css/theme.css) and remembers the choice
export function applyThemeMode(mode) {
    document.documentElement.dataset.theme = mode;
    try { localStorage.setItem(THEME_STORAGE_KEY, mode); } catch { /* storage unavailable */ }
}
