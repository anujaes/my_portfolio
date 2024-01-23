import { Box, Typography } from "@mui/material";
import React from "react";

function Introduction(props) {
    return (
        <Box>
            {
                props.payload.map((item,index)=>(
                    <Typography key={'stm' + index} fontSize={15} marginBottom={1}>
                        {item}
                    </Typography>
                ))
            }
        </Box>
    )
}

export default Introduction;