import MenuList                 from '@mui/material/MenuList';
import MenuItem                 from '@mui/material/MenuItem';
import ListItemText             from '@mui/material/ListItemText';
import ListItemIcon             from '@mui/material/ListItemIcon';
import { Link }                 from '@mui/material';
import Icon                     from '../common/Icon';
import { usePortfolioStore }    from '../../store/usePortfolioStore';
import './verticalNav.css';

function VerticalNav() {
    const navItems = usePortfolioStore((s) => s.navItems);

    return (
        <MenuList className='vertical-navigation' sx={{ display: { xs: 'none', sm: 'none', md: 'block' } }}>
            {navItems.map((item) => (
                <Link key={item.id} underline='none' href={`#${item.id}`} color={"black"}>
                    <MenuItem className='nav-link'>
                        <ListItemIcon sx={{ color: "black" }}><Icon name={item.icon} fontSize="medium" /></ListItemIcon>
                        <ListItemText className='menu-txt'>{item.label}</ListItemText>
                    </MenuItem>
                </Link>
            ))}
        </MenuList>
    );
}

export default VerticalNav;
