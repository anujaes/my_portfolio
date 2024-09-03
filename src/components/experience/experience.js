import React            from "react";
import { OpenInNew }    from "@mui/icons-material";
import {
        Chip,
        Grid,
        Link,
        List,
        ListItemText,
        Typography }    from "@mui/material";

function Experience(props) {

    // useEffect(()=>{
    //     window.document.getElementById("details-body").onscroll = () => {
    //         const top = document.getElementById("experience").getBoundingClientRect().top;
    //         const bottom = document.getElementById("experience").getBoundingClientRect().bottom;
    //         if ( top <= window.innerHeight-550 && bottom >= window.innerHeight ) {
    //             console.log("in viewport");
    //         }
    //     }
    // },
    // [])

    return (
        <Link
            target  = "_blank"
            rel     = "noreferrer"
            href    = {props.url}
            sx      = {{ textDecoration: "none", color:"inherit"}}
        >
            <Grid
                container
                marginBottom    = {2}
                sx              = {{padding : "1.5rem 1rem 1rem 1rem"}}
                className       = "glass-look-hover glass-look"
                id              = "experience"
            >
                <Grid item xlg={3} lg={3} md={4} sm={12} xs={12}>
                    <Typography
                        fontSize    = {"small"}
                        fontWeight  = {600}
                        marginRight = {1}
                        marginTop   = {0.4}
                    >
                        {props.year}
                    </Typography>
                </Grid>
                <Grid item xlg={9} lg={9} md={8} sm={12} xs={12}>
                    <Typography
                        display     = {"flex"}
                        alignItems  = {"center"}
                        fontSize    = {16}
                        fontWeight  = {500}
                    >
                        {props.designation} <OpenInNew className="open-in-new" />
                    </Typography>
                    <Typography
                        p        = {0}
                        m        = {0}
                        fontSize = {15}
                    >
                        {props.organization}
                    </Typography>
                    <Typography p={0} marginY={1} fontSize={14}>{props.summary}</Typography>

                    {/* bullet points */}
                    <List dense={false} sx={{ listStyleType: 'disc' }}>
                        {
                            props.keyPoints.map((elem,index)=>(
                                < ListItemText
                                    sx  = {{ display: 'list-item', marginLeft:'17px'}}
                                    key = {'KP'+index}
                                >
                                    <Typography p={0} marginY={1} fontSize={15}>{elem}</Typography>
                                </ListItemText>
                            ))
                        }

                    {/* small button chips for used techs */}
                    </List>
                    {
                        props.technologies.map((item, index)=>(
                            <Chip
                                key     = {'tch'+index}
                                label   = {item}
                                sx      = {{margin:0.3, fontWeight:500, color:"#222831", backgroundColor:"#76ABAE"}}
                            />
                        ))
                    }
                </Grid>
            </Grid>
        </Link>
    )
}

export default Experience;