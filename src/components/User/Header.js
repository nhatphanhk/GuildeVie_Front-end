import React, { useState } from 'react';
import { AppBar, Toolbar, IconButton, Button, Box, Drawer, List, ListItem, ListItemIcon, ListItemText, useMediaQuery, useTheme, Typography } from '@mui/material';
import { styled } from '@mui/system';
import MenuIcon from '@mui/icons-material/Menu';
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import ContactMailIcon from '@mui/icons-material/ContactMail';
<<<<<<< HEAD:src/components/Header.js
import logo from '../assets/logo-bar@2x.png';
=======
import logo from '../../assets/Img/logo-bar@2x.png';
>>>>>>> 58819c5df632953346b9f405fdf2f8ad36b4def2:src/components/User/Header.js
import Grid from '@mui/material/Grid';

const StyledAppBar = styled(AppBar)(({ theme }) => ({
    backgroundColor: '#00AD7C',
}));

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

const DrawerContainer = styled(Box)(({ theme }) => ({
    width: 250,
    role: 'presentation',
}));

const DrawerGrid = styled(Grid)(({ theme }) => ({
    padding: theme.spacing(2),
}));

const DrawerButton = styled(Button)(({ theme }) => ({
    width: 100,
    textTransform: 'none',
    '& .MuiTypography-root': {
        fontFamily: 'Roboto, sans-serif',
    },
}));

const SignInButton = styled(Button)(({ theme }) => ({
    width: 100,
    backgroundColor: '#00AD7C',
    color: 'white',
    textTransform: 'none',
    '& .MuiTypography-root': {
        fontFamily: 'Roboto, sans-serif',
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
        <DrawerContainer
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
        </DrawerContainer>
    );

    return (
        <StyledAppBar position="fixed">
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
                                    <Typography variant="button" sx={{textTransform: 'none'}}>Home</Typography>
                                </Button>
                                <Button color="inherit">
                                    <Typography variant="button" sx={{textTransform: 'none'}}>Blogs</Typography>
                                </Button>
                                <Button color="inherit">
                                    <Typography variant="button" sx={{textTransform: 'none'}}>Recipes</Typography>
                                </Button>
                                <Button color="inherit">
                                    <Typography variant="button" sx={{textTransform: 'none'}}>Market</Typography>
                                </Button>
                            </NavLinks>
                        </Grid>
                    )}
                    <Grid item xs={1} md={1} sm={2} sx={{justifyItems:'center' }}>
                        {isMobile ? (
                            <IconButton color="inherit" onClick={toggleDrawer(true)}>
                                <MenuIcon />
                            </IconButton>
                        ) : (
                            <Button color="inherit" sx={{border: '2px solid white', backgroundColor: 'rgba(255, 255, 255, 0.3)'}}>
                                <Typography variant="button" sx={{ fontFamily: 'Roboto, sans-serif'}}>Sign in</Typography>
                            </Button>
                        )}
                        <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer(false)}>
                            <DrawerGrid container direction="column" justifyContent="space-between" alignItems="stretch">
                                <DrawerGrid item xs container direction="column" justifyContent="space-between" alignItems="stretch">
                                    <DrawerButton role="presentation" color="inherit">
                                        <Typography>Home</Typography>
                                    </DrawerButton>
                                    <DrawerButton role="presentation" color="inherit">
                                        <Typography>Posts</Typography>
                                    </DrawerButton>
                                    <DrawerButton role="presentation" color="inherit">
                                        <Typography>Recipes</Typography>
                                    </DrawerButton>
                                    <DrawerButton role="presentation" color="inherit">
                                        <Typography>Market</Typography>
                                    </DrawerButton>
                                </DrawerGrid>
                                <DrawerGrid item xs>
                                    <SignInButton role="presentation">
                                        <Typography variant="button">Sign in</Typography>
                                    </SignInButton>
                                </DrawerGrid>
                            </DrawerGrid>
                        </Drawer>
                    </Grid>
                </Grid>
            </StyledToolbar>
        </StyledAppBar>
    );
};

export default Header;
