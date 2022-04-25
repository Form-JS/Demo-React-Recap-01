import { AppBar, Drawer, IconButton, Toolbar, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from 'react';
import NavMenu from '../nav-menu/nav-menu';

const MainHeader = () => {

    const [visibilityMenu, setVisibilityMenu] = useState(false);

    return (
        <header>
            <AppBar position='sticky'>
                <Toolbar>
                    <IconButton
                        onClick={() => setVisibilityMenu(true)}
                        size='large'
                        edge='start'
                        color='inherit'>
                        <MenuIcon />
                    </IconButton>
                    <Typography component='h1' variant='h5'>
                        Recap React
                    </Typography>
                </Toolbar>
            </AppBar>
            <Drawer
                anchor='left'
                open={visibilityMenu}
                onClose={() => setVisibilityMenu(false)}>
                <NavMenu onMenuClick={() => setVisibilityMenu(false)} />
            </Drawer>
        </header>
    );
};

export default MainHeader;