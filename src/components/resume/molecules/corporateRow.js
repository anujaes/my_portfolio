import React                        from "react";
import BusinessCenterOutlinedIcon   from '@mui/icons-material/BusinessCenterOutlined';

function CorporateRow(props) {

    return (
        <div className="flex-container">
            <div className="flex-icon"><span><BusinessCenterOutlinedIcon fontSize="medium" /></span></div>
            <div className="flex-details">
                <h6>{props.year}</h6>
                <h3>{props.designation}</h3>
                <h6>{props.organization}</h6>
                <p> {props.summary}</p>
                <ul className="major-points">
                    {
                        props.keyPoints.map( (elem,index) => (
                            <li key={'KP'+index}>{elem}</li>
                        ))
                    }
                </ul>
            </div>
        </div>
    )
}

export default CorporateRow;