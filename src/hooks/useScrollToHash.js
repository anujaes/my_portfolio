import { useEffect }                from 'react';
import { HASH_SCROLL_SETTLE_MS, SCROLL_CONTAINER_ID } from '../constants/layout';

// Deep links like /#skills: the browser tries to jump before React renders,
// so scroll to the section once the page has loaded, and keep it in place while
// lazy images above it finish loading and shift the layout.
export function useScrollToHash() {
    useEffect(() => {
        const id = decodeURIComponent(window.location.hash.slice(1));
        if (!id) return;

        const target = () => document.getElementById(id);
        const jump   = () => target()?.scrollIntoView({ block: 'start', behavior: 'instant' });

        let observer;
        let stopTimer;
        const settle = () => {
            jump();
            // watch the content blocks of the scroll area: they grow as images load
            observer = new ResizeObserver(jump);
            const scroller = document.getElementById(SCROLL_CONTAINER_ID);
            [...(scroller?.children ?? [])].forEach((child) => observer.observe(child));
            // stop correcting once settled, or as soon as the visitor scrolls
            const stop = () => observer.disconnect();
            stopTimer = setTimeout(stop, HASH_SCROLL_SETTLE_MS);
            window.addEventListener('wheel', stop, { once: true, passive: true });
            window.addEventListener('touchstart', stop, { once: true, passive: true });
        };

        if (document.readyState === 'complete') settle();
        else window.addEventListener('load', settle, { once: true });

        return () => {
            window.removeEventListener('load', settle);
            observer?.disconnect();
            clearTimeout(stopTimer);
        };
    }, []);
}
