import React                from "react";
import AcademicRow          from "../../../components/academic/academicRow.js";
import Experience           from "../../../components/experience/experience.js";
import SkillsRow            from "../../../components/skills/skillsRow.js";
import Certifications       from "../../../components/certifications/certifications.js";
import Introduction         from "../../../components/introduction/introduction.js";
import Projects             from "../../../components/projects/projects.js";
import { Box, Typography }  from "@mui/material";

function Section(props) {

    const { type, payload} = props;

    function conditionalRendering(item, index, type) {
        const components = {
            academic        :  <AcademicRow
                                    key         = {'aca'+index}
                                    year        = {item.year}
                                    course      = {item.course}
                                    institute   = {item.institute}
                                    summary     = {item.summary}
                                />,
            about           :   <Introduction
                                    key             = {'abt'+index}
                                    payload         = {item.statements}
                                />,
            experience      :   <Experience
                                    key             = {'corp'+index}
                                    year            = {item.year}
                                    designation     = {item.designation}
                                    organization    = {item.organization}
                                    summary         = {item.summary}
                                    keyPoints       = {item.keyPoints}
                                    technologies    = {item.technologies}
                                    url             = {item.url}
                                />,
            skills          :   <SkillsRow
                                    key             = {'ski'+index}
                                    events          = {item.events}
                                    backend         = {item.backend}
                                    frontend        = {item.frontend}
                                    database        = {item.database}
                                    tools           = {item.tools}
                                    languages       = {item.languages}
                                    technologies    = {item.technologies}
                                />,
            certifications  :   <Certifications
                                    key             = {'cert'+index}
                                    date            = {item.date}
                                    certifiedFrom   = {item.certifiedFrom}
                                    certificateName = {item.certificateName}
                                    summary         = {item.summary}
                                    previewLink     = {item.previewLink}
                                />,
            projects        :   <Projects
                                    key             = {'proj'+index}
                                    name            = {item.name}
                                    duration        = {item.duration}
                                    summary         = {item.summary}
                                    link            = {item.link}
                                    technologies    = {item.technologies}
                                    thumbnail       = {item.thumbnail}
                                />
        }
        // returning the required components from object
        return components[type]
    }

    return (
        <Box key={type + Date.now()} id={type} paddingTop={15}>
            {/* TODO - FOR MOBILE VIEW  we ned to fix the mobile view*/}
            <Typography
                variant     = "h5"
                marginY     = {1.1}
                fontWeight  = {500}
                color       = {"#ca292d"}
                sx={{display : { sm: 'block', md: 'none' }}}
            >
                {type.charAt(0).toUpperCase() + type.slice(1)}
            </Typography>
            {
                payload.map( (item,index) => (
                    conditionalRendering(item, index, type)
                ))
            }
        </Box>
    )
}

export default Section;