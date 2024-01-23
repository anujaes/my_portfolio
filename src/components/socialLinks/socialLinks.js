import React                from "react";
import { Facebook, GitHub, Google, LinkedIn } from "@mui/icons-material";
import { Box } from "@mui/material";
import './socialLinks.css'

function SocialLinks() {


    return (
        <Box marginTop={10}>
            <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/anuj-aes/">
                <LinkedIn fontSize="large" className="social-links" />
            </a>
            <a target="_blank" rel="noreferrer" href="https://github.com/anujaes">
                <GitHub fontSize="large" className="social-links" />
            </a>
            <a target="_blank" rel="noreferrer" href="https://www.facebook.com/littleanuj/">
                <Facebook fontSize="large" className="social-links" />
            </a>
            <a target="_blank" rel="noreferrer" href="mailto:anuj.aes@gmail.com">
                <Google fontSize="large" className="social-links" />
            </a>
        </Box>
    )
}

export default SocialLinks;