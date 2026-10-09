import { useRef }                       from "react";
import { Box, Stack, Typography }       from "@mui/material";
import { useInView, useReducedMotion }  from "motion/react";
import EventStream              from "./eventStream";
import Icon                     from "../common/Icon";
import { usePortfolioStore }    from "../../store/usePortfolioStore";
import { useTypedLines }        from "../../hooks/useTypedLines";
import { asset }                from "../../utils/assets";
import { linkTargetProps }      from "../../utils/url";

const WINDOW_DOTS = [1, 2, 3];

// Right side of the contact section: a terminal-style intro over an
// animated "event stream" background, plus quick contact links.
function TechPanel() {
    const { terminal, location } = usePortfolioStore((s) => s.contact);
    const { socials, resume }    = usePortfolioStore((s) => s.profile);
    const ref           = useRef(null);
    const inView        = useInView(ref, { once: true, amount: 0.4 });
    const reducedMotion = useReducedMotion();
    const typed         = useTypedLines(terminal, inView, reducedMotion);
    const activeLine    = typed.findIndex((n, i) => n < terminal[i].output.length);

    return (
        <Box ref={ref} className="tech-panel" padding={{ xs: 3, md: 5 }} display="flex" flexDirection="column">
            <EventStream />

            <Box position="relative" zIndex={1} display="flex" flexDirection="column" flexGrow={1}>
                <Stack direction="row" spacing={0.8} alignItems="center" marginBottom={3}>
                    {WINDOW_DOTS.map((dot) => <span key={dot} className="window-dot" />)}
                    <Typography className="mono" fontSize={12} color="text.secondary" paddingLeft={1.5}>~/anuj — zsh</Typography>
                </Stack>

                <Box className="mono" fontSize={{ xs: 13, md: 14 }} lineHeight={1.7} flexGrow={1}>
                    {terminal.map((line, i) => {
                        const shown = i === 0 || typed[i - 1] >= terminal[i - 1].output.length;
                        if (!shown) return null;
                        const isActive = i === activeLine || (activeLine === -1 && i === terminal.length - 1);
                        return (
                            <Box key={line.command} marginBottom={1.5}>
                                <div><span className="prompt">❯ </span><span className="command">{line.command}</span></div>
                                <div className="output">
                                    {line.output.slice(0, typed[i])}
                                    {isActive && <span className="caret" aria-hidden="true" />}
                                </div>
                            </Box>
                        );
                    })}
                </Box>

                <Stack direction="row" spacing={1} alignItems="center" marginTop={3} color="text.secondary">
                    <Icon name="location" fontSize="small" />
                    <Typography fontSize={14}>{location}</Typography>
                </Stack>

                <Stack direction="row" spacing={2.5} alignItems="center" marginTop={2}>
                    {socials.map((s) => (
                        <a key={s.label} className="panel-link" href={s.url} aria-label={s.label} title={s.label} {...linkTargetProps(s.url)}>
                            <Icon name={s.icon} />
                        </a>
                    ))}
                    <a className="panel-link" href={asset(resume)} target="_blank" rel="noreferrer" aria-label="Download résumé" title="Download résumé">
                        <Icon name="download" />
                    </a>
                </Stack>
            </Box>
        </Box>
    );
}

export default TechPanel;
