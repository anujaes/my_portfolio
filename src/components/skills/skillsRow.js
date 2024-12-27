import React                from "react";
import { Grid, Typography } from "@mui/material";
import { Chip }             from "@mui/material";
import { motion }           from "motion/react";
import { useInView }        from "react-intersection-observer";

function SkillsRow(props) {
    const { ref, inView } = useInView({
        threshold: 0.4, // Trigger animation when 30% of the element is visible
        triggerOnce: true,
    });

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
            ref         = {ref}
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
                                    <motion.div
                                        initial={{ opacity: 0, scale: 0 }}
                                        animate={inView ? { opacity: 1, scale: 1 } : {}}
                                        transition={{
                                            scale: { type: "spring", visualDuration: 0.7, bounce: 0.3 },
                                        }}
                                        style = {{display: "inline-flex"}}
                                    >
                                        <Chip
                                            key     = {'tch' + index}
                                            label   = {item}
                                            sx      = {{ marginY:0.3, marginRight :0.6, fontWeight: 500 }}
                                        />
                                    </motion.div>
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