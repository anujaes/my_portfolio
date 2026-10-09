import { useState }         from 'react';
import {
    AppBar,
    Box,
    Container,
    IconButton,
    Link,
    Menu,
    MenuItem,
    Toolbar,
    Typography }            from '@mui/material';
import MenuIcon             from '@mui/icons-material/Menu';
import { SaveAlt }          from '@mui/icons-material';
import { usePortfolioStore } from '../../store/usePortfolioStore';
import { asset }            from '../../utils/assets';
import { scrollToTop }      from '../../utils/scroll';
import './navbar.css';

function NavigationBar() {
    const { logo, resume, name } = usePortfolioStore((s) => s.profile);
    const navbarItems   = usePortfolioStore((s) => s.navbarItems);
    const sections      = usePortfolioStore((s) => s.sections);
    const activeSection = usePortfolioStore((s) => s.activeSection);
    const [menuAnchor, setMenuAnchor] = useState(null);

    const closeMenu = () => setMenuAnchor(null);

    const handleLogoClick = (event) => {
        event.preventDefault();
        scrollToTop();
    };

    return (
        <AppBar
            position = "static"
            sx       = {{
                            boxShadow       : 'none',
                            color           : "grey",
                            backgroundImage : "linear-gradient(147deg, #dee4ea 0%, #eff2f6 74%)",
                        }}
        >
            <Container maxWidth="lg">
                <Toolbar sx={{ color: "black" }}>
                    {/* logo with title, scrolls back to the top */}
                    <Link
                        href        = "#top"
                        onClick     = {handleLogoClick}
                        underline   = "none"
                        color       = "inherit"
                        aria-label  = {`${name}, back to top`}
                        sx          = {{ display: 'flex', alignItems: 'center', flexGrow: 2 }}
                    >
                        <img alt="" src={asset(logo)} style={{ width: 35 }} />
                        <Typography
                            noWrap
                            variant = "h6"
                            sx      = {{ ml: 1.5, fontWeight: 700, letterSpacing: '.1rem' }}
                        >
                            PORTFOLIO
                        </Typography>
                    </Link>

                    {/* desktop links */}
                    <Box component="nav" aria-label="Main" sx={{ flexGrow: 3, justifyContent: "flex-end", display: { xs: 'none', md: 'flex' } }}>
                        {navbarItems.map((item) => (
                            <Link
                                key             = {item.id}
                                href            = {`#${item.id}`}
                                className       = {`nav-btn ${activeSection === item.id ? 'active' : ''}`}
                                aria-current    = {activeSection === item.id ? 'true' : undefined}
                                sx              = {{ display: 'block', px: 2, color: "black", textDecoration: "none" }}
                            >
                                {item.label}
                            </Link>
                        ))}
                        <Link
                            href        = {asset(resume)}
                            target      = '_blank'
                            rel         = 'noreferrer'
                            className   = 'nav-btn'
                            aria-label  = 'Download résumé'
                            title       = 'Download résumé'
                            sx          = {{ display: 'flex', alignItems: 'center', pl: 2, color: "black" }}
                        >
                            <SaveAlt />
                        </Link>
                    </Box>

                    {/* mobile menu: lists every section, since the side nav is hidden */}
                    <Box sx={{ flexGrow: 3, justifyContent: "flex-end", display: { xs: 'flex', md: 'none' } }}>
                        <IconButton
                            size            = "large"
                            aria-label      = "Open navigation menu"
                            aria-controls   = "mobile-menu"
                            aria-haspopup   = "true"
                            aria-expanded   = {Boolean(menuAnchor)}
                            onClick         = {(event) => setMenuAnchor(event.currentTarget)}
                            color           = "inherit"
                        >
                            <MenuIcon />
                        </IconButton>
                        <Menu
                            id              = "mobile-menu"
                            anchorEl        = {menuAnchor}
                            open            = {Boolean(menuAnchor)}
                            onClose         = {closeMenu}
                            anchorOrigin    = {{ vertical: 'bottom', horizontal: 'left' }}
                            transformOrigin = {{ vertical: 'top', horizontal: 'left' }}
                        >
                            {sections.map((item) => (
                                <MenuItem
                                    key         = {item.id}
                                    component   = "a"
                                    href        = {`#${item.id}`}
                                    onClick     = {closeMenu}
                                    selected    = {activeSection === item.id}
                                    sx          = {{ fontSize: 'small', color: 'black' }}
                                >
                                    {item.label}
                                </MenuItem>
                            ))}
                            <MenuItem
                                component   = "a"
                                href        = {asset(resume)}
                                target      = "_blank"
                                rel         = "noreferrer"
                                onClick     = {closeMenu}
                                sx          = {{ fontSize: 'small', color: 'black' }}
                            >
                                Download résumé
                            </MenuItem>
                        </Menu>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
}

export default NavigationBar;
