import { useEffect, useRef, useState } from "react";
import { motion, useMotionValueEvent } from "motion/react";
import { usePortfolioStore }    from "../../store/usePortfolioStore";
import { asset }                from "../../utils/assets";
import { PORTRAIT_STYLE }       from "./profilePicture";
import { PORTRAIT_SWAP }        from "../../constants/animation";
import { HERO_NAME_ID }         from "../../constants/layout";

const { dockSize, dockGap, popTransition, spaceTransition } = PORTRAIT_SWAP;

// Horizontal offset that centres the portrait over the name's text
// (the text is narrower than the column it sits in). Measured when the portrait
// pops out, after the name's slide-in animation has finished, and on resize.
function useNameCenterOffset(ref, docked) {
    const [offset, setOffset] = useState(0);

    useEffect(() => {
        const measure = () => {
            const name = document.getElementById(HERO_NAME_ID);
            if (!name || !ref.current) return;
            const range = document.createRange();
            range.selectNodeContents(name);
            const text = range.getBoundingClientRect();
            const box  = ref.current.getBoundingClientRect();
            setOffset(text.left + text.width / 2 - box.left - dockSize / 2);
        };
        measure();
        document.fonts?.ready.then(measure);
        window.addEventListener('resize', measure);
        return () => window.removeEventListener('resize', measure);
    }, [ref, docked]);

    return offset;
}

// Left side of the portrait swap: once the right-side portrait has fully
// shrunk away, a space opens above the name and the portrait pops out there.
function PortraitDock() {
    const { portrait, name } = usePortfolioStore((s) => s.profile);
    const progress = usePortfolioStore((s) => s.portraitProgress);
    const [docked, setDocked] = useState(() => progress.get() >= 1);
    const ref    = useRef(null);
    const offset = useNameCenterOffset(ref, docked);

    useMotionValueEvent(progress, 'change', (value) => setDocked(value >= 1));

    return (
        <motion.div
            ref         = {ref}
            initial     = {false}
            animate     = {{ height: docked ? dockSize + dockGap : 0 }}
            transition  = {spaceTransition}
            style       = {{ alignSelf: 'stretch', flexShrink: 0 }}
        >
            <motion.img
                alt         = {name}
                aria-hidden = {!docked}
                src         = {asset(portrait)}
                initial     = {false}
                animate     = {{ scale: docked ? 1 : 0, opacity: docked ? 1 : 0 }}
                transition  = {popTransition}
                style       = {{ ...PORTRAIT_STYLE, width: dockSize, display: 'block', marginLeft: offset }}
            />
        </motion.div>
    );
}

export default PortraitDock;
