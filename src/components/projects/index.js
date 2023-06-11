import React                    from "react";
import ProjectCard              from "./molucules/projectCard";
import { projectRecords }       from "../../scripts/dataScripts/projects";
import { Grid, Typography }     from "@mui/material";
import {Container,Box}          from "@mui/material";
import '../css/projects.css'

function Projects() {

    // getting images from
    function importAll(r) {
        return r.keys().map(r);
    }
    const images = importAll(require.context('../../images/project/', false, /\.(png|jpe?g|svg)$/));

    return (
        <Container disableGutters id='projects' maxWidth='xlg'>
            <Grid container spacing={1}>
                <Grid item xs={12} sm={12} md={12} lg={12} sx={{mb:2}}>
                    <Typography variant="h3" textAlign='center' fontWeight={800} sx={{ mb:2, mt:1}}>My Projects</Typography>
                </Grid>
                {
                    projectRecords.map ( (item,index) => (
                        <ProjectCard
                            key             = {index+"proCard"}
                            name            = {item.name}
                            duration        = {item.duration}
                            technologies    = {item.technologies}
                            summary         = {item.summary}
                            link            = {item.link}
                            image           = {images[index]}
                        />
                    ))
                }
            </Grid>
            <Box className="activity-panel">
                {/* <div>
                    <h1>I'm open To immediate join!</h1>
                    <p>I am willing to join an organization which offers me opportunities to learn and innovate in the cutting edges - technologies via utilizing my knowledge & passion and help me grow in both organizational and personal perspective.</p>
                    <Button style={{borderRadius:"100px",width:"120px",height:"50px",backgroundColor:"#3e64ff",fontWeight:"bold"}}  href="#contact"  >HIRE ME</Button>
                </div> */}
                <div>
                    <h1>I'm open to learn new technologies!</h1>
                    <p>I am willing to join an organization which offers me opportunities to learn and innovate in the cutting edges - technologies via utilizing my knowledge & passion and help me grow in both organizational and personal perspective.</p>
                </div>
            </Box>
        </Container>
    )
}

export default Projects;