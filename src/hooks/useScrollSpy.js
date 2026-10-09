import { useEffect }                from 'react';
import { usePortfolioStore }        from '../store/usePortfolioStore';
import { SCROLL_SPY_ROOT_MARGIN }   from '../constants/layout';

// Keeps store.activeSection in sync with the section currently in view.
export function useScrollSpy() {
    const sections         = usePortfolioStore((s) => s.sections);
    const setActiveSection = usePortfolioStore((s) => s.setActiveSection);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => entries.forEach((e) => e.isIntersecting && setActiveSection(e.target.id)),
            { rootMargin: SCROLL_SPY_ROOT_MARGIN }
        );
        sections.forEach(({ id }) => {
            const el = document.getElementById(id);
            if (el) observer.observe(el);
        });
        return () => observer.disconnect();
    }, [sections, setActiveSection]);
}
