import { Box, ImageListItem }   from "@mui/material";
import { motion }               from "motion/react";
import { usePortfolioStore }    from "../../store/usePortfolioStore";
import { asset }                from "../../utils/assets";
import { SPRING_IN }            from "../../constants/animation";

function ProfilePicture({ display }) {
    const { portrait, name } = usePortfolioStore((s) => s.profile);

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
                    <img
                        alt     = {name}
                        src     = {asset(portrait)}
                        style   = {{
                                    borderRadius : "1000px",
                                    width        : '200px',
                                    boxShadow    : "rgba(0, 0, 0, 0.24) 0px 3px 8px",
                                }}
                    />
                </ImageListItem>
            </Box>
        </motion.div>
    );
}

export default ProfilePicture;
