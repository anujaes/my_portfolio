import React                    from "react";
import VerticalNav              from "../../components/navbar/verticalNav";
import Section                  from "./molecules/section";
import { educationRecords }     from "../../scripts/education";
import { skillRecords }         from "../../scripts/skillRatings";
import { certificationRecords } from "../../scripts/certifications";
import { experienceRecords }    from "../../scripts/experience";
import { aboutStatements }      from "../../scripts/about";
import { projectRecords }       from "../../scripts/projects";
import SocialLinks              from "../../components/socialLinks/socialLinks";
import {
    Container,
    Grid,
    Typography,
    Box
}                               from "@mui/material";
import TypeWriterEffect         from 'react-typewriter-effect';
import '../../css/home.css';
import ProfilePicture from "../../components/profilePicture/profilePicture";


const payloadData = {
    about           : aboutStatements,
    experience      : experienceRecords,
    skills          : [skillRecords],
    certifications  : certificationRecords,
    academic        : educationRecords,
    projects        : projectRecords,
}

function About() {
    return (
        <div className="about-container" style={{marginTop:'-65px'}}>
            <Container maxWidth='lg' >
                <Grid container maxWidth='lg'>
                    <Grid
                        item
                        xlg             = {6}
                        lg              = {6}
                        md              = {6}
                        sm              = {12}
                        xs              = {12}
                        padding         = {5}
                        display         = {"flex"}
                        justifyContent  = {"center"}
                        flexDirection   = {"column"}
                        minHeight       = "100vh"
                        sx              = {{
                                            alignItems : {
                                                xs : "center",
                                                sm : "center",
                                                md : "flex-start",
                                                lg : "flex-start",
                                                xl : 'flex-start'
                                            },
                                            textAlign : {xs:"center",sm:"center", md:"left" }
                                        }}
                    >
                        {/* profile picture */}
                        <ProfilePicture display={{xs:'flex', sm:'flex', md:'none', lg:"none"}} />

                        <Typography variant="h3" fontWeight={700} marginTop={2}>
                            Anuj Kr. Singh
                        </Typography>
                        <Typography variant="h6" fontWeight={500}>
                            Experienced Javascript Developer
                        </Typography>

                        <Typography
                            // variant="p"
                            fontWeight  = {500}
                            maxWidth    = {350}
                            marginTop   = {3}
                            display     = {"flex"}
                            fontSize    = {15}
                        >
                            I build exceptional and accessible digital experiences for the web. I can work as a
                        </Typography>
                        <TypeWriterEffect
                            textStyle       = {{
                                                    fontSize    : 15,
                                                    fontWeight  : 500,
                                                    fontFamily  : 'inherit',
                                                    color       : '#ca292d',
                                                }}
                            scrollArea      = {document.querySelector('#typing-word')}
                            startDelay      = {1000}
                            cursorColor     = "#ca292d"
                            multiTextLoop   = {true}
                            multiText       = {[
                                                    '<Javascript /> developer.',
                                                    '<NodeJS /> developer.',
                                                    '<React /> developer.',
                                                    '<MERN_Stack /> developer.',
                                                ]}
                            multiTextDelay  = {1000}
                            typeSpeed       = {150}
                        />

                        {/* Navigation bar */}
                        <VerticalNav />

                        {/* social media links */}
                        <SocialLinks />
                    </Grid >
                    <Grid
                        item
                        className   = "details-container"
                        xlg         = {6}
                        lg          = {6}
                        md          = {6}
                        sm          = {12}
                        xs          = {12}
                    >
                        {/* TODO ADD IT INTO SECTION */}
                        <Box>
                            {
                                Object.keys(payloadData).map((dataType) => (
                                    <Section
                                        key     = {dataType + Date.now()}
                                        type    = {dataType}
                                        payload = {payloadData[dataType]}
                                    />
                                ) )
                            }
                        </Box>
                        <Box marginBottom={10} className="row-section">
                            <Typography fontSize={15}>
                                Loosely designed in Figma and coded in Visual Studio Code by yours truly.
                                Built with <b>React.js</b> and <b>Material UI,</b> deployed on <b>firebase</b>.
                                All text is set in the Roboto typeface.
                            </Typography>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </div>
    )
}

export default About;