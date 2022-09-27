import React, { useEffect } from "react";
import { Nav} from "react-bootstrap";
import * as Icon    from "react-bootstrap-icons";
import '../../css/verticalNav.css'

function VerticalNav() {

    return (
        <Nav defaultActiveKey="#academic" className="flex-column vertical-navigation">
            <Nav.Link href="#academic" >Education</Nav.Link>
            <Nav.Link href="#experience" >Experience</Nav.Link>
            <Nav.Link href="#skills" >Skills</Nav.Link>
            <Nav.Link href="#certifications" >Certifications</Nav.Link>
        </Nav>
    )
}

export default VerticalNav;