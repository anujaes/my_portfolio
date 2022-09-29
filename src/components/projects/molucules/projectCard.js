import React                from "react";
import { Col,Card }         from "react-bootstrap";
import * as Icon            from "react-bootstrap-icons";

function ProjectCard(props) {

    const {name, duration, technologies, summary, link,image} = props;

    return (
        <Col lg={4} md={6} sm={12} className="pt-3" >
            <Card>
            <a className="img-link" target="noreferrer" href={link||'#'}>
                <Card.Img  variant="top" src={image} />
                    <div className="img-hover">
                        <Icon.Link45deg height={50} width={50}/>
                        <h2 className="mt-2">click to visit!</h2>
                    </div>
                </a>
                <Card.Body style={{textAlign:"center"}}>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text> {duration} </Card.Text>
                    <Card.Text> {summary} </Card.Text>
                    <Card.Text> {technologies} </Card.Text>
                </Card.Body>
            </Card>
        </Col>
    )
}

export default ProjectCard;