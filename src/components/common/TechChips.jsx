import { Chip } from "@mui/material";
import Reveal   from "./Reveal";

function TechChips({ items, sx }) {
    return items.map((label) => (
        <Reveal key={label}>
            <Chip label={label} sx={{ margin: 0.3, fontWeight: 500, ...sx }} />
        </Reveal>
    ));
}

export default TechChips;
