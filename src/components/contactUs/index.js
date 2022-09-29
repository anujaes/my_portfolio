import React                    from "react";
import { Row, Container, Col }  from "react-bootstrap";
import * as Icon                from "react-bootstrap-icons";
import '../css/contactUs.css'

function ContactUs() {
    const size = {
        height:"30px",
        width:"30px",
    }
    return (
        <Container id='contact' className="contact-container">
            <Row>
                <h1 className='contact-heading mt-2 mb-4'>Contact Me</h1>
                <h3 className="sub-heading">I would love to here from you!</h3>
                <p className="log mb-3 mt-2">You can track me through the following!</p>
                <Col lg={3} md={6} sm={12} className="square">
                    <div>
                        <div><Icon.Building width={size.width} height={size.height} /></div>
                        <h4>Address</h4>
                        <p>SA-4/7 Daulatpur<br></br>Varanasi UP India ZIP - 221002</p>
                    </div>
                </Col>
                <Col lg={3} md={6} sm={12} className="square">
                    <div>
                        <div><Icon.TelephoneFill width={size.width} height={size.height} /></div>
                        <h4>Contact</h4>
                        <p>+91 9307565775</p>
                    </div>
                </Col>
                <Col lg={3} md={6} sm={12} className="square">
                    <div>
                        <div><Icon.EnvelopeFill width={size.width} height={size.height} /></div>
                        <h4>Mail</h4>
                        <p> anuj.aes@gmail.com </p>
                    </div>
                </Col>
                <Col lg={3} md={6} sm={12} className="square">
                    <div>
                        <div><Icon.Linkedin width={size.width} height={size.height} /></div>
                        <h4>Linkedin</h4>
                        <a href="https://www.linkedin.com/in/anuj-aes" target="_blank" rel="noreferrer">
                            <p>www.linkedin.com/in/anuj-aes</p>
                        </a>
                    </div>
                </Col>
            </Row>
        </Container>
    )
}

export default ContactUs;