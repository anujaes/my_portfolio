import React                        from "react";
import VerticalNav                  from "./atoms/verticalNav";
import Section                      from "./molecules/section";
import { educationRecords }         from "../../scripts/dataScripts/education.js";
import { experienceRecords }        from "../../scripts/dataScripts/experience.js";
import { skillRecords }             from "../../scripts/dataScripts/skillRatings";
import { certificationRecords }     from "../../scripts/dataScripts/certifications";
import Container                    from '@mui/material/Container'
import { Grid }                     from '@mui/material';
import '../css/resume.css'
import HorizontalNav from "./atoms/horizontalNav";

function Resume() {

    const payloadData = {
        academic        : educationRecords,
        experience      : experienceRecords,
        skills          : [skillRecords],
        certifications  : certificationRecords
    }

    return (
        <Container maxWidth="xlg" id='resume'>
            <Grid container maxWidth="xlg">
                <Grid item lg={3} md={6} sm={12} paddingX={6} paddingTop={12}>
                    {/* side vertical navigation bar */}
                    <VerticalNav />
                </Grid>
                <Grid item lg={9} md={6} sm={12} className="resume-details">
                <Grid container maxWidth="xlg" sx={{backgroundColor:"whitesmoke",m:0}}>
                    <HorizontalNav />
                </Grid>
                    {
                        Object.keys(payloadData).map((dataType) => (
                            <Section
                                key     = {dataType + Date.now()}
                                type    = {dataType}
                                payload = {payloadData[dataType]}
                            />
                        ) )
                    }
                </Grid>
            </Grid>
        </Container>
    )
}

export default Resume;