import React from 'react';
import { AppBar, Avatar, Box, Button, Grid, IconButton, List, ListItem, ListItemIcon, ListItemText, Paper, TextField, Toolbar, Typography } from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LockIcon from '@mui/icons-material/Lock';
import EditIcon from '@mui/icons-material/Edit';

import profilePic from '../../../assets/Img/26_1.jpg';

const ResetMyPassword = () => {
    const menuOptions = [
        { text: 'My Profile', icon: <AccountCircleIcon /> },
        { text: 'Change Password', icon: <LockIcon /> },
    ];

    return (
        <Box>
            {/* Profile Section */}
            <Box component={Paper} elevation={3} sx={{ position: 'sticky', top: 0, zIndex: 1000, bgcolor: 'background.paper', p: 2, mb: 2 }}>
                <Grid container alignItems="center">
                    <Grid item xs={8} container alignItems="center">
                        <Avatar alt="Profile Picture" src={profilePic} />
                        <Box ml={2}>
                            <Typography variant="h6">John Doe</Typography>
                            <Typography variant="body2">1000 followers</Typography>
                            <Typography variant="body2" color="textSecondary">Active</Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={4} container justifyContent="flex-end">
                        <Button variant="contained" sx={{ bgcolor: '#00AD7C', color: 'white' }}>Edit Profile</Button>
                    </Grid>
                </Grid>
            </Box>

            {/* Menu */}
            <AppBar position="sticky" color="default" >
                <Toolbar>
                    <Box display="flex" flexGrow={1}>
                        <Button color="inherit">Blog</Button>
                        <Button color="inherit">Information</Button>
                    </Box>
                </Toolbar>
            </AppBar>

            {/* Profile Content */}
            <Box sx={{ display: 'flex', width: '100vw', height: 'calc(100vh - 128px)' }}>
                <Box mt={2} display="flex" sx={{ flexGrow: 1, height: '100%', width: '100%' }}>
                    {/* Sidebar Menu */}
                    <Box component={Paper} elevation={3} sx={{ width: '25%', p: 2, mr: 2, bgcolor: '#00AD7C' }}>
                        <Typography variant="h6" sx={{ mb: 2, color: 'white' }}>Menu</Typography>
                        <List>
                            {menuOptions.map((option, index) => (
                                <ListItem button key={index} sx={{ '&:hover': { bgcolor: '#e0e0e0' } }}>
                                    <ListItemIcon sx={{ color: 'white' }}>{option.icon}</ListItemIcon>
                                    <ListItemText primary={option.text} sx={{ color: 'white' }} />
                                </ListItem>
                            ))}
                        </List>
                    </Box>

                    {/* Reset Password Form */}
                    <Box component={Paper} elevation={3} sx={{ width: '75%', p: 2, height: '100%', overflowY: 'auto' }}>
                        <Typography variant="h6">Reset Password</Typography>
                        <Box component="form" sx={{ mt: 2 }}>
                            <Grid container spacing={2}>
                                <Grid item xs={12}>
                                    <TextField
                                        label="Current Password"
                                        type="password"
                                        variant="outlined"
                                        fullWidth
                                        required
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        label="New Password"
                                        type="password"
                                        variant="outlined"
                                        fullWidth
                                        required
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        label="Confirm New Password"
                                        type="password"
                                        variant="outlined"
                                        fullWidth
                                        required
                                    />
                                </Grid>
                                <Grid item xs={12} container justifyContent="flex-end">
                                    <Button variant="contained" sx={{ bgcolor: '#00AD7C', color: 'white' }}>Reset Password</Button>
                                </Grid>
                            </Grid>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
};

export default ResetMyPassword;
