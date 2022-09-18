import React from "react";
import '../css/about.css';
import { Button, Col, Container, Row } from "react-bootstrap";
import * as Icon from 'react-bootstrap-icons';

import potrait from '../../images/potrait.png'
import resume from '../../docs/resume.pdf'
function About(){

    return (
        <div id="about" className="about-container">
            <Container>
                <Row>
                    <Col lg={6} md={12} sm={12} className="potrait-container">
                        <img src={potrait} alt="Anuj's potrait" />
                    </Col>
                    <Col lg={6} md={12} sm={12} className="details-container">
                        <div className="m-5">
                            <h1 className="about-heading">About Me</h1>
                            <p>I am willing to join an organization which offers me opportunities to learn
                                and innovate in the cutting edges - technologies via utilizing my
                                knowledge & passion and help me grow in both organizational and
                                personal perspective.
                            </p>
                            <ul className="info">
                                <li>
                                    <span>Name:</span>
                                    <span>Anuj Kumar Singh</span>
                                </li>
                                <li>
                                    <span>Date Of Birth:</span>
                                    <span>January 13, 1996</span>
                                </li>
                                <li>
                                    <span>Address:</span>
                                    <span>Varanasi Uttar Pradesh India</span>
                                </li>
                                <li>
                                    <span>Zip code:</span>
                                    <span>221002</span>
                                </li>
                                <li>
                                    <span>Email:</span>
                                    <span>anuj.aes@gmail.com</span>
                                </li>
                                <li>
                                    <span>Phone:</span>
                                    <span>+91 9307565775</span>
                                </li>
                            </ul>

                            <span className="summary">6 months of <span className="emphesize"> internship</span> experience.</span>
                            <br></br>
                            <Button download="Anuj's Resume" target='_blank' variant="primary" href={resume}  className="btn-cv" size="lg">
                                <Icon.Download className="me-2" />Resume
                            </Button>
                        </div>
                    </Col>
                </Row>
            </Container>
            <Container fluid={false} className='mt-2'>
                <div className="flexBox">
                    <div className="flexItem"><Icon.Windows /></div>
                    <div className="flexItem"><Icon.CodeSlash /></div>
                    <div className="flexItem"><Icon.Google /></div>
                    <div className="flexItem"><Icon.Github /></div>
                    <div className="flexItem"><Icon.Linkedin /></div>
                    <div className="flexItem"><Icon.BootstrapFill /></div>
                    <div className="flexItem"><Icon.TerminalFill /></div>
                </div>
            </Container>
        </div>
    )
}

export default About;