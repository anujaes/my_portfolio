import { Box }                  from "@mui/material";
import { motion }               from "motion/react";
import Icon                     from "../common/Icon";
import { usePortfolioStore }    from "../../store/usePortfolioStore";
import { POP_IN }               from "../../constants/animation";
import { linkTargetProps }      from "../../utils/url";
import './socialLinks.css';

function SocialLinks() {
    const socials = usePortfolioStore((s) => s.profile.socials);

    return (
        <Box marginTop={10} display={"flex"}>
            {socials.map((link) => (
                <motion.div
                    key         = {link.label}
                    initial     = {POP_IN.initial}
                    animate     = {POP_IN.animate}
                    transition  = {{ duration: 0.8, scale: { type: "spring", bounce: 0.5, delay: 1.2 } }}
                >
                    <a
                        href        = {link.url}
                        aria-label  = {link.label}
                        title       = {link.label}
                        {...linkTargetProps(link.url)}
                    >
                        <Icon name={link.icon} fontSize="large" className="social-links" />
                    </a>
                </motion.div>
            ))}
        </Box>
    );
}

export default SocialLinks;
