import React                                from "react";
import { Col, ProgressBar, Row }            from "react-bootstrap";
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
// import { skillBar,topSkillRatings } from "../../../scripts/dataScripts/skillRatings";
import '../../css/skills.css';
import 'react-circular-progressbar/dist/styles.css';

function SkillsRow(props) {

    const {otherSkills, topSkills} = props;

    const circularStyles = buildStyles (
        {
            strokeLinecap   : "butt",
            pathColor       : "#3e64ff",
            textColor       : "black",
            textSize        : "1rem",
        }
    )

    return (
        <Row>
            {
            topSkills.map ( (item,index) => (
                <Col key={'ts'+index} lg={3} md={6} sm={12} className="card-container">
                    <div className="p-3">
                        <h5 className="mb-1">{item.skill}</h5>
                        <div>
                                <CircularProgressbar
                                    value       = {item.percentage}
                                    text        = {`${item.percentage}%`}
                                    strokeWidth = {4}
                                    styles      = {circularStyles}
                                />
                        </div>
                    </div>
                </Col>
            ))
            }
            <Row>
                {
                    otherSkills.map( (item,index) => (
                        <Col key={'os'+index} lg={6} md={6} sm={12} className="p-3">
                            <div className="skill-flex-container">
                            <div><h5>{item.skill}</h5></div>
                            <div><h5>{`${item.percentage}%`}</h5></div>
                            </div>
                            <ProgressBar  animated now={item.percentage} />
                        </Col>
                    ))
                }
            </Row>
        </Row>
    )
}

export default SkillsRow;