import React        from "react";
import * as Icon    from "react-bootstrap-icons";

function CertificationRow(props) {

    return (

        <div className="flex-container">
            <div className="flex-icon"><span><Icon.Award width={30} height={30} /></span></div>
            <div className="flex-details">
                <h6>{props.date}&nbsp;&nbsp;<a target="_blank" rel="noreferrer" href={props.previewLink}><Icon.Link45deg className="link-icon" width={20} height={20} /></a></h6>
                <h3>{props.certificateName}</h3>
                <h6>{props.certifiedFrom}</h6>
                <p> {props.summary}</p>
            </div>
        </div>
    )
}

export default CertificationRow;