import React                        from "react";
import { Col, Row, Container }      from "react-bootstrap";
import VerticalNav                  from "./molecules/verticalNav";
import Section                      from "./molecules/section";
import { educationRecords }         from "../../scripts/dataScripts/education.js";
import { experienceRecords }        from "../../scripts/dataScripts/experience.js";
import { skillRecords }              from "../../scripts/dataScripts/skillRatings";
import '../css/resume.css'

function Resume() {

    const payloadData = {
        academic    : educationRecords,
        experience  : experienceRecords,
        skills      : [skillRecords]
    }

    return (
        <Container id='resume' className="resume-container mt-1">
            <Row>
                <Col lg={3} md={6} sm={12}>
                    {/* side vertical navigation bar */}
                    <VerticalNav />
                </Col>
                <Col lg={9} md={6} sm={12} className="resume-details">
                    {
                        Object.keys(payloadData).map((dataType) => (
                            <Section
                                key             = {dataType + Date.now()}
                                type            = {dataType}
                                payload         = {payloadData[dataType]}
                            />
                        ) )
                    }
                </Col>
            </Row>
        </Container>
    )
}

export default Resume;