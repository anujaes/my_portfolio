import { Box, Container, Grid, Typography } from "@mui/material";
import ContactForm              from "./contactForm";
import TechPanel                from "./techPanel";
import RichText                 from "../common/RichText";
import { usePortfolioStore }    from "../../store/usePortfolioStore";
import './contact.css';

// Full-width band at the end of the page: form on the left, tech panel on the right.
function ContactSection({ section }) {
    const footer = usePortfolioStore((s) => s.site.footer);
    const name   = usePortfolioStore((s) => s.profile.name);

    return (
        <Box component="section" id={section.id} aria-label={section.label} className="contact-band" paddingTop={{ xs: 8, md: 12 }} paddingBottom={4}>
            <Container maxWidth="lg">
                <Grid container borderRadius={3} overflow="hidden" boxShadow="rgba(0, 0, 0, 0.08) 0px 10px 30px">
                    <Grid item xs={12} md={7}>
                        <ContactForm />
                    </Grid>
                    <Grid item xs={12} md={5}>
                        <TechPanel />
                    </Grid>
                </Grid>

                <Box
                    marginTop       = {8}
                    paddingTop      = {3}
                    borderTop       = "1px solid #dee4ea"
                    display         = "flex"
                    flexDirection   = {{ xs: 'column', md: 'row' }}
                    justifyContent  = "space-between"
                    gap             = {1.5}
                >
                    <Typography fontSize={14} maxWidth={640}><RichText text={footer} /></Typography>
                    <Typography fontSize={14} color="text.secondary" whiteSpace="nowrap">
                        © {new Date().getFullYear()} {name}
                    </Typography>
                </Box>
            </Container>
        </Box>
    );
}

export default ContactSection;
