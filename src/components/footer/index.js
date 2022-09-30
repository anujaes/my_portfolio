import React from "react";
import { Row, Container,Col }       from "react-bootstrap";
import * as Icon                    from 'react-bootstrap-icons';
import '../css/footer.css'

function Footer(params) {
    const logo = {
        width:'20px',
        height:'20px'
    }
    return (
        <footer>
            <Container className="ps-5 pe-5">
                <Row>
                    <Col className="footer-col" lg={3} md={6} sm={12}>
                        <h2 className="footer-heading">About</h2>
                        <p>
                        I am an MCA graduate, open for immediate joining as a Full Stack Developer
                        in an organization that helps me grow and learn. I look forward to joining a
                        team that moves ahead together, supporting and motivating one another.
                        </p>
                    </Col>
                    <Col className="footer-col" lg={3} md={6} sm={12}>
                        <h2 className="footer-heading" style={{marginLeft:"32px"}}>Links</h2>
                        <ul className="footer-link">
                            <li><a href="#home">Go to - Home </a></li>
                            <li><a href="#about">Go to - About </a></li>
                            <li><a href="#resume">Go to - Resume </a></li>
                            <li><a href="#contact">Go to - Contact </a></li>
                        </ul>
                    </Col>
                    <Col className="footer-col" lg={3} md={6} sm={12}>
                        <h2 className="footer-heading" style={{marginLeft:"32px"}}>Social</h2>
                        <ul className="footer-link">
                            <li>
                                <div className="footer-social">
                                    <a target="_blank" rel="noreferrer" href="https://www.facebook.com/littleanuj/"><Icon.Facebook  height={logo.height} width={logo.width}/></a>
                                </div>
                            </li>
                            <li>
                                <div className="footer-social">
                                    <a target="_blank" rel="noreferrer" href="https://www.instagram.com/anuj.aes/"><Icon.Instagram height={logo.height} width={logo.width} /></a>
                                </div>
                            </li>
                            <li>
                                <div className="footer-social">
                                    <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/anuj-aes"><Icon.Linkedin  height={logo.height} width={logo.width}/></a>
                                </div>
                            </li>
                        </ul>
                    </Col>
                    <Col className="footer-col" lg={3} md={6} sm={12}>
                        <h2 className="footer-heading">Disclaimer</h2>
                        <p>
                            This Portfolio is designed using ReactJs, React-Bootstrap and React-Bootstrap-Icons.
                            <br></br>
                            And this portfolio template is inspired from 'ColorLib'.
                        </p>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}

export default Footer;