import React                from "react";
import AcademicRow          from "./academicRow.js";
import CorporateRow         from "./corporateRow.js";
import SkillsRow            from "./skillsRow.js";
import CertificationRow     from "./certificationsRow.js";

function Section(props) {

    const { type, payload} = props;

    function conditioalRendering(item,index,type) {
        const components = {
            academic        :  <AcademicRow
                                    key         = {'aca'+index}
                                    year        = {item.year}
                                    course      = {item.course}
                                    institute   = {item.institute}
                                    summary     = {item.summary}
                                />,
            experience      :   <CorporateRow
                                    key             = {'corp'+index}
                                    year            = {item.year}
                                    designation     = {item.designation}
                                    organization    = {item.organization}
                                    summary         = {item.summary}
                                    keyPoints       = {item.keyPoints}
                                />,
            skills          :
                                <SkillsRow
                                    key             = {'ski'+index}
                                    topSkills       = {item.topSkills}
                                    otherSkills     = {item.otherSkills}
                                />,
            certifications  :   <CertificationRow
                                    key             = {'cert'+index}
                                    date            = {item.date}
                                    certifiedFrom   = {item.certifiedFrom}
                                    certificateName = {item.certificateName}
                                    summary         = {item.summary}
                                    previewLink     = {item.previewLink}
                                />
        }
        // returning the required components from object
        return components[type]
    }

    return (
        <div key={type + Date.now()} id={type} className="row-section scrollspy">
            <h2 className="heading">{type}</h2>
            {
                payload.map( (item,index) => (
                    conditioalRendering(item,index,type)
                ))
            }
        </div>
    )
}

export default Section;