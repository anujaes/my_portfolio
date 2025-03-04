import { Box, ImageListItem }   from "@mui/material";
import profile                  from "../../images/potrait_profile.png"
import {motion}                 from "motion/react";

function ProfilePicture(props) {
    return (
        <motion.div 
            initial     = {{ scale: 0 }}
            animate     = {{ scale: 1  }}
            transition  = {{ 
                duration: 0.7, 
                ease:"linear",
                scale:{ type: "spring", bounce: 0.5, delay: 0.3,}
            }}
        >
        <Box
            display         = {"flex"}
            justifyContent  = {"center"}
            alignItems      = {"center"}
            width           = {"100%"}
            sx              = {{
                                paddingTop      : {xs:10, sm:10, md:0, lg:0, xlg:0},
                                paddingBottom   : {xs:3, sm:10, md:3, lg:3},
                                display         : props.display
                            }}
        >
            <ImageListItem>
                <img
                    alt     = "profile"
                    src     = {profile}
                    style   = {{
                                borderRadius : "1000px",
                                width        : '200px',
                                boxShadow    : "rgba(0, 0, 0, 0.24) 0px 3px 8px"
                            }}
                />
            </ImageListItem>
        </Box>
        </motion.div>
    )
}

export default ProfilePicture;