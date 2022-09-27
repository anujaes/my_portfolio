import React                from "react";
import AcademicRow          from "./academicRow.js";
import CorporateRow         from "./corporateRow.js";
import SkillsRow            from "./skillsRow.js";
import CertificationRow     from "./certificationsRow.js";

function Section(props) {

    const { type, payload} = props;

    return (
        <div key={type + Date.now()} id={type} className="row-section">
            <h2 className="heading">{type}</h2>
            {
                payload.map( (item,index) => (
                    type=== 'academic' ?
                    <AcademicRow
                        key             = {'aca'+index}
                        year            = {item.year}
                        course          = {item.course}
                        institute       = {item.institute}
                        summary         = {item.summary}
                    />
                    : type==='experience' ?
                    <CorporateRow
                        key             = {'corp'+index+index}
                        year            = {item.year}
                        designation     = {item.designation}
                        organization    = {item.organization}
                        summary         = {item.summary}
                    />
                    : type==='skills' ?
                        <SkillsRow
                            key         = {'ski'+index+index+index}
                            topSkills   = {payload[0].topSkills}
                            otherSkills = {payload[0].otherSkills}
                        />
                    : type==='certifications' ?
                    <CertificationRow
                        key             = {'cert'+index+index+index+index}
                        date            = {item.date}
                        certifiedFrom   = {item.certifiedFrom}
                        certificateName = {item.certificateName}
                        summary         = {item.summary}
                        previewLink     = {item.previewLink}
                    />
                    :''
                ))
            }

        </div>
    )
}

export default Section;