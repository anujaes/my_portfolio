import React                    from "react";
import { Row, Container }       from "react-bootstrap";
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
        </Container>
    )
}

export default Projects;