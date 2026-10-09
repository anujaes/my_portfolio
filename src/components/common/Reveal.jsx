import { motion }                 from "motion/react";
import { POP_IN, REVEAL_AMOUNT }  from "../../constants/animation";

// Pops an element in the first time it scrolls into view.
function Reveal({ children, amount = REVEAL_AMOUNT, style }) {
    return (
        <motion.div
            initial     = {POP_IN.initial}
            whileInView = {POP_IN.animate}
            transition  = {POP_IN.transition}
            viewport    = {{ once: true, amount }}
            style       = {{ display: "inline-flex", ...style }}
        >
            {children}
        </motion.div>
    );
}

export default Reveal;
