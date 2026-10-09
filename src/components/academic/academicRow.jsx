import { Grid, Typography }     from "@mui/material";
import { usePortfolioStore }    from "../../store/usePortfolioStore";
import { formatPeriod }         from "../../utils/format";

function EducationCard({ item }) {
    return (
        <Grid
            container
            marginBottom    = {2}
            sx              = {{ padding: "1.5rem 1rem 1rem 1rem" }}
            className       = "glass-look"
        >
            <Grid item xlg={3} lg={3} md={4} sm={12} xs={12}>
                <Typography fontSize={"small"} fontWeight={600} marginRight={2} marginTop={0.4}>
                    {formatPeriod(item.start, item.end)}
                </Typography>
            </Grid>
            <Grid item xlg={9} lg={9} md={8} sm={12} xs={12}>
                <Typography fontSize={16} fontWeight={500}>{item.degree}</Typography>
                <Typography p={0} m={0} fontSize={15}>{item.institute}</Typography>
                <Typography p={0} marginY={1} fontSize={14}>{item.summary}</Typography>
            </Grid>
        </Grid>
    );
}

function EducationList() {
    const items = usePortfolioStore((s) => s.education);
    return items.map((item) => <EducationCard key={item.id} item={item} />);
}

export default EducationList;
