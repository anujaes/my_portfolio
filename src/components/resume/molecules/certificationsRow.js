import React                from "react";
import LaunchIcon           from '@mui/icons-material/Launch';
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';

function CertificationRow(props) {

    return (

        <div className="flex-container">
            <div className="flex-icon"><span><WorkspacePremiumIcon fontSize="medium" /></span></div>
            <div className="flex-details">
                <h6>{props.date}&nbsp;&nbsp;
                    <a target="_blank" rel="noreferrer" href={props.previewLink}>
                        <LaunchIcon className="link-icon" fontSize="small" />
                    </a>
                </h6>
                <h3>{props.certificateName}</h3>
                <h6>{props.certifiedFrom}</h6>
                <p> {props.summary}</p>
            </div>
        </div>
    )
}

export default CertificationRow;