import potrait                      from '../../images/potrait-flip.png'
import React                        from 'react';
import KeyboardDoubleArrowDownIcon  from '@mui/icons-material/KeyboardDoubleArrowDown';
import { Grid }                     from '@mui/material';
import '../../css/home.css'

function Home(){
    return(
        <Grid id='home' className="home-panel">
            <Grid container className="main-pg">
                <Grid item lg={6} md={12} sm={6} xs={12} width={100} className='left-home-bg flx-center'>
                    <div className="banner">
                        <div className="intro">
                            <p>Hey! I am</p>
                            <h1>Anuj Kumar Singh</h1>
                            {/* <TypeWriterEffect
                                textStyle={{ display:"inline" }}
                                scrollArea      = {document.querySelector('#typing-word')}
                                startDelay      = {1000}
                                cursorColor     = "#3F3D56"
                                multiTextLoop   = {true}
                                multiText       = {[
                                                        '<Javascript /> developer.',
                                                        '<React /> developer.',
                                                        '<NodeJS /> developer.',
                                                        '<Full-Stack /> developer.',
                                                    ]}
                                multiTextDelay  = {1000}
                                typeSpeed       = {150}
                            /> */}
                            <a href="#about">
                                <div className="indicator" >
                                    <div className='sub-indicator'>
                                        <KeyboardDoubleArrowDownIcon fontSize='large' />
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>
                </Grid>
                {/* <Grid item lg={6} md={6} sm={6} xs={6} width={100}> */}
                <Grid item lg={6} md={12} sm={6} xs={12} className="portrait-container">
                    <img src={potrait} alt="Anuj's potrait" />
                {/* </Grid > */}
                </Grid>
            </Grid>
        </Grid>
    )
}

export default Home;