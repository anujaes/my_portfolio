import { Container, Grid, Typography, Box } from "@mui/material";
import TypeWriterEffect         from 'react-typewriter-effect';
import { motion }               from "motion/react";
import VerticalNav              from "../../components/navbar/verticalNav";
import SocialLinks              from "../../components/socialLinks/socialLinks";
import ProfilePicture           from "../../components/profilePicture/profilePicture";
import FlyingPortrait           from "../../components/profilePicture/flyingPortrait";
import PortraitDock             from "../../components/profilePicture/portraitDock";
import RichText                 from "../../components/common/RichText";
import Section                  from "./molecules/section";
import { usePortfolioStore }    from "../../store/usePortfolioStore";
import { SLIDE_IN }             from "../../constants/animation";
import { COLORS }               from "../../constants/theme";
import { SCROLL_CONTAINER_ID, HERO_NAME_ID } from "../../constants/layout";
import { usePortraitFlight }    from "../../hooks/usePortraitFlight";
import { useScrollSpy }         from "../../hooks/useScrollSpy";
import { useScrollToHash }      from "../../hooks/useScrollToHash";
import '../../css/home.css';

function Home() {
    const profile  = usePortfolioStore((s) => s.profile);
    const sections = usePortfolioStore((s) => s.sections);
    const footer   = usePortfolioStore((s) => s.site.footer);
    const flight   = usePortraitFlight();
    useScrollSpy();
    useScrollToHash();

    return (
        <main className="about-container">
            <Container maxWidth='lg' sx={{ height: '100%' }}>
                <Grid container maxWidth='lg' className="details-container" id={SCROLL_CONTAINER_ID}>
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
                        height          = "100%"
                        sx              = {{
                                            alignItems : { xs: "center", sm: "center", md: "flex-start" },
                                            textAlign  : { xs: "center", sm: "center", md: "left" },
                                            position   : { xs: "static !important", sm: "static !important", md: "sticky !important" },
                                            top        : "0 !important",
                                        }}
                    >
                        <ProfilePicture display={{ xs: 'flex', sm: 'flex', md: 'none' }} />
                        {/* space above the name that opens up as the portrait lands */}
                        {flight && <PortraitDock />}
                        <motion.div {...SLIDE_IN}>
                            <Typography id={HERO_NAME_ID} variant="h3" fontWeight={700} marginTop={2}>
                                {profile.name}
                            </Typography>
                            <Typography variant="h6" fontWeight={500}>
                                {profile.title}
                            </Typography>
                            <Typography fontWeight={500} maxWidth={350} marginTop={3} display={"flex"} fontSize={15}>
                                {profile.intro}
                            </Typography>
                            <TypeWriterEffect
                                textStyle       = {{ fontSize: 15, fontWeight: 500, fontFamily: 'inherit', color: COLORS.accent }}
                                startDelay      = {1000}
                                cursorColor     = {COLORS.accent}
                                multiTextLoop   = {true}
                                multiText       = {profile.typewriter}
                                multiTextDelay  = {1000}
                                typeSpeed       = {150}
                            />
                        </motion.div>
                        <VerticalNav />
                        <SocialLinks />
                    </Grid>
                    <Grid item xlg={6} lg={6} md={6} sm={12} xs={12} id="details-body">
                        <Box>
                            {sections.map((section) => (
                                <Section key={section.id} section={section} />
                            ))}
                        </Box>
                        <Box marginBottom={10} className="row-section">
                            <Typography fontSize={15}>
                                <RichText text={footer} />
                            </Typography>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
            {flight && <FlyingPortrait />}
        </main>
    );
}

export default Home;
