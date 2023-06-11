import React                            from "react";
import { LinearProgress, Typography }   from "@mui/material";
import CircularProgress                 from '@mui/material/CircularProgress';
import {Grid,Box}                       from "@mui/material";
import '../../css/skills.css';

function SkillsRow(props) {

    const {otherSkills, topSkills} = props;

    return (
        <Grid container>
            {
            topSkills.map ( (item,index) => (
                <Grid item key={'ts'+index} lg={3} md={6} sm={12} xs={12} className="card-container">
                    <Box sx={{p:2}}>
                        <Typography fontSize='large' fontWeight={600}>{item.skill}</Typography>
                        <Box sx={{ position: 'relative', display: 'inline-flex' }} className='flx-center'>
                                <CircularProgress variant="determinate" value={item.percentage} size={120} sx={{color:'#3e64ff'}}/>
                                <Box
                                    sx = {{ top         : 0,            left            : 0,
                                            bottom      : 0,            right           : 0,
                                            position    : "absolute",   display         : 'flex',
                                            alignItems  : 'center',     justifyContent  : 'center',
                                    }}
                                >
                                    <Typography component="div" color="text.black" fontSize='large' fontWeight={700}>
                                    {`${Math.round(item.percentage)}%`}
                                    </Typography>
                                </Box>
                        </Box>
                    </Box>
                </Grid>
            ))
            }
            <Grid container>
                {
                    otherSkills.map( (item,index) => (
                        <Grid item key={'os'+index} lg={4} md={6} sm={6} xs={12} padding={3}>
                            <div className="skill-flex-container">
                            <div><Typography fontSize='medium'>{item.skill}</Typography></div>
                            <div><Typography fontSize='medium'>{`${item.percentage}%`}</Typography></div>
                            </div>
                            <LinearProgress variant="determinate" value={item.percentage} sx={{ height:6, borderRadius:100}} />
                        </Grid>
                    ))
                }
            </Grid>
        </Grid>
    )
}

export default SkillsRow;