import { Box }      from "@mui/material";
import React        from "react";
import SchoolIcon   from '@mui/icons-material/School';

function AcademicRow(props) {

    return (

        <Box className="flex-container">
            <Box className="flex-icon">
                <span><SchoolIcon fontSize="medium" /></span>
            </Box>
            <Box className="flex-details">
                <h6>{props.year}</h6>
                <h3>{props.course}</h3>
                <h6>{props.institute}</h6>
                <p> {props.summary}</p>
            </Box>
        </Box>
    )
}

export default AcademicRow;