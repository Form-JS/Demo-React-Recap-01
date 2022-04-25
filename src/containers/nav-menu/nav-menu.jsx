import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import RouterIcon from '@mui/icons-material/Navigation';
import { List, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import { Link, NavLink } from 'react-router-dom';

const navLinks = [
    { name: 'Home', to: '', icon: <HomeIcon /> },
    { name: 'About', to: 'about', icon: <InfoIcon /> },
    { name: 'Router', to: 'router', icon: <RouterIcon /> },
];

const NavMenu = ({ onMenuClick }) => {

    return (
        <nav>
            <List onClick={onMenuClick}>
                {navLinks.map((link, index) =>
                    <NavMenuItem {...link} key={index} />
                )}
            </List>
        </nav>
    );
};

const NavMenuItem = ({ name, to, icon }) => {

    return (
        <ListItemButton
            component={NavLink} to={to}>
            <ListItemIcon>
                {icon}
            </ListItemIcon>
            <ListItemText primary={name} />
        </ListItemButton>
    );
};

NavMenu.defaultProps = {
    onMenuClick: () => { }
};

export default NavMenu;