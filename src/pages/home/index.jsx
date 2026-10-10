import { Container, Grid, Typography, Box } from "@mui/material";
import { motion }               from "motion/react";
import VerticalNav              from "../../components/navbar/verticalNav";
import SocialLinks              from "../../components/socialLinks/socialLinks";
import ProfilePicture           from "../../components/profilePicture/profilePicture";
import PortraitDock             from "../../components/profilePicture/portraitDock";
import Section, { FullWidthSection } from "./molecules/section";
import TypewriterSentence       from "../../components/common/TypewriterSentence";
import { usePortfolioStore }    from "../../store/usePortfolioStore";
import { SLIDE_IN, TITLE_SEPARATOR } from "../../constants/animation";
import { SCROLL_CONTAINER_ID, HERO_NAME_ID, APPBAR_HEIGHT } from "../../constants/layout";
import { usePortraitSwap }      from "../../hooks/usePortraitSwap";
import { usePortraitScrollProgress } from "../../hooks/usePortraitScrollProgress";
import { useScrollSpy }         from "../../hooks/useScrollSpy";
import { useScrollToHash }      from "../../hooks/useScrollToHash";
import '../../css/home.css';

function Home() {
    const profile  = usePortfolioStore((s) => s.profile);
    const columnSections    = usePortfolioStore((s) => s.columnSections);
    const fullWidthSections = usePortfolioStore((s) => s.fullWidthSections);
    const swap     = usePortraitSwap();
    usePortraitScrollProgress(swap);
    useScrollSpy();
    useScrollToHash();

    return (
        // the whole page area scrolls; the two columns are one row inside it so the
        // sticky left column stops where the full-width sections begin
        <main className="about-container" id={SCROLL_CONTAINER_ID}>
            <Container maxWidth='lg'>
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
                        sx              = {{
                                            height     : {
                                                            xs: `calc(100dvh - ${APPBAR_HEIGHT.xs}px)`,
                                                            sm: `calc(100dvh - ${APPBAR_HEIGHT.sm}px)`,
                                                        },
                                            alignItems : { xs: "center", sm: "center", md: "flex-start" },
                                            textAlign  : { xs: "center", sm: "center", md: "left" },
                                            position   : { xs: "static !important", sm: "static !important", md: "sticky !important" },
                                            top        : "0 !important",
                                        }}
                    >
                        <ProfilePicture display={{ xs: 'flex', sm: 'flex', md: 'none' }} />
                        {/* portrait pops out above the name once the right-side one has shrunk away */}
                        {swap && <PortraitDock />}
                        <motion.div {...SLIDE_IN}>
                            <Typography id={HERO_NAME_ID} variant="h3" fontWeight={700} marginTop={2}>
                                {profile.name}
                            </Typography>
                            <Typography variant="h6" fontWeight={500}>
                                {profile.title}
                            </Typography>
                            {/* separator that draws itself in, filling the gap before the intro */}
                            <Box
                                component   = {motion.div}
                                initial     = {{ scaleX: 0 }}
                                animate     = {{ scaleX: 1 }}
                                transition  = {TITLE_SEPARATOR.transition}
                                aria-hidden = "true"
                                width       = {TITLE_SEPARATOR.width}
                                height      = {TITLE_SEPARATOR.height}
                                bgcolor     = "black"
                                marginY     = {1.5}
                                marginX     = {{ xs: 'auto', md: 0 }}
                                sx          = {{ transformOrigin: { xs: 'center', md: 'left' } }}
                            />
                            {/* inline typewriter that reserves its tallest height, so the menu below doesn't jump */}
                            <Typography fontWeight={500} maxWidth={350} fontSize={15}>
                                <TypewriterSentence prefix={profile.intro} phrases={profile.typewriter} />
                            </Typography>
                        </motion.div>
                        <VerticalNav />
                        <SocialLinks />
                    </Grid>
                    <Grid item xlg={6} lg={6} md={6} sm={12} xs={12} id="details-body">
                        <Box paddingBottom={10}>
                            {columnSections.map((section) => (
                                <Section key={section.id} section={section} />
                            ))}
                        </Box>
                    </Grid>
                </Grid>
            </Container>
            {fullWidthSections.map((section) => (
                <FullWidthSection key={section.id} section={section} />
            ))}
        </main>
    );
}

export default Home;
