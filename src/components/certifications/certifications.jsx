import { Grid, Link, Typography }   from "@mui/material";
import { OpenInNew }                from "@mui/icons-material";
import { usePortfolioStore }        from "../../store/usePortfolioStore";
import { formatPeriod }             from "../../utils/format";

function CertificationCard({ item }) {
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
                sx              = {{ padding: "1.5rem 1rem 1rem 1rem" }}
                className       = "glass-look-hover glass-look"
            >
                <Grid item xlg={3} lg={3} md={4} sm={12} xs={12}>
                    <Typography fontSize={"small"} fontWeight={600} marginRight={1} marginTop={0.4}>
                        {formatPeriod(item.start, item.end)}
                    </Typography>
                </Grid>
                <Grid item xlg={9} lg={9} md={8} sm={12} xs={12}>
                    <Typography fontSize={16} fontWeight={500}>{item.name} <OpenInNew className="open-in-new" /></Typography>
                    <Typography p={0} m={0} fontSize={15}>{item.issuer}</Typography>
                    <Typography p={0} marginY={1} fontSize={14}>{item.summary}</Typography>
                </Grid>
            </Grid>
        </Link>
    );
}

function CertificationList() {
    const items = usePortfolioStore((s) => s.certifications);
    return items.map((item) => <CertificationCard key={item.id} item={item} />);
}

export default CertificationList;
