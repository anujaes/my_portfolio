import React                        from "react";
import { Col, Row, Container }      from "react-bootstrap";
import VerticalNav                  from "./molecules/verticalNav";
import Section                      from "./molecules/section";
import '../css/resume.css'

const educationData     = require('../../scripts/dataScripts/education.js')
const experienceData    = require('../../scripts/dataScripts/experience.js')

function Resume() {

    const payloadData = {
        academic    : educationData.educationRecords,
        experience  : experienceData.experienceRecords,
        skills      : experienceData.experienceRecords,
    }

    return (
        <Container id='resume' className="resume-container mt-1">
            <Row>
                <Col lg={3} md={6} sm={12}>
                    <VerticalNav />
                </Col>
                <Col lg={9} md={6} sm={12} className="resume-details">
                    
                    <Section
                        key             = {'edu' + Date.now()}
                        type            = 'academic'
                        payload         = {payloadData}
                    />
                    <Section
                        key             = {'exp'+Date.now()}
                        type            = 'experience'
                        payload         = {payloadData}
                    />
                    <Section
                        key             = {'ski'+Date.now()}
                        type            = 'skills'
                        payload         = {payloadData}
                    />
                </Col>
            </Row>
        </Container>
    )
}

export default Resume;