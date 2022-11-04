import React                from 'react';
import * as Icon            from 'react-bootstrap-icons';
import { Col, Row }         from "react-bootstrap";
import TypeWriterEffect     from 'react-typewriter-effect';

import '../css/home.css'

function Home(){
    return(
        <div id='home' className="home-panel">
            <Row className="m-0">
                <Col className="sec-1"></Col>
                <Col className="sec-2"></Col>
                <div className="banner">
                    <div className="intro">
                        <p>Hey! I am</p>
                        <h1>Anuj Kumar Singh</h1>
                        <TypeWriterEffect
                                textStyle={{
                                display:"inline"
                                }}
                                scrollArea      = {document.querySelector('#typing-word')}
                                startDelay      = {1000}
                                cursorColor     = "#3F3D56"
                                multiTextLoop   = {true}
                                multiText       = {[
                                                        '<Javascript /> developer.',
                                                        '<React /> developer.',
                                                        '<NodeJS /> developer.',
                                                        '<Full-Stack /> developer.',
                                                    ]}
                                multiTextDelay  = {1000}
                                typeSpeed       = {150}
                            />
                        <a href="#about">
                        <div className="indicator">
                            <Icon.ArrowDown />
                        </div>
                        </a>
                    </div>
                </div>
            </Row>
        </div>
    )
}

export default Home;