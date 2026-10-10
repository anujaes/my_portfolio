import { Box, ImageListItem }   from "@mui/material";
import { motion, useSpring, useTransform } from "motion/react";
import { usePortfolioStore }    from "../../store/usePortfolioStore";
import { asset }                from "../../utils/assets";
import { SPRING_IN, PORTRAIT_SWAP } from "../../constants/animation";

export const PORTRAIT_STYLE = {
    borderRadius : "1000px",
    boxShadow    : "var(--shadow) 0px 3px 8px",
};

// fadeOnScroll: shrinks and fades away as the page scrolls (desktop portrait swap).
function ProfilePicture({ display, fadeOnScroll = false }) {
    const { portrait, name } = usePortfolioStore((s) => s.profile);
    const progress = usePortfolioStore((s) => s.portraitProgress);
    const smooth   = useSpring(progress, PORTRAIT_SWAP.scrubSpring);
    const scale    = useTransform(smooth, [0, 1], [1, 0]);
    const opacity  = useTransform(smooth, [0, 0.85, 1], [1, 0.4, 0]);

    return (
        <motion.div {...SPRING_IN}>
            <Box
                justifyContent  = {"center"}
                alignItems      = {"center"}
                width           = {"100%"}
                sx              = {{
                                    paddingTop      : { xs: 10, sm: 10, md: 0 },
                                    paddingBottom   : { xs: 3, sm: 10, md: 3 },
                                    display,
                                }}
            >
                <ImageListItem>
                    <motion.img
                        alt     = {name}
                        src     = {asset(portrait)}
                        style   = {{
                                    ...PORTRAIT_STYLE,
                                    width : PORTRAIT_SWAP.size,
                                    ...(fadeOnScroll && { scale, opacity }),
                                }}
                    />
                </ImageListItem>
            </Box>
        </motion.div>
    );
}

export default ProfilePicture;
