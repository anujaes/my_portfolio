import React        from "react";
import * as Icon    from "react-bootstrap-icons";

function AcademicRow(props) {

    return (

        <div className="flex-container">
            <div className="flex-icon"><span><Icon.Mortarboard width={30} height={30} /></span></div>
            <div className="flex-details">
                <h6>{props.year}</h6>
                <h3>{props.course}</h3>
                <h6>{props.institute}</h6>
                <p> {props.summary}</p>
            </div>
        </div>
    )
}

export default AcademicRow;