import React                        from 'react';
import TypeWriterEffect             from 'react-typewriter-effect';
import KeyboardDoubleArrowDownIcon  from '@mui/icons-material/KeyboardDoubleArrowDown';
import { Grid }                     from '@mui/material';
import '../css/home.css'

function Home(){
    return(
        <Grid id='home' className="home-panel" style={{marginTop:'-70px'}}>
            <Grid container className="main-pg">
                <Grid item lg={6} md={6} sm={6} xs={6} width={100} className='left-home-bg'>
                </Grid>
                <Grid item lg={6} md={6} sm={6} xs={6} width={100}></Grid>
                <div className="banner">
                    <div className="intro">
                        <p>Hey! I am</p>
                        <h1>Anuj Kumar Singh</h1>
                        <TypeWriterEffect
                            textStyle={{
                            display:"inline"
                            }}
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
                        />
                        <a href="#about">
                            <div className="indicator">
                                <KeyboardDoubleArrowDownIcon fontSize='large' />
                            </div>
                        </a>
                    </div>
                </div>
            </Grid>
        </Grid>
    )
}

export default Home;