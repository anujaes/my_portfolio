import { useEffect } from 'react';

// Deep links like /#skills: the browser tries to jump before React renders,
// so scroll to the section once the page (and its images) has loaded.
export function useScrollToHash() {
    useEffect(() => {
        const id = decodeURIComponent(window.location.hash.slice(1));
        if (!id) return;

        const scroll = () => document.getElementById(id)?.scrollIntoView({ block: 'start', behavior: 'instant' });
        if (document.readyState === 'complete') {
            scroll();
            return;
        }
        window.addEventListener('load', scroll, { once: true });
        return () => window.removeEventListener('load', scroll);
    }, []);
}
