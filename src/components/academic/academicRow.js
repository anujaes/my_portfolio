import React                from "react";
import { Grid, Typography } from "@mui/material";

function AcademicRow(props) {
    return (
        <Grid
            container
            marginBottom    = {2}
            sx              = {{padding : "1.5rem 1rem 1rem 1rem"}}
            className       = "glass-look"
        >
            <Grid item xlg={3} lg={3} md={4} sm={12} xs={12}>
                <Typography
                    fontSize    = {"small"}
                    fontWeight  = {600}
                    marginRight = {2}
                >
                    {props.year}
                </Typography>
            </Grid>
            <Grid item xlg={9} lg={9} md={8} sm={12} xs={12}>
                <Typography fontSize={16} fontWeight={500}>{props.course}</Typography>
                <Typography p={0} m={0} fontSize={15}>{props.institute}</Typography>
                <Typography p={0} marginY={1} fontSize={14}>{props.summary}</Typography>
            </Grid>
        </Grid>
    )
}

export default AcademicRow;