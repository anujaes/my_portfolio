import { Grid, Typography }     from "@mui/material";
import TechChips                from "../common/TechChips";
import { usePortfolioStore }    from "../../store/usePortfolioStore";

function SkillsRow() {
    const groups = usePortfolioStore((s) => s.skills);

    return (
        <Grid container sx={{ padding: "1.5rem 1rem 1rem 1rem" }} className="glass-look">
            {groups.map((group) => (
                <Grid key={group.category} container marginY={1}>
                    <Grid item xlg={3} lg={3} md={4} sm={12} xs={12}>
                        <Typography fontSize={"small"} fontWeight={600} marginRight={1} marginTop={1.4}>
                            {group.category}
                        </Typography>
                    </Grid>
                    <Grid item xlg={9} lg={9} md={8} sm={12} xs={12}>
                        <TechChips items={group.items} sx={{ marginX: 0, marginY: 0.3, marginRight: 0.6 }} />
                    </Grid>
                </Grid>
            ))}
        </Grid>
    );
}

export default SkillsRow;
