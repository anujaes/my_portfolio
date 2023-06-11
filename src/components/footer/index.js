import '../css/footer.css'
import React                    from "react";
import { Facebook }             from '@mui/icons-material';
import LinkedInIcon             from '@mui/icons-material/LinkedIn';
import GitHubIcon               from '@mui/icons-material/GitHub';
import potrait                  from '../../images/potrait.png'
import { Container,Grid }       from '@mui/material';

function Footer() {

    const iconLinks = [
        {
            link: "https://www.facebook.com/littleanuj",
            icon: <Facebook fontSize={"medium"} />
        },
        {
            link: "https://github.com/anujaes",
            icon: <GitHubIcon fontSize={"medium"} />
        },
        {
            link: "https://www.linkedin.com/in/anuj-aes",
            icon: <LinkedInIcon fontSize="medium" />
        }
    ]

    return (
        <footer>
            <Container >
                <Grid container>
                    <Grid item lg={8}>
                        <Grid container>
                            <Grid item lg={10} className="footer-col">
                                <h2 className="footer-heading">About</h2>
                                <p style={{marginBottom:"0"}}>
                                    I am an MCA graduate, working as a NodeJS developer and I am always looking
                                    for better opportunities to learn and grow.
                                </p>
                            </Grid>
                            <Grid item lg={8} className="footer-col">
                                <h2 className="footer-heading">Other Profile</h2>
                                <ul className="footer-link hover-effect" style={{paddingLeft:0}}>
                                    <li><a href="https://github.com/anujaes">https://github.com/anujaes </a></li>
                                    <li><a href="https://www.hackerrank.com/ANUJ_MCMT">https://www.hackerrank.com/ANUJ_MCMT </a></li>
                                </ul>
                            </Grid>
                            <Grid item lg={4} className="footer-col" sx={{display:"flex", alignItems:"flex-end"}}>
                                {/* <h2 className="footer-heading ms-5"></h2> */}
                                <ul className="footer-link footer-social-icon">
                                {
                                    iconLinks.map((item,index)=>(
                                        <li key={'flink'+index}>
                                            <a target="_blank" rel="noreferrer" href={item.link}>{item.icon}</a>
                                        </li>
                                    ))
                                }
                                </ul>
                            </Grid>
                            <Grid item lg={10} className="footer-col">
                                <p style={{marginTop:'2rem',marginBottom:0}}>
                                    Disclaimer, this portfolio is designed using ReactJs, Material-UI (MUI Core) and Material-UI-Icons.
                                    This portfolio UX Desing is inspired from 'ColorLib'.<br></br>Developed By Anuj Kumar Singh.
                                    <br></br><br></br>
                                    <em>{'Last updated on 10 June 2023'}</em>
                                </p>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item className="footer-image" lg={4} sx={{mt:7}}>
                        <img src={potrait} alt="Anuj's potrait" />
                    </Grid>
                </Grid>
            </Container>
        </footer>
    )
}

export default Footer;