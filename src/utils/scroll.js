import { SCROLL_CONTAINER_ID } from '../constants/layout';

// Scrolls the content back to the top and clears any #section from the URL
export function scrollToTop() {
    document.getElementById(SCROLL_CONTAINER_ID)?.scrollTo({ top: 0, behavior: 'smooth' });
    window.history.replaceState(null, '', window.location.pathname);
}
