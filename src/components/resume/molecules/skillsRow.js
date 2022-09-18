import React from "react";
import { Col, Row } from "react-bootstrap";
import * as Icon    from "react-bootstrap-icons";
import '../../css/skills.css';
import { CircularProgressbar,buildStyles } from 'react-circular-progressbar';
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
            <Col lg={3} md={6} sm={12} className="card-container">
                <div className="p-3">
                    <h5 className="mb-2">HTML</h5>
                    <div>
                        <CircularProgressbar 
                            value       = {percentage}
                            text        = {`${percentage}%`}
                            strokeWidth = {4}
                            styles      = {circularStyles}
                        />
                    </div>
                    <Icon.StarFill className="ratings" /><Icon.StarFill className="ratings" /><Icon.StarFill className="ratings" /><Icon.StarFill className="ratings" /><Icon.StarHalf className="ratings" />
                </div>
            </Col>
            <Col lg={3} md={6} sm={12} className="card-container">
                <div className="p-3">
                    <h5 className="mb-2">HTML</h5>
                    <div>
                        <CircularProgressbar 
                            value       = {percentage}
                            text        = {`${percentage}%`}
                            strokeWidth = {4}
                            styles      = {circularStyles}
                        />
                    </div>
                    <Icon.StarFill className="ratings" /><Icon.StarFill className="ratings" /><Icon.StarFill className="ratings" /><Icon.StarFill className="ratings" /><Icon.StarHalf className="ratings" />
                </div>
            </Col>
            <Col lg={3} md={6} sm={12} className="card-container">
                <div className="p-3">
                    <h5 className="mb-2">HTML</h5>
                    <div>
                        <CircularProgressbar 
                            value       = {percentage}
                            text        = {`${percentage}%`}
                            strokeWidth = {4}
                            styles      = {circularStyles}
                        />
                    </div>
                    <Icon.StarFill className="ratings" /><Icon.StarFill className="ratings" /><Icon.StarFill className="ratings" /><Icon.StarFill className="ratings" /><Icon.StarHalf className="ratings" />
                </div>
            </Col>
            <Col lg={3} md={6} sm={12} className="card-container">
                <div className="p-3">
                    <h5 className="mb-2">HTML</h5>
                    <div>
                        <CircularProgressbar 
                            value       = {percentage}
                            text        = {`${percentage}%`}
                            strokeWidth = {4}
                            styles      = {circularStyles}
                        />
                    </div>
                    <Icon.StarFill className="ratings" /><Icon.StarFill className="ratings" /><Icon.StarFill className="ratings" /><Icon.StarFill className="ratings" /><Icon.StarHalf className="ratings" />
                </div>
            </Col>
            <Col lg={3} md={6} sm={12} className="card-container">
                <div className="p-3">
                    <h5 className="mb-2">HTML</h5>
                    <div>
                        <CircularProgressbar 
                            value       = {percentage}
                            text        = {`${percentage}%`}
                            strokeWidth = {4}
                            styles      = {circularStyles}
                        />
                    </div>
                    <Icon.StarFill className="ratings" /><Icon.StarFill className="ratings" /><Icon.StarFill className="ratings" /><Icon.StarFill className="ratings" /><Icon.StarHalf className="ratings" />
                </div>
            </Col>
        </Row>
    )
}

export default SkillsRow;