import React    from "react";
import { Nav}   from "react-bootstrap";
import          '../../css/verticalNav.css'

function VerticalNav() {

    return (
        <Nav defaultActiveKey="#academic" className="flex-column vertical-navigation mb-5">
            <Nav.Link href="#academic" >Education</Nav.Link>
            <Nav.Link href="#experience" >Experience</Nav.Link>
            <Nav.Link href="#skills" >Skills</Nav.Link>
            <Nav.Link href="#certifications" >Certifications</Nav.Link>
        </Nav>
    )
}

export default VerticalNav;