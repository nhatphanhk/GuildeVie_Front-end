import React, { useState } from 'react';
import { AppBar, Toolbar, IconButton, Button, Box, Drawer, List, ListItem, ListItemIcon, ListItemText, useMediaQuery, useTheme } from '@mui/material';
import { styled } from '@mui/system';
import MenuIcon from '@mui/icons-material/Menu';
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import logo from '../assets/imgs/logo-bar@2x.png';
import Grid from '@mui/material/Grid';

const StyledToolbar = styled(Toolbar)(({ theme }) => ({
    display: 'flex',
    justifyContent: 'space-between',
}));

const LogoContainer = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
}));

const Logo = styled('img')(({ theme }) => ({
    width: '100%',
    marginRight: theme.spacing(2),
}));

const NavLinks = styled(Box)(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    '& > *': {
        margin: theme.spacing(1),
    },
}));

const Header = () => {
    const [drawerOpen, setDrawerOpen] = useState(false);
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

    const toggleDrawer = (open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }
        setDrawerOpen(open);
    };

    const list = () => (
        <Box
            sx={{ width: 250 }}
            role="presentation"
            onClick={toggleDrawer(false)}
            onKeyDown={toggleDrawer(false)}
        >
            <List>
                {['Home', 'About', 'Contact'].map((text, index) => (
                    <ListItem key={text}>
                        <ListItemIcon sx={{ color: '#015E44' }}>
                            {index === 0 ? <HomeIcon /> : index === 1 ? <InfoIcon /> : <ContactMailIcon />}
                        </ListItemIcon>
                        <ListItemText primary={text} sx={{ color: '#015E44' }} />
                    </ListItem>
                ))}
            </List>
        </Box>
    );

    return (
        <AppBar position="fixed" sx={{ backgroundColor: '#00AD7C' }}>
            <StyledToolbar>
                <Grid container direction="row" justifyContent="space-between" alignItems="center">
                    <Grid item xs={3} md={1} sm={2}>
                        <LogoContainer>
                            <Logo src={logo} alt="My Logo" />
                        </LogoContainer>
                    </Grid>
                    {!isMobile && (
                        <Grid item xs={8} container justifyContent="center" alignItems="center">
                            <NavLinks>
                                <Button color="inherit">
                                    Home
                                </Button>
                                <Button color="inherit">
                                    Blogs
                                </Button>
                                <Button color="inherit">
                                    Recipes
                                </Button>
                                <Button color="inherit">
                                    Market
                                </Button>
                            </NavLinks>
                        </Grid>
                    )}
                    <Grid item xs={1} md={1} sm={2}>
                        {isMobile ? (
                            <IconButton color="inherit" onClick={toggleDrawer(true)}>
                                <MenuIcon />
                            </IconButton>
                        ) : (
                            <Button color="inherit">Sign in</Button>
                        )}
                        <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer(false)}>
                            <Grid container direction="column" justifyContent="space-between" alignItems="stretch" sx={{ padding: 2 }}>
                                <Grid item xs container direction="column" justifyContent="space-between" alignItems="stretch" sx={{ padding: 2 }}>
                                    <Button sx={{ width: 100}} role="presentation" color="inherit">Home</Button>
                                    <Button sx={{ width: 100}} role="presentation" color="inherit">Posts</Button>
                                    <Button sx={{ width: 100}} role="presentation" color="inherit">Recipes</Button>
                                    <Button sx={{ width: 100}} role="presentation" color="inherit">Market</Button>
                                </Grid>
                                <Grid item xs sx={{ padding: 2 }}>
                                    <Button sx={{ width: 100, backgroundColor: '#00AD7C', color: 'white' }} role="presentation">Sign in</Button>
                                </Grid>
                            </Grid>
                        </Drawer>
                    </Grid>
                </Grid>
            </StyledToolbar>
        </AppBar>
    );
};

export default Header;
