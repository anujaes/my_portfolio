import React        from "react";
import * as Icon    from "react-bootstrap-icons";

function CorporateRow(props) {

    return (

        <div className="flex-container">
            <div className="flex-icon"><span><Icon.Briefcase width={30} height={30} /></span></div>
            <div className="flex-details">
                <h6>{props.year}</h6>
                <h3>{props.designation}</h3>
                <h6>{props.organization}</h6>
                <p> {props.summary}</p>
            </div>
        </div>
    )
}

export default CorporateRow;