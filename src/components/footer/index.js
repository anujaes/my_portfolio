import '../css/footer.css'
import React                    from "react";
import { Row, Container, Col }  from "react-bootstrap";
import * as Icon                from 'react-bootstrap-icons';
import potrait                  from '../../images/potrait.png'

function Footer(params) {
    const logo = {
        width: '20px',
        height: '20px'
    }
    return (
        <footer>
            <Container className="ps-5 pe-5">
                <Row>
                    <Col lg={8}>
                        <Row>
                            <Col lg={8} className="footer-col">
                                <h2 className="footer-heading">About</h2>
                                <p className="pe-3">
                                    I am an MCA graduate, open for immediate joining as a Full Stack Developer
                                    in an organization that helps me grow and learn. I look forward to joining a
                                    team that moves ahead together, supporting and motivating one another.
                                </p>
                            </Col>
                            {/* <Col lg={4} className="footer-col">
                                <h2 className="footer-heading ms-5">Links</h2>
                                <ul className="footer-link hover-effect ps-5">
                                    <li><a href="#home">Home </a></li>
                                    <li><a href="#about">About </a></li>
                                    <li><a href="#resume">Resume </a></li>
                                    <li><a href="#project">Project </a></li>
                                </ul>
                            </Col> */}
                            <Col lg={8} className="footer-col">
                                <h2 className="footer-heading">Other Profile</h2>
                                <ul className="footer-link hover-effect ps-0">
                                    <li><a href="https://github.com/anujaes">https://github.com/anujaes </a></li>
                                    <li><a href="https://www.hackerrank.com/ANUJ_MCMT">https://www.hackerrank.com/ANUJ_MCMT </a></li>
                                </ul>
                            </Col>
                            <Col lg={4} className="footer-col">
                                <h2 className="footer-heading ms-5"></h2>
                                <ul className="footer-link ps-5 pt-5 footer-social-icon">
                                    <li>
                                        <a target="_blank" rel="noreferrer" href="https://www.facebook.com/littleanuj/"><Icon.Facebook height={logo.height} width={logo.width} /></a>
                                    </li>
                                    <li>
                                        <a target="_blank" rel="noreferrer" href="https://www.instagram.com/anuj.aes/"><Icon.Instagram height={logo.height} width={logo.width} /></a>
                                    </li>
                                    <li>
                                        <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/anuj-aes"><Icon.Linkedin height={logo.height} width={logo.width} /></a>
                                    </li>
                                </ul>
                            </Col>
                            <Col lg={12} className="footer-col">
                                <p className="mt-5 pe-3">
                                    Disclaimer, this portfolio is designed using ReactJs, React-Bootstrap and React-Bootstrap-Icons.
                                    And this portfolio template is inspired from 'ColorLib'. Developed By Anuj Kumar Singh.
                                    <br></br><br></br>
                                    <em>{'Last updated on 04 November 2022'}</em>
                                </p>
                            </Col>
                        </Row>
                    </Col>
                    <Col className="footer-image" lg={4}>
                        <img src={potrait} alt="Anuj's potrait" />
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}

export default Footer;