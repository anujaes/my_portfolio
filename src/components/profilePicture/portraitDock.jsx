import { motion, useSpring, useTransform } from "motion/react";
import { usePortfolioStore }    from "../../store/usePortfolioStore";
import { PORTRAIT_FLIGHT }      from "../../constants/animation";
import { easeOutCubic }         from "../../utils/math";
import { PORTRAIT_DOCK_ID }     from "../../constants/layout";

const { dockSize, dockGap, spring } = PORTRAIT_FLIGHT;


// Space above the name that opens up as the portrait arrives,
// pushing the hero content down instead of reserving the gap up front.
function PortraitDock() {
    const progress = usePortfolioStore((s) => s.portraitProgress);
    const smooth   = useSpring(progress, spring);
    // opens early (ease-out) so the name moves aside before the portrait arrives
    const height   = useTransform(smooth, (p) => (dockSize + dockGap) * easeOutCubic(p));

    return (
        <motion.div
            id          = {PORTRAIT_DOCK_ID}
            aria-hidden = "true"
            style       = {{ height, alignSelf: 'stretch', flexShrink: 0 }}
        />
    );
}

export default PortraitDock;
