import React from "react";
import { Chip, Grid, ImageListItem, Link, Typography } from "@mui/material";
import { OpenInNew } from "@mui/icons-material";



function Projects(props) {

    return (
        <Link
            target  = "_blank"
            rel     = "noreferrer"
            href    = {props.link}
            sx      = {{ textDecoration: "none", color:"inherit"}}
        >
            <Grid
                container
                marginBottom    = {2}
                sx              = {{padding : "1rem 0rem 1rem 0rem"}}
                className       = "glass-look-hover glass-look"
            >
                <Grid
                    item
                    xlg         = {4}
                    lg          = {4}
                    md          = {4}
                    sm          = {12}
                    xs          = {12}
                    paddingX    = {2}
                >
                    <ImageListItem>
                        <img
                            alt     = "project"
                            src     = {props.thumbnail}
                            style   = {{border : "3px solid lightgrey", borderRadius:"7px"}}
                        />
                    </ImageListItem>
                </Grid>
                <Grid
                    item
                    xlg = {8}
                    lg  = {8}
                    md  = {8}
                    sm  = {12}
                    xs  = {12}
                    sx  = {{padding : { xs:'1rem', sm:'1rem', md: '0', lg:'0px', xlg:'0px' }}}
                >
                    <Typography fontSize={16} fontWeight={500}>{props.name} <OpenInNew className="open-in-new" /></Typography>
                    <Typography fontSize={12} fontWeight={600} marginRight={1} > {props.duration} </Typography>
                    <Typography paddingRight={1} marginY={0.5} fontSize={13}>{props.summary}</Typography>
                    {
                        props.technologies.map((item, index)=>(
                            <Chip
                                key     = {'p_tch'+index}
                                label   = {item}
                                sx      = {{margin:0.3, fontWeight:500, fontSize:12}}
                            />
                        ))
                    }
                </Grid>
            </Grid>
        </Link>
    )
}

export default Projects;