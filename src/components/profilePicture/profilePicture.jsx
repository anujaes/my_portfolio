import { Box, ImageListItem }   from "@mui/material";
import { motion }               from "motion/react";
import { usePortfolioStore }    from "../../store/usePortfolioStore";
import { asset }                from "../../utils/assets";
import { SPRING_IN, PORTRAIT_FLIGHT } from "../../constants/animation";

export const PORTRAIT_STYLE = {
    borderRadius : "1000px",
    boxShadow    : "rgba(0, 0, 0, 0.24) 0px 3px 8px",
};

// imgId + hidden: renders an invisible copy that only reserves the space
// (used as the starting point of the flying portrait on desktop).
function ProfilePicture({ display, imgId, hidden = false }) {
    const { portrait, name } = usePortfolioStore((s) => s.profile);
    // the invisible placeholder must not animate, or its measured position is off
    const Wrapper = hidden ? 'div' : motion.div;
    const intro   = hidden ? {} : SPRING_IN;

    return (
        <Wrapper {...intro}>
            <Box
                justifyContent  = {"center"}
                alignItems      = {"center"}
                width           = {"100%"}
                sx              = {{
                                    paddingTop      : { xs: 10, sm: 10, md: 0 },
                                    paddingBottom   : { xs: 3, sm: 10, md: 3 },
                                    visibility      : hidden ? 'hidden' : 'visible',
                                    display,
                                }}
            >
                <ImageListItem>
                    <img
                        id          = {imgId}
                        alt         = {hidden ? "" : name}
                        aria-hidden = {hidden || undefined}
                        src         = {asset(portrait)}
                        style       = {{ ...PORTRAIT_STYLE, width: PORTRAIT_FLIGHT.startSize }}
                    />
                </ImageListItem>
            </Box>
        </Wrapper>
    );
}

export default ProfilePicture;
