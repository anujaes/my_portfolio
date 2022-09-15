import React from 'react';
import * as Icon from 'react-bootstrap-icons';
import { Col, Row } from "react-bootstrap";
import '../css/home.css'

function Home(){
    return(
        <div id='home' className="home-panel">
            <Row className="m-0">
                <Col className="sec-1"></Col>
                <Col className="sec-2"></Col>
                <div className="banner">
                    <div className="intro">
                        <p>Hey! I AM</p>
                        <h1>Anuj Kumar Singh</h1>
                        <h3>I'm a web Developer</h3>
                        <div className="indicator">
                            <Icon.ArrowDown />
                        </div>
                    </div>
                </div>
            </Row>
        </div>
    )
}

export default Home;