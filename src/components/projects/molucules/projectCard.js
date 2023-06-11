import { Grid, Link }         from "@mui/material";
import React            from "react";
import Card             from '@mui/material/Card';
// import CardActions   from '@mui/material/CardActions';
import CardContent      from '@mui/material/CardContent';
import CardMedia        from '@mui/material/CardMedia';
import {Typography}     from "@mui/material";
// import {Button}      from "@mui/material";

function ProjectCard(props) {

    const {name, duration, technologies, summary, link, image} = props;

    return (
        <Grid item lg={4} md={6} sm={12} xs={12}
            sx={{display:'flex', justifyContent:'center'}}
        >
            <Card sx={{width:'85%'}} className="projects-cards">
                <Link href={link} underline="none" sx={{textDecoration:'none', color:'black'}}>
                    <CardMedia
                        component   = "img"
                        alt         = {name}
                        height      = "250"
                        image       = {image}
                    />
                    <CardContent sx={{textAlign:'center'}}>
                        <Typography gutterBottom variant="h6" component="div">
                            {name}
                        </Typography>
                        <Typography fontWeight='bold' gutterBottom variant="caption" color="text.secondary">
                            {duration}
                        </Typography>
                        <Typography variant="body1" color="text.secondary">
                            {summary}
                        </Typography>
                        <Typography fontWeight='bold' variant="caption" color="text.secondary">
                            {technologies}
                        </Typography>
                    </CardContent>
                    {/* <CardActions> */}
                        {/* <Button size="small">Share</Button> */}
                        {/* <Button size="small">Learn More</Button> */}
                    {/* </CardActions> */}
                </Link>
            </Card>
        </Grid>
    )
}

export default ProjectCard;