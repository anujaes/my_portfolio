import React from "react";
import { Facebook, GitHub, Google, LinkedIn } from "@mui/icons-material";
import { Box, duration } from "@mui/material";
import './socialLinks.css';
import { delay, motion } from "framer-motion"; // Ensure you're using framer-motion

function SocialLinks() {
    const links = [
        {
            href: "https://www.linkedin.com/in/anuj-aes/",
            Icon: LinkedIn,
        },
        {
            href: "https://github.com/anujaes",
            Icon: GitHub,
        },
        {
            href: "https://www.facebook.com/littleanuj/",
            Icon: Facebook,
        },
        {
            href: "mailto:anuj.aes@gmail.com",
            Icon: Google,
        },
    ];

    return (
        <Box marginTop={10} display={"flex"}>
            {links.map((link, index) => (
                <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{
                        duration: 0.8,
                        scale: { type: "spring", bounce: 0.5, delay: 1.2 },
                    }}
                >
                    <a target="_blank" rel="noreferrer" href={link.href}>
                        <link.Icon fontSize="large" className="social-links" />
                    </a>
                </motion.div>
            ))}
        </Box>
    );
}

export default SocialLinks;
