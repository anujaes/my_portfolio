import * as React   from 'react';
import AppBar       from '@mui/material/AppBar';
import Box          from '@mui/material/Box';
import Toolbar      from '@mui/material/Toolbar';
import IconButton   from '@mui/material/IconButton';
import Typography   from '@mui/material/Typography';
import Menu         from '@mui/material/Menu';
import MenuIcon     from '@mui/icons-material/Menu';
import Container    from '@mui/material/Container';
import MenuItem     from '@mui/material/MenuItem';
import { Link }     from '@mui/material';
import logo         from '../../images/logo192.png'
import { SaveAlt }  from '@mui/icons-material';
import resumeLink   from '../../docs/resume.pdf'
import './navbar.css'

function NavigationBar() {
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    // const [transparent,setTransparent]  =  React.useState(false);

    const pages = [
        { name : 'About',       link : '#about' },
        { name : 'Resume',      link : '#experience' },
        { name : 'Project',     link : '#projects' },
    ];

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    // const changeNavbarColor = () => {
    //     if(window.scrollY>=100) {
    //         setTransparent(false);
    //     }else{
    //         setTransparent(true)
    //     }
    // }

    // window.addEventListener('scroll',changeNavbarColor)

    // React.useEffect( () => {
    //     changeNavbarColor();
    // })


    return (
        <AppBar position="sticky"
        // <AppBar position='static'
            sx={{
                // backgroundColor : transparent ? "transparent" : "transparent", // "#ffffff75",
                backgroundColor : "#31363F",
                boxShadow       : 'none',
                color           : "grey",
                // backgroundImage : "linear-gradient(147deg, #dee4ea 0%, #eff2f6 74%)"
            }}
        >
            <Container maxWidth="lg">
                <Toolbar sx={{color:"black"}} >
                    {/* logo with Ttile */}
                    {/* <Person4Icon sx={{ display: { xs: 'flex', md: 'flex' }, mr: 1 }} /> */}
                        {/* <img
                            alt     = "project"
                            src     = {logo}
                            style   = {{width:35}}
                        /> */}
                    <Box sx={{flexGrow:2 }}>
                        <Typography
                            noWrap
                            variant     = "h6"
                            component   = "a"
                            href        = "/"
                            sx          = {{
                                            ml              : 1.5,
                                            display         : { xs: 'flex', md: 'flex' },
                                            // fontFamily      : 'monospace',
                                            fontWeight      : 700,
                                            letterSpacing   : '.1rem',
                                            color           : '#76ABAE',
                                            textDecoration  : 'none',
                                        }}
                        >
                            PORTFOLIO
                        </Typography>
                    </Box>
                    {/* Menu items */}
                    <Box sx={{ flexGrow:3, justifyContent:"flex-end", display: { xs: 'none', md: 'flex', sm:"none" } }}>
                        {pages.map((page) => (
                            <Link
                                key     = {page.name}
                                sx      = {{ display: 'block', px:2, color:"#EEEEEE", textDecoration:"none" }}
                                href    = {page.link}
                                className='nav-btn'
                            >
                                {page.name}
                            </Link>
                        ))}
                        <Link
                                key         = "CV"
                                sx          = {{ display:'block',pl:2, color:"#EEEEEE", textDecoration:"none" }}
                                href        = {resumeLink}
                                className   = 'nav-btn'
                                target      = '_blank'
                                rel         = 'noreferrer'
                            >
                                <span style = {{display:'flex', alignItems:"center"}}>
                                    <SaveAlt/>
                                </span>
                            </Link>
                    </Box>
                    {/* menu list on small screen */}
                    <Box sx={{ flexGrow:3,justifyContent:"flex-end", display: { xs: 'flex', md: 'none', sm:"flex" } }}>
                        <IconButton
                            size            = "large"
                            aria-label      = "account of current user"
                            aria-controls   = "menu-appbar"
                            aria-haspopup   = "true"
                            onClick         = {handleOpenNavMenu}
                            color           = "inherit"
                        >
                            <MenuIcon />
                        </IconButton>
                        <Menu
                            // keepMounted
                            id              = "menu-appbar"
                            anchorEl        = {anchorElNav}
                            open            = {Boolean(anchorElNav)}
                            onClose         = {handleCloseNavMenu}
                            anchorOrigin    = {{ vertical : 'bottom', horizontal  : 'left' }}
                            transformOrigin = {{ vertical : 'top', horizontal  : 'left' }}
                            sx              = {{ display : { xs: 'block', md: 'none' } }}
                        >
                            {pages.map((page,index) => (
                                <Link key={'NBL'+index} href={page.link}>
                                <MenuItem key={page.name} sx={{color:"black"}}>
                                        <Typography fontSize={"small"} onClick={()=>{}} textAlign="center">{page.name}</Typography>
                                </MenuItem>
                                </Link>
                            ))}
                        </Menu>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
}
export default NavigationBar;