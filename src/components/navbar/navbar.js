import { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import '../css/navbar.css'

function NavigationBar() {

    const [transparent,setTransparent] =  useState(true)

    const changeNavbarColor = () => {
        if(window.scrollY>=100) {
            setTransparent(false);
        }else{
            setTransparent(true)
        }
    }

    window.addEventListener('scroll',changeNavbarColor)

    useEffect( () => {
        changeNavbarColor();
    })

    return (
        <div>
        <Navbar
            bg          = {transparent?'':'white'}
            variant     = {transparent?'':'light'}
            className   = {transparent?'fixed-top':'fixed-top card-effect'}
            expand      = "lg"
        >
            <Container>
                <Navbar.Brand href="#home">
                    <span className='logo'>A</span><span className='after'>nuj</span>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto me-5">
                        <Nav.Link className='px-4 pb-1 nav-btn' href="#home">Home</Nav.Link>
                        <Nav.Link className='px-4 pb-1 nav-btn' href="#about">About</Nav.Link>
                        <Nav.Link className='px-4 pb-1 nav-btn' href="#resume">Resume</Nav.Link>
                        <Nav.Link className='px-4 pb-1 nav-btn' href="#projects">Project</Nav.Link>
                        <Nav.Link className='px-4 pb-1 nav-btn' href="#contact">Contact</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
        </div>
    );
}

export default NavigationBar;