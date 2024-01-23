import React from "react";
// import LaunchIcon from '@mui/icons-material/Launch';
import { Grid, Link, Typography } from "@mui/material";

function Certifications(props) {
    return (
        <Link
            target  = "_blank"
            rel     = "noreferrer"
            href    = {props.previewLink}
            sx      = {{ textDecoration: "none", color:"inherit"}}
        >
            <Grid
                container
                marginBottom    = {2}
                sx              = {{ padding: "1.5rem 1rem 1rem 1rem" }}
                className       = "glass-look-hover"
            >
                <Grid item xlg={3} lg={3} md={4} sm={12} xs={12}>
                    <Typography
                        fontSize     = {"small"}
                        fontWeight   = {600}
                        marginRight  = {1}
                    >
                        {props.date}
                    </Typography>
                </Grid>
                <Grid item xlg={9} lg={9} md={8} sm={12} xs={12}>
                    <Typography fontSize={16} fontWeight={500}>{props.certificateName}</Typography>
                    <Typography p={0} m={0} fontSize={15}>{props.certifiedFrom}</Typography>
                    <Typography p={0} marginY={1} fontSize={14}>{props.summary}</Typography>
                </Grid>
            </Grid>
        </Link>
    )
}

export default Certifications;