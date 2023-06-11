import * as React       from 'react';
import Box              from '@mui/material/Box';
import List             from '@mui/material/List';
import ListItem         from '@mui/material/ListItem';
import ListItemButton   from '@mui/material/ListItemButton';
import ListItemIcon     from '@mui/material/ListItemIcon';
// import ListItemText     from '@mui/material/ListItemText';
// import InboxIcon        from '@mui/icons-material/Inbox';
// import DraftsIcon       from '@mui/icons-material/Drafts';
import { endPoints }    from './verticalNav';

export default function HorizontalNav() {

    return (
        <Box sx={
            {
                width           : '100%',
                // height          : "100px",
                backgroundColor : "transparent",
                display         : {sm:"block", xs:"block", md:"none", lg:"none"},
                // position        : "sticky !important",
                top             : 120,
                position        : '-webkit-sticky !important',
                position        : 'sticky !important'
            }}>
            <nav>
                <List sx={{display:'flex', justifyContent:'space-evenly'}}>
                    {
                        endPoints.map((item,index)=>(
                            <ListItem key={'HNV'+index}>
                                <ListItemButton href={item.href} sx={{justifyContent:"center",width:"fit-content"}}>
                                    <ListItemIcon>
                                        {item.icon}
                                    </ListItemIcon>
                                    {/* <ListItemText primary="Inbox" /> */}
                                </ListItemButton>
                            </ListItem>
                        ))
                    }
                </List>
            </nav>
        </Box>
    );
}