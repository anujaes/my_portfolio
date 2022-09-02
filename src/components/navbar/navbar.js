import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import '../css/navbar.css'

function NavigationBar() {
    return (
        <Navbar className='fixed-top' expand="lg">
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
                        <Nav.Link className='px-4 pb-1 nav-btn' href="#services">Services</Nav.Link>
                        <Nav.Link className='px-4 pb-1 nav-btn' href="#project">Project</Nav.Link>
                        <Nav.Link className='px-4 pb-1 nav-btn' href="#contact">Contact</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavigationBar;