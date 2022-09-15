import React from "react";
import { Nav, Col, Row, Container } from "react-bootstrap";
import * as Icon from "react-bootstrap-icons";
import '../css/resume.css'
function Resume() {
    return (
        <Container id='resume' className="resume-continer mt-1">
            <Row>
                <Col lg={3} md={6} sm={12}>
                    <Nav defaultActiveKey="#education" className="flex-column vertical-navigation">
                        <Nav.Link href="#education">Education</Nav.Link>
                        <Nav.Link href="#experience">Experience</Nav.Link>
                        <Nav.Link href="#skills">Skills</Nav.Link>
                        <Nav.Link href="#certification">Certifications</Nav.Link>
                    </Nav>
                </Col>
                <Col lg={9} md={6} sm={12} className="resume-details">
                    <div id="education">
                        <h2 className="heading">Education</h2>
                        <div className="flex-container">
                            <div className="flex-icon"><span><Icon.Mortarboard width={30} height={30} /></span></div>
                            <div className="flex-details">
                                <h6>2019 - 2022</h6>
                                <h3>Master Of Computer Application</h3>
                                <h6>Tezpur University, Napaam Assam India</h6>
                                <p> I have completed my Mastrers from department of CSE Tepur University, with computer application with an overall cgpa 7.09.</p>
                            </div>
                        </div>
                    </div>
                    <div id="experience"> Experience</div>
                    <div id="skills">Skills </div>
                    <div id="certification">Certifications </div>
                </Col>
            </Row>
        </Container>
    )
}

export default Resume;