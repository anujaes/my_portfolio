import { Box }              from "@mui/material";
import { useReducedMotion } from "motion/react";
import { useTypewriter }    from "../../hooks/useTypewriter";
import { COLORS }           from "../../constants/theme";

// Inline typewriter: flows with the surrounding text and wraps like it.
function Typewriter({ phrases, color = COLORS.accent }) {
    const reducedMotion = useReducedMotion();
    const text = useTypewriter(phrases, reducedMotion);

    return (
        <Box component="span" color={color} aria-label={phrases.join(', ')}>
            <span aria-hidden="true">{text}</span>
            <Box
                component       = "span"
                aria-hidden     = "true"
                display         = "inline-block"
                width           = "2px"
                height          = "1.1em"
                marginLeft      = "2px"
                bgcolor         = {color}
                sx              = {{
                                    verticalAlign : 'text-bottom',
                                    animation     : reducedMotion ? 'none' : 'typewriter-caret 1s steps(1) infinite',
                                    '@keyframes typewriter-caret': { '50%': { opacity: 0 } },
                                }}
            />
        </Box>
    );
}

export default Typewriter;
