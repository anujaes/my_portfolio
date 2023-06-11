import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';

// const ExpandMore = styled((props) => {
//     const { expand, ...other } = props;
//     return <IconButton {...other} />;
// })(({ theme, expand }) => ({
//     transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
//     marginLeft: 'auto',
//     transition: theme.transitions.create('transform', {
//         duration: theme.transitions.duration.shortest,
//     }),
// }));

export default function InfoCard(props) {

    return (
        <Card
            sx = {{
                    width           : "47%",
                    height          : "47%",
                    display         : 'flex',
                    flexDirection   : "column",
                    justifyContent  : "space-between",
                    alignItems      : "center"
                }}
        >
            <CardHeader
                avatar = {
                            <Avatar sx={{ bgcolor: '#3e64ff',p:5 }} aria-label="recipe">
                                {props.icon}
                            </Avatar>
                        }
                // title       = {props.info}
                // subheader   = {props.info}
            />
            {/* <CardMedia
                component="img"
                height="194"
                image=""
                alt="Paella dish"
            /> */}
            <CardContent>
                <Typography variant="h6" fontSize="large" color="text.secondary">
                    {props.info}
                </Typography>
            </CardContent>
        </Card>
    );
}