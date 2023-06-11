import React                        from "react";
import MapsHomeWorkIcon             from '@mui/icons-material/MapsHomeWork';
import PhoneIcon                    from '@mui/icons-material/Phone';
import MailIcon                     from '@mui/icons-material/Mail';
import LinkedInIcon                 from '@mui/icons-material/LinkedIn';
import { Grid, Typography, Box, Button }    from "@mui/material";
import {TextField}                    from "@mui/material";
import '../css/contactUs.css'


function ContactUs() {
    const details= [
        {
            icon    : <MapsHomeWorkIcon fontSize="medium" />,
            heading : 'Address',
            info    : 'Gurugram, Haryana India',
        },
        {
            icon    : <PhoneIcon fontSize="medium" />,
            heading : 'Contact',
            info    : '+91 9307565775',
        },
        {
            icon    : <MailIcon fontSize="medium" />,
            heading : 'Mail',
            info    : 'anuj.aes@gmail.com',
        },
        {
            icon    : <LinkedInIcon fontSize="medium" />,
            heading : 'Linkedin',
            info    : 'www.linkedin.com/in/anuj-aes',
        },
    ]
    return (
        <Box id='contact' className="contact-container">
            <Typography variant="h3" fontWeight={700} sx={{ mb:1}}>Contact Me</Typography>
            <Typography variant="h5" sx={{mt:2,mb:5}}>I would love to here from you!</Typography>
            <Grid container>
                <Grid item lg={6} md={6} sm={12} xs={12} paddingY={2} className="flx-center">
                    <Box width={'80%'} sx={{p:2,minHeight:'400px'}} className="box-form">
                        <Grid container sx={{width:'100%'}} spacing={2}>
                            <Grid xs={12} sm={12} md={6} lg={6} item>
                                <TextField sx={{my:1}} fullWidth label="First Name" variant="standard" />
                            </Grid>
                            <Grid xs={12} sm={12} md={6} lg={6} item>
                                <TextField sx={{my:1}} fullWidth label="Last Name" variant="standard" />
                            </Grid>
                            <Grid xs={12} sm={12} md={8} lg={8} item>
                                <TextField sx={{my:1}} fullWidth label="Email" variant="standard" />
                            </Grid>
                            <Grid xs={12} sm={12} md={4} lg={4} item>
                                <TextField sx={{my:1}} fullWidth label="Contact" variant="standard" />
                            </Grid>
                            <Grid xs={12} sm={12} md={12} lg={12} item>
                                <TextField
                                    id          = "standard-multiline-static"
                                    label       = "Message"
                                    rows        = {4}
                                    variant     = "standard"
                                    sx          = {{my:1}}
                                    // defaultValue="message..."
                                    multiline
                                    fullWidth
                                />
                            </Grid>
                            <Grid xs={12} sm={6} md={4} lg={4} item>
                                <Button variant="contained" sx={{width:'100%'}} disabled>Send</Button>
                            </Grid>
                        </Grid>
                    </Box>
                </Grid>
                <Grid item lg={6} md={6} sm={12} xs={12} paddingX={2} >
                    <Grid container spacing={3} paddingY={2}>
                    {
                    details.map((item,index)=>(
                        <Grid key={'CTD'+index}
                            item
                            lg              = {6}
                            md              = {6}
                            sm              = {6}
                            xs              = {12}
                            width           = {100}
                        >
                            <Box className="square">
                                <span style={{display:"flex", marginTop:'0.8rem'}}>{item.icon}</span>
                                <Typography fontWeight={600} sx={{marginTop:'1rem', marginBottom:'1rem'}}>{item.heading}</Typography>
                                <Typography >{item.info}</Typography>
                            </Box>
                        </Grid>
                    ))
                    }
                    </Grid>
                </Grid>
            </Grid>
        </Box>
    )
}

export default ContactUs;