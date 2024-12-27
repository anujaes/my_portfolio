import { Box, Typography }  from "@mui/material";
import ProfilePicture       from "../profilePicture/profilePicture";
import {motion} from "motion/react";    

function Introduction(props) {
    return (
        <Box>
            <ProfilePicture display={{xs:'none', sm:'none', md:'flex', lg:"flex", xl:"flex"}} />
            {
                props.payload.map((item,index)=>(
                    <motion.div
                            initial     = {{ opacity: 0,x: -50, }}
                            animate     = {{ opacity: 1,x: 0,}}
                            transition  = {{ duration: 0.3, ease:"linear", delay:0.5 }}
                        >
                        <Typography key={'stm' + index} fontSize={15} marginBottom={1} textAlign='justify'>
                            {item}
                        </Typography>
                    </motion.div>
                ))
            }
        </Box>
    )
}

export default Introduction;