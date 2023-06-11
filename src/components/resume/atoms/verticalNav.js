import * as React                   from 'react';
import MenuList                     from '@mui/material/MenuList';
import MenuItem                     from '@mui/material/MenuItem';
import ListItemText                 from '@mui/material/ListItemText';
import ListItemIcon                 from '@mui/material/ListItemIcon';
import BusinessCenterOutlinedIcon   from '@mui/icons-material/BusinessCenterOutlined';
import SchoolOutlinedIcon           from '@mui/icons-material/SchoolOutlined';
import PsychologyOutlinedIcon       from '@mui/icons-material/PsychologyOutlined';
import WorkspacePremiumIcon         from '@mui/icons-material/WorkspacePremium';
import { Link }                     from '@mui/material';

import '../../css/verticalNav.css'

export const endPoints = [
    {
        name    : 'Education',
        href    : '#academic',
        icon    : <SchoolOutlinedIcon fontSize="medium" />
    },
    {
        name    : 'Experience',
        href    : '#experience',
        icon    : <BusinessCenterOutlinedIcon fontSize="medium" />
    },
    {
        name    : 'Skills',
        href    : '#skills',
        icon    : <PsychologyOutlinedIcon fontSize="medium" />
    },
    {
        name    : 'Certifications',
        href    : '#certifications',
        icon    : <WorkspacePremiumIcon fontSize="medium" />
    },
]
function VerticalNav() {
    const customColor = "#707070"

    return (
        <MenuList className='vertical-navigation' sx={{display : {sm:"none", xs:"none", md:"block", lg:"block"},}}>
            {
                endPoints.map((item,index)=>(
                    <Link key={'VNB'+index} underline='none' href={item.href} color={customColor} >
                        <MenuItem className='nav-link'>
                            <ListItemIcon> {item.icon} </ListItemIcon>
                            <ListItemText className='menu-txt'>{item.name}</ListItemText>
                        </MenuItem>
                    </Link>
                ))
            }
        </MenuList>
    )
}

export default VerticalNav;