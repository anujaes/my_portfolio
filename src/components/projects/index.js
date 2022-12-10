import React                    from "react";
import { Row, Container, Button }       from "react-bootstrap";
import ProjectCard              from "./molucules/projectCard";
import { projectRecords }       from "../../scripts/dataScripts/projects";
import '../css/projects.css'

function Projects() {

    // getting images from
    function importAll(r) {
        return r.keys().map(r);
    }
    const images = importAll(require.context('../../images/project/', false, /\.(png|jpe?g|svg)$/));

    return (
        <Container fluid={true} id='projects' className="projects-container">
            <Row>
                <h1 className='projects-heading mt-2 mb-5'>My Projects</h1>
                {
                    projectRecords.map ( (item,index) => (
                        <ProjectCard
                            key             = {index+"proCard"}
                            name            = {item.name}
                            duration        = {item.duration}
                            technologies    = {item.technologies}
                            summary         = {item.summary}
                            link            = {item.link}
                            image           = {images[index]}
                        />
                    ))
                }
            </Row>
            <Row className="activity-panel">
                {/* <div>
                    <h1>I'm open To immediate join!</h1>
                    <p>I am willing to join an organization which offers me opportunities to learn and innovate in the cutting edges - technologies via utilizing my knowledge & passion and help me grow in both organizational and personal perspective.</p>
                    <Button style={{borderRadius:"100px",width:"120px",height:"50px",backgroundColor:"#3e64ff",fontWeight:"bold"}}  href="#contact"  >HIRE ME</Button>
                </div> */}
                <div>
                    <h1>I'm open to learn new technologies!</h1>
                    <p>I am willing to join an organization which offers me opportunities to learn and innovate in the cutting edges - technologies via utilizing my knowledge & passion and help me grow in both organizational and personal perspective.</p>
                </div>
            </Row>
        </Container>
    )
}

export default Projects;