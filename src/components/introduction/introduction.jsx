import { Box, Typography }      from "@mui/material";
import { motion }               from "motion/react";
import ProfilePicture           from "../profilePicture/profilePicture";
import { usePortfolioStore }    from "../../store/usePortfolioStore";
import { SLIDE_IN }             from "../../constants/animation";

function Introduction() {
    const paragraphs = usePortfolioStore((s) => s.profile.about);

    return (
        <Box>
            <ProfilePicture display={{ xs: 'none', sm: 'none', md: 'flex' }} />
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
