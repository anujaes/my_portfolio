import { Box }      from "@mui/material";
import Typewriter   from "./Typewriter";

const STACKED = { gridArea: '1 / 1' };

// "<prefix> <typed phrase>" that never changes height while typing:
// every full phrase is laid out invisibly in the same grid cell, so the
// block always reserves the height of its longest wrapped version and the
// content below it (the side menu) stays put.
function TypewriterSentence({ prefix, phrases }) {
    return (
        <Box component="span" display="grid">
            {phrases.map((phrase) => (
                <Box component="span" key={phrase} sx={STACKED} visibility="hidden" aria-hidden="true">
                    {prefix} {phrase}<Box component="span" display="inline-block" width="4px" />
                </Box>
            ))}
            <Box component="span" sx={STACKED}>
                {prefix}{' '}
                <Typewriter phrases={phrases} />
            </Box>
        </Box>
    );
}

export default TypewriterSentence;
