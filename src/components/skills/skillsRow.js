import React                from "react";
import { Grid, Typography } from "@mui/material";
import { Chip }             from "@mui/material";

function SkillsRow(props) {

    // useEffect(()=>{
    //     window.document.getElementById("details-body").onscroll = () => {
    //         const top = document.getElementById("skills").getBoundingClientRect().top;
    //         const bottom = document.getElementById("skills").getBoundingClientRect().bottom;
    //         console.log(top, bottom, window.innerHeight)
    //         if ( top <= window.innerHeight-400 && bottom >= window.innerHeight-400 ) {
    //             console.log("in skills viewport");
    //         }
    //     }
    // },[])

    const keys = Object.keys(props);

    return (
        <Grid
            container
            sx          =  {{ padding: "1.5rem 1rem 1rem 1rem" }}
            className   = "glass-look"
            id          = "skills"
        >
            {
                keys.map((item, index) => (
                    <Grid key={'skill_chp' + index} container marginY={1}>
                        <Grid item xlg={3} lg={3} md={4} sm={12} xs={12}>
                            <Typography
                                fontSize    ={"small"}
                                fontWeight  ={600}
                                marginRight = {1}
                                marginTop   ={1.4}
                            >
                                {item.charAt(0).toUpperCase() + item.slice(1)}
                            </Typography>
                        </Grid>
                        <Grid item xlg={9} lg={9} md={8} sm={12} xs={12}>
                            {
                                props[item].map((item, index) => (
                                    <Chip
                                        key     = {'tch' + index}
                                        label   = {item}
                                        sx      = {{ marginY:0.3, marginRight :0.6, fontWeight: 500 }}
                                    />
                                ))
                            }
                        </Grid>
                    </Grid>
                ))
            }
        </Grid>
    )
}

export default SkillsRow;