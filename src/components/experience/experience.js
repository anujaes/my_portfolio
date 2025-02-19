import React            from "react";
import { OpenInNew }    from "@mui/icons-material";
import {
        Chip,
        Grid,
        Link,
        List,
        ListItemText,
        Typography }    from "@mui/material";
import { motion } from "motion/react";
import { useInView } from "react-intersection-observer";

function Experience(props) {

    const { ref, inView } = useInView({
        threshold: 0.9, // Trigger animation when 30% of the element is visible
        triggerOnce: true,
    });

    return (
        <Link
            target  = "_blank"
            rel     = "noreferrer"
            href    = {props.url}
            sx      = {{ textDecoration: "none", color:"inherit"}}
        >
            <div ref={ref}>
                <Grid
                    container
                    marginBottom    = {2}
                    sx              = {{padding : "1.5rem 1rem 1rem 1rem"}}
                    className       = "glass-look-hover glass-look"
                    id              = "experience"
                >
                    <Grid item xlg={2} lg={2} md={4} sm={12} xs={12} paddingRight={"100px"}>
                        <img 
                            src     = {props.logo} 
                            alt     = "company_logo" 
                            style   = {{width:'85px'}}
                            loading = "lazy"
                        />
                    </Grid>
                    <Grid item xlg={9} lg={9} md={9} sm={12} xs={12}>
                        <Typography
                            fontSize    = {"small"}
                            fontWeight  = {600}
                            marginRight = {0}
                            marginTop   = {0}
                        >
                            {props.year}
                        </Typography>
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
                        <Typography
                            pt       = {0}
                            m        = {0}
                            fontSize = {13}
                        >
                            {props.majors}
                        </Typography>
                    </Grid>
                    <Grid item xlg={12} lg={12} md={12} sm={12} xs={12}>
                        {/* <Typography
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
                        </Typography> */}
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
                                <motion.div
                                    initial={{ opacity: 0, scale: 0 }}
                                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                                    transition={{
                                        scale: { type: "spring", visualDuration: 0.7, bounce: 0.3 },
                                    }}
                                    style = {{display: "inline-flex"}}
                                    key={'expe' + index}
                                >
                                    <Chip
                                        key     = {'tch'+index}
                                        label   = {item}
                                        sx      = {{margin:0.3, fontWeight:500}}
                                    />
                                </motion.div>
                            ))
                            
                        }
                    </Grid>
                </Grid>
            </div>
        </Link>
    )
}

export default Experience;