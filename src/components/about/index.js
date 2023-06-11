import React        from "react";
import potrait      from '../../images/potrait.png'
import resume       from '../../docs/resume.pdf'
import { Container, Grid, Button, Typography, Box } from "@mui/material";
import { Download } from "@mui/icons-material";
import TerminalIcon from '@mui/icons-material/Terminal';
import WindowIcon   from '@mui/icons-material/Window';
import GoogleIcon   from '@mui/icons-material/Google';
import AdbIcon      from '@mui/icons-material/Adb';
import AndroidIcon  from '@mui/icons-material/Android';
import CodeOffIcon from '@mui/icons-material/CodeOff';
import GitHubIcon from '@mui/icons-material/GitHub';

import '../css/about.css';

function About(){

    return (
        <>
        <Container maxWidth='lg' id="about" className="about-container">
            <Grid container>
                <Grid item lg={6} md={6} sm={12} xs={12} sx={{bgcolor:"lightgrey"}} className="portrait-container">
                    <img src={potrait} alt="Anuj's potrait" />
                </Grid >
                <Grid item lg={6} md={6} sm={12} className="details-container">
                    <Box sx={{p:5}}>
                        <Typography variant="h4" sx={{pb:0,mb:0}} fontWeight={600}>About Me</Typography>
                        <p>
                            I am an MCA graduate and am currently working for <b>Antino Labs</b> Gurugram, Haryana.
                            Antino is my first step into the IT industry where I am learning and growing with a good technical
                            team that moves ahead together, supporting and motivating one another.
                        </p>
                        <ul className="info">
                            <li>
                                <span>Name:</span>
                                <span>Anuj Kumar Singh</span>
                            </li>
                            <li>
                                <span>Designation:</span>
                                <span>Associate Software Developer</span>
                            </li>
                            <li>
                                <span>Company:</span>
                                <span>Antino Labs Private Ltd.</span>
                            </li>
                            <li>
                                <span>Location:</span>
                                <span>Gururam Haryana, India </span>
                            </li>
                            <li>
                                <span>Tech Stack:</span>
                                <span>NodeJS | MERN Stack</span>
                            </li>
                            <li>
                                <span>Email:</span>
                                <span>anuj.aes@gmail.com</span>
                            </li>
                            <li>
                                <span>Phone:</span>
                                <span>+91 9307565775</span>
                            </li>
                        </ul>

                        {/* <span className="summary">6 months of <span className="emphesize"> internship</span> experience.</span> */}
                        <span className="summary">Currently working as a <span className="emphesize">full time</span> employee.</span>
                        <br></br>
                        <Button
                            download    = "Anuj's Resume"
                            variant     = "contained"
                            target      = '_blank'
                            href        = {resume}
                            className   = "btn-cv"
                            size        = "large"
                        >
                            <Download />Resume
                        </Button>
                    </Box>
                </Grid>
            </Grid>
        </Container>
        <Container maxWidth='xlg' sx={{ bgcolor:"whitesmoke", my:2, py:2, display:{ sm:"none", xs:"none", lg:"block", md:"block" } }}>
            <Grid className="flexBox" sx={{px:3}}>
                <WindowIcon />
                <CodeOffIcon />
                <GoogleIcon />
                <AndroidIcon />
                <GitHubIcon />
                <TerminalIcon />
                <AdbIcon />
            </Grid>
        </Container>
        </>
    )
}

export default About;