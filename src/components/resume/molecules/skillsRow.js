import React                    from "react";
import { Col, ProgressBar, Row }             from "react-bootstrap";
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faCoffee,faRainbow } from '@fortawesome/free-solid-svg-icons'
import { skillBar,topSkillRatings } from "../../../scripts/dataScripts/skillRatings";
import '../../css/skills.css';
import 'react-circular-progressbar/dist/styles.css';

function SkillsRow(props) {

    const percentage = 90;
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
            topSkillRatings.map ( (item) => (
                <Col lg={3} md={6} sm={12} className="card-container">
                
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
                    skillBar.map( (item) => (
                        <Col lg={6} md={6} sm={12} className="p-3">
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