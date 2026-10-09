import { OpenInNew }            from "@mui/icons-material";
import {
    Grid,
    Link,
    List,
    ListItemText,
    Typography }                from "@mui/material";
import TechChips                from "../common/TechChips";
import { usePortfolioStore }    from "../../store/usePortfolioStore";
import { asset }                from "../../utils/assets";
import { formatPeriod }         from "../../utils/format";

function ExperienceCard({ item }) {
    const { organization } = item;

    return (
        <Link
            target  = "_blank"
            rel     = "noreferrer"
            href    = {organization.url}
            sx      = {{ textDecoration: "none", color: "inherit" }}
        >
            <Grid
                container
                marginBottom    = {2}
                sx              = {{ padding: "1.5rem 1rem 1rem 1rem" }}
                className       = "glass-look-hover glass-look"
            >
                <Grid item xlg={2} lg={2} md={4} sm={12} xs={12} paddingRight={"100px"}>
                    <img
                        src     = {asset(organization.logo)}
                        alt     = {`${organization.name} logo`}
                        style   = {{ width: '85px' }}
                        loading = "lazy"
                    />
                </Grid>
                <Grid item xlg={9} lg={9} md={9} sm={12} xs={12}>
                    <Typography fontSize={"small"} fontWeight={600}>
                        {formatPeriod(item.start, item.end)}
                    </Typography>
                    <Typography display={"flex"} alignItems={"center"} fontSize={16} fontWeight={500}>
                        {item.role} <OpenInNew className="open-in-new" />
                    </Typography>
                    <Typography p={0} m={0} fontSize={15}>
                        {organization.name}, {organization.location}
                    </Typography>
                    <Typography pt={0} m={0} fontSize={13}>
                        {item.focus.join(' | ')}
                    </Typography>
                </Grid>
                <Grid item xlg={12} lg={12} md={12} sm={12} xs={12}>
                    <Typography p={0} marginY={1} fontSize={14}>{item.summary}</Typography>
                    <List sx={{ listStyleType: 'disc' }}>
                        {item.highlights.map((point) => (
                            <ListItemText key={point} sx={{ display: 'list-item', marginLeft: '17px' }}>
                                <Typography p={0} marginY={1} fontSize={15}>{point}</Typography>
                            </ListItemText>
                        ))}
                    </List>
                    <TechChips items={item.technologies} />
                </Grid>
            </Grid>
        </Link>
    );
}

function ExperienceList() {
    const items = usePortfolioStore((s) => s.experience);
    return items.map((item) => <ExperienceCard key={item.id} item={item} />);
}

export default ExperienceList;
