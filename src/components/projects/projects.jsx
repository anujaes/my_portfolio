import { Grid, ImageListItem, Link, Typography } from "@mui/material";
import { OpenInNew }            from "@mui/icons-material";
import TechChips                from "../common/TechChips";
import { usePortfolioStore }    from "../../store/usePortfolioStore";
import { asset }                from "../../utils/assets";
import { formatPeriod }         from "../../utils/format";

function ProjectCard({ item }) {
    return (
        <Link
            target  = "_blank"
            rel     = "noreferrer"
            href    = {item.url}
            sx      = {{ textDecoration: "none", color: "inherit" }}
        >
            <Grid
                container
                marginBottom    = {2}
                sx              = {{ padding: "1rem 0rem 1rem 0rem" }}
                className       = "glass-look-hover glass-look"
            >
                <Grid item xlg={4} lg={4} md={4} sm={12} xs={12} paddingX={2}>
                    <ImageListItem>
                        <img
                            alt     = {item.name}
                            src     = {asset(item.thumbnail)}
                            loading = "lazy"
                            style   = {{ border: "3px solid var(--border-soft)", borderRadius: "7px" }}
                        />
                    </ImageListItem>
                </Grid>
                <Grid
                    item
                    xlg = {8}
                    lg  = {8}
                    md  = {8}
                    sm  = {12}
                    xs  = {12}
                    sx  = {{ padding: { xs: '1rem', sm: '1rem', md: '0' } }}
                >
                    <Typography fontSize={16} fontWeight={500}>{item.name} <OpenInNew className="open-in-new" /></Typography>
                    <Typography fontSize={12} fontWeight={600} marginRight={1}>{formatPeriod(item.start, item.end)}</Typography>
                    <Typography paddingRight={1} marginY={0.5} fontSize={13}>{item.summary}</Typography>
                    <TechChips items={item.technologies} sx={{ fontSize: 12 }} />
                </Grid>
            </Grid>
        </Link>
    );
}

function ProjectList() {
    const items = usePortfolioStore((s) => s.projects);
    return items.map((item) => <ProjectCard key={item.id} item={item} />);
}

export default ProjectList;
