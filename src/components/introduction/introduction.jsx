import { Box, Typography }      from "@mui/material";
import { motion }               from "motion/react";
import ProfilePicture           from "../profilePicture/profilePicture";
import { usePortfolioStore }    from "../../store/usePortfolioStore";
import { SLIDE_IN }             from "../../constants/animation";
import { PORTRAIT_START_ID }    from "../../constants/layout";
import { usePortraitFlight }    from "../../hooks/usePortraitFlight";

function Introduction() {
    const paragraphs = usePortfolioStore((s) => s.profile.about);
    const flight     = usePortraitFlight();

    return (
        <Box>
            {/* with the flight on, this only reserves the space the portrait starts from */}
            <ProfilePicture
                display = {{ xs: 'none', sm: 'none', md: 'flex' }}
                imgId   = {flight ? PORTRAIT_START_ID : undefined}
                hidden  = {flight}
            />
            {paragraphs.map((text) => (
                <motion.div
                    key         = {text}
                    initial     = {SLIDE_IN.initial}
                    animate     = {SLIDE_IN.animate}
                    transition  = {{ ...SLIDE_IN.transition, delay: 0.5 }}
                >
                    <Typography fontSize={15} marginBottom={1} textAlign='justify'>
                        {text}
                    </Typography>
                </motion.div>
            ))}
        </Box>
    );
}

export default Introduction;
