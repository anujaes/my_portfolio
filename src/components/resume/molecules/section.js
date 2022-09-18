import React                from "react";
import AcademicRow          from "./academicRow.js";
import CorporateRow         from "./corporateRow.js";
import SkillsRow            from "./skillsRow.js";

function Section(props) {
    
    const { type, payload} = props;

    return (
        <div id={type} className="row-section">
            <h2 className="heading">{type}</h2>
            {
                payload[type].map((item,index) => (
                    type==='academic' ?
                    <AcademicRow
                        key             = {'aca'+index + Date.now()}
                        year            = {item.year}
                        course          = {item.course}
                        institute       = {item.institute}
                        summary         = {item.summary}
                    />
                    : type==='experience' ?
                    <CorporateRow 
                        Key             = {'corp'+index + Date.now()}
                        year            = {item.year}
                        designation     = {item.designation}
                        organization    = {item.organization}
                        summary         = {item.summary}
                    />
                    :type==='skills' ?
                        <SkillsRow 
                        />
                    :''
                ))
            }

        </div>
    )
}

export default Section;