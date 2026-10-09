import { Box, Typography }  from "@mui/material";
import Introduction         from "../../../components/introduction/introduction";
import ExperienceList       from "../../../components/experience/experience";
import SkillsRow            from "../../../components/skills/skillsRow";
import CertificationList    from "../../../components/certifications/certifications";
import EducationList        from "../../../components/academic/academicRow";
import ProjectList          from "../../../components/projects/projects";
import ContactSection       from "../../../components/contact/contactSection";
import { COLORS }           from "../../../constants/theme";

// Section id (from site.json) -> component that renders it.
// Each component reads its own data from the store.
const SECTION_COMPONENTS = {
    about          : Introduction,
    experience     : ExperienceList,
    skills         : SkillsRow,
    certifications : CertificationList,
    education      : EducationList,
    projects       : ProjectList,
};

// Sections with "layout": "full-width" render below the two columns and own their markup.
export const FULL_WIDTH_COMPONENTS = {
    contact        : ContactSection,
};

export function FullWidthSection({ section }) {
    const Content = FULL_WIDTH_COMPONENTS[section.id];
    return Content ? <Content section={section} /> : null;
}

function Section({ section }) {
    const Content = SECTION_COMPONENTS[section.id];
    if (!Content) return null;

    return (
        <Box id={section.id} component="section" paddingTop={15}>
            <Typography
                variant     = "h5"
                marginY     = {1.1}
                fontWeight  = {500}
                color       = {COLORS.accent}
                sx          = {{ display: { sm: 'block', md: 'none' } }}
            >
                {section.label}
            </Typography>
            <Content />
        </Box>
    );
}

export default Section;
