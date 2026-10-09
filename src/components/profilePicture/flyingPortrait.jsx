import { useEffect, useRef, useState } from "react";
import { motion, useSpring, useTransform } from "motion/react";
import { usePortfolioStore }    from "../../store/usePortfolioStore";
import { asset }                from "../../utils/assets";
import { clamp, lerp, easeInOutCubic, easeOutCubic } from "../../utils/math";
import { PORTRAIT_STYLE }       from "./profilePicture";
import { SPRING_IN, PORTRAIT_FLIGHT } from "../../constants/animation";
import {
    SCROLL_CONTAINER_ID,
    PORTRAIT_START_ID,
    PORTRAIT_DOCK_ID,
    HERO_NAME_ID }              from "../../constants/layout";

const { scrollDistance, startSize, dockSize, spring } = PORTRAIT_FLIGHT;

// Desktop only: the portrait starts in the right column and glides above the
// name as the page scrolls (and back on scroll up). The landing space grows in
// step with it (see PortraitDock), so the target is re-read every frame.
function FlyingPortrait() {
    const { portrait, name } = usePortfolioStore((s) => s.profile);
    const progress = usePortfolioStore((s) => s.portraitProgress);
    const smooth   = useSpring(progress, spring);
    const start    = useRef(null);  // start position at scrollTop 0
    const [ready, setReady] = useState(false);

    useEffect(() => {
        const container   = document.getElementById(SCROLL_CONTAINER_ID);
        const placeholder = document.getElementById(PORTRAIT_START_ID);
        if (!container || !placeholder) return;

        const measureStart = () => {
            const r = placeholder.getBoundingClientRect();
            start.current = { x: r.left, y: r.top + container.scrollTop };
            setReady(true);   // no-op after the first call
        };
        // layout can shift (fonts, resize), so re-measure as we scroll
        const onScroll = () => {
            measureStart();
            progress.set(clamp(container.scrollTop / scrollDistance, 0, 1));
        };

        onScroll();
        document.fonts?.ready.then(measureStart);
        container.addEventListener('scroll', onScroll, { passive: true });
        window.addEventListener('resize', measureStart);
        return () => {
            container.removeEventListener('scroll', onScroll);
            window.removeEventListener('resize', measureStart);
        };
    }, [progress]);

    const dockRect = () => document.getElementById(PORTRAIT_DOCK_ID)?.getBoundingClientRect();

    // horizontal centre of the name's text (not its full-width block)
    const nameCenter = () => {
        const el = document.getElementById(HERO_NAME_ID);
        if (!el) return null;
        const range = document.createRange();
        range.selectNodeContents(el);
        const r = range.getBoundingClientRect();
        return r.left + r.width / 2;
    };

    // x eases in-out, y eases out: the different curves give a slight arc
    const x = useTransform(smooth, (p) => {
        // land centred above the name
        const center = nameCenter();
        return start.current && center !== null ? lerp(start.current.x, center - dockSize / 2, easeInOutCubic(p)) : 0;
    });
    const y = useTransform(smooth, (p) => {
        const dock = dockRect();
        return start.current && dock ? lerp(start.current.y, dock.top, easeOutCubic(p)) : 0;
    });
    const scale = useTransform(smooth, [0, 1], [1, dockSize / startSize]);

    return (
        <motion.div
            aria-hidden = "true"
            style       = {{
                            position        : 'fixed',
                            left            : 0,
                            top             : 0,
                            x,
                            y,
                            scale,
                            transformOrigin : '0 0',
                            zIndex          : 2,
                            pointerEvents   : 'none',
                            opacity         : ready ? 1 : 0,
                        }}
        >
            <motion.img
                {...SPRING_IN}
                alt     = {name}
                src     = {asset(portrait)}
                style   = {{ ...PORTRAIT_STYLE, width: startSize, display: 'block' }}
            />
        </motion.div>
    );
}

export default FlyingPortrait;
