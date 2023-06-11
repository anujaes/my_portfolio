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
import Person4Icon  from '@mui/icons-material/Person4';
import { Link }     from '@mui/material';

import '../css/navbar.css'

function NavigationBar() {
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [transparent,setTransparent]  =  React.useState(false);

    const pages = [
        { name : 'Home',     link : '#home' },
        { name : 'About',    link : '#about' },
        { name : 'Resume',   link : '#resume' },
        { name : 'Project',  link : '#projects' },
        { name : 'Contact',  link : '#contact' }
    ];

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const changeNavbarColor = () => {
        if(window.scrollY>=100) {
            setTransparent(false);
        }else{
            setTransparent(true)
        }
    }

    window.addEventListener('scroll',changeNavbarColor)

    React.useEffect( () => {
        changeNavbarColor();
    })


    return (
        <AppBar position="sticky"
            sx={{
                backgroundColor : transparent ? "transparent" : "white",
                boxShadow       : transparent ? "none" : 'null',
                color           : "grey",
            }}
        >
            <Container maxWidth="xl">
                <Toolbar sx={{color:"black"}} >
                    {/* logo with Ttile */}
                    <Person4Icon sx={{ display: { xs: 'flex', md: 'flex' }, mr: 1 }} />
                    <Box sx={{flexGrow:2 }}>
                        <Typography
                            noWrap
                            variant     = "h6"
                            component   = "a"
                            href        = "/"
                            sx          = {{
                                            mr              : 2,
                                            display         : { xs: 'flex', md: 'flex' },
                                            // fontFamily      : 'monospace',
                                            fontWeight      : 700,
                                            letterSpacing   : '.1rem',
                                            color           : 'inherit',
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
                                sx      = {{ my: 2, display: 'block', px:2, color:"black", textDecoration:"none" }}
                                href    = {page.link}
                                className='nav-btn'
                            >
                                {page.name}
                            </Link>
                        ))}
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
                                        <Typography onClick={()=>{}} textAlign="center">{page.name}</Typography>
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

// import { useEffect, useState } from 'react';
// import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
// import '../css/navbar.css'

// function NavigationBar() {

//     const [transparent,setTransparent] =  useState(true)

//     const changeNavbarColor = () => {
//         if(window.scrollY>=100) {
//             setTransparent(false);
//         }else{
//             setTransparent(true)
//         }
//     }

//     window.addEventListener('scroll',changeNavbarColor)

//     useEffect( () => {
//         changeNavbarColor();
//     })

//     return (
//         <div>
//         <Navbar
//             bg          = {transparent?'':'white'}
//             variant     = {transparent?'':'light'}
//             className   = {transparent?'fixed-top':'fixed-top card-effect'}
//             expand      = "lg"
//         >
//             <Container>
//                 <Navbar.Brand href="#home">
//                     {/* <span className='logo'>A</span><span className='after'>nuj</span> */}
//                     <span className='logo'>N</span><span className='after'>ame</span>
//                 </Navbar.Brand>
//                 <Navbar.Toggle aria-controls="basic-navbar-nav" />
//                 <Navbar.Collapse id="basic-navbar-nav">
//                     <Nav className="ms-auto me-5">
//                         <Nav.Link className='px-4 pb-1 nav-btn' href="#home">    Home</Nav.Link>
//                         <Nav.Link className='px-4 pb-1 nav-btn' href="#about">   About</Nav.Link>
//                         <Nav.Link className='px-4 pb-1 nav-btn' href="#resume">  Resume</Nav.Link>
//                         <Nav.Link className='px-4 pb-1 nav-btn' href="#projects">Project</Nav.Link>
//                         <Nav.Link className='px-4 pb-1 nav-btn' href="#contact"> Contact</Nav.Link>
//                     </Nav>
//                 </Navbar.Collapse>
//             </Container>
//         </Navbar>
//         </div>
//     );
// }

// export default NavigationBar;