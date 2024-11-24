import { Box, Typography }  from "@mui/material";
import ProfilePicture       from "../profilePicture/profilePicture";

function Introduction(props) {
    return (
        <Box>
            <ProfilePicture display={{xs:'none', sm:'none', md:'flex', lg:"flex", xl:"flex"}} />
            {
                props.payload.map((item,index)=>(
                    <Typography key={'stm' + index} fontSize={15} marginBottom={1} textAlign='justify'>
                        {item}
                    </Typography>
                ))
            }
        </Box>
    )
}

export default Introduction;