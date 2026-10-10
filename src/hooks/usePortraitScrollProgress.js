import { useEffect }            from 'react';
import { usePortfolioStore }    from '../store/usePortfolioStore';
import { clamp }                from '../utils/math';
import { PORTRAIT_SWAP }        from '../constants/animation';
import { SCROLL_CONTAINER_ID }  from '../constants/layout';

// Keeps store.portraitProgress at 0 -> 1 over the first `hideDistance` px of scrolling.
export function usePortraitScrollProgress(enabled) {
    const progress = usePortfolioStore((s) => s.portraitProgress);

    useEffect(() => {
        const container = document.getElementById(SCROLL_CONTAINER_ID);
        if (!enabled || !container) return;

        const onScroll = () => progress.set(clamp(container.scrollTop / PORTRAIT_SWAP.hideDistance, 0, 1));
        onScroll();
        container.addEventListener('scroll', onScroll, { passive: true });
        return () => container.removeEventListener('scroll', onScroll);
    }, [enabled, progress]);
}
