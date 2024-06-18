import React from 'react';
import { AppBar, Avatar, Box, Button, Container, Grid, IconButton, List, ListItem, ListItemIcon, ListItemText, Paper, Toolbar, Typography } from '@mui/material';
import BarChartIcon from '@mui/icons-material/BarChart';
import PersonIcon from '@mui/icons-material/Person';
import PostAddIcon from '@mui/icons-material/PostAdd';
import ShopIcon from '@mui/icons-material/Shop';
import ReportIcon from '@mui/icons-material/Report';
import SettingsIcon from '@mui/icons-material/Settings';
import CheckIcon from '@mui/icons-material/Check';
import CloseIcon from '@mui/icons-material/Close';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Logo from '../../../assets/images/logo.png'; // Assuming there's a logo image in the assets folder
import postImage from '../../../assets/images/ingre5.jpg'; // Sample image for post

const menuOptions = [
    { text: 'Statistics', icon: <BarChartIcon /> },
    { text: 'Profile', icon: <PersonIcon /> },
    { text: 'Post', icon: <PostAddIcon /> },
    { text: 'Shop', icon: <ShopIcon /> },
    { text: 'Report', icon: <ReportIcon /> },
    { text: 'Settings', icon: <SettingsIcon /> }
];

const itemList = [
    'Item 1',
    'Item 2',
    'Item 3',
    'Item 4',
    // Add more items as needed
];

const ConfirmMenuDetail = () => {
    const handleConfirm = () => {
        console.log('Confirm action');
    };

    const handleRefuse = () => {
        console.log('Refuse action');
    };

    const handleBack = () => {
        console.log('Back action');
    };

    return (
        <Box display="flex">
            {/* Sidebar Menu */}
            <Box component={Paper} elevation={3} sx={{ width: '20%', p: 2, height: '100vh', position: 'fixed', bgcolor: '#f5f5f5' }}>
                <Box display="flex" alignItems="center" mb={2}>
                    <img src={Logo} alt="GuildVie Logo" style={{ width: '40px', height: '40px', marginRight: '10px' }} />
                    <Typography variant="h6">GuildVie</Typography>
                </Box>
                <List>
                    {menuOptions.map((option, index) => (
                        <ListItem button key={index} sx={{ '&:hover': { bgcolor: '#e0e0e0' } }}>
                            <ListItemIcon>{option.icon}</ListItemIcon>
                            <ListItemText primary={option.text} />
                        </ListItem>
                    ))}
                </List>
            </Box>

            {/* Main Content */}
            <Box sx={{ ml: '20%', width: '80%', p: 3 }}>
                {/* User Details and Action Buttons */}
                <AppBar position="static" color="default">
                    <Toolbar>
                        <Box display="flex" flexGrow={1} alignItems="center">
                            <Box>
                                <Typography variant="h6">John Doe</Typography>
                                <Typography variant="body2" color="textSecondary">2 hours ago</Typography>
                                <Typography variant="body2">Type: Post</Typography>
                            </Box>
                        </Box>
                        <Button variant="contained" color="primary" startIcon={<CheckIcon />} sx={{ ml: 2 }} onClick={handleConfirm}>
                            Confirm
                        </Button>
                        <Button variant="contained" color="secondary" startIcon={<CloseIcon />} sx={{ ml: 2 }} onClick={handleRefuse}>
                            Refuse
                        </Button>
                    </Toolbar>
                </AppBar>

                {/* Post Details */}
                <Box mt={2} display="flex">
                    {/* List of Items and Detailed Instructions Button */}
                    <Box sx={{ width: '40%', pr: 2 }}>
                        <Paper elevation={3} sx={{ p: 2 }}>
                            <Typography variant="h6">List of Items</Typography>
                            <List>
                                {itemList.map((item, index) => (
                                    <ListItem key={index}>
                                        <ListItemText primary={item} />
                                    </ListItem>
                                ))}
                            </List>
                            <Button variant="contained" color="primary" fullWidth sx={{ mt: 2 }}>
                                View Detailed Instructions
                            </Button>
                        </Paper>
                    </Box>

                    {/* Image */}
                    <Box sx={{ width: '60%', pl: 2 }}>
                        <Paper elevation={3} sx={{ p: 2, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                            <img src={postImage} alt="Post" style={{ width: '100%', maxHeight: '400px', objectFit: 'cover' }} />
                        </Paper>
                    </Box>
                </Box>

                {/* Back Button */}
                <Box mt={2} display="flex" justifyContent="center">
                    <Button variant="contained" color="secondary" startIcon={<ArrowBackIcon />} onClick={handleBack}>
                        Back
                    </Button>
                </Box>
            </Box>
        </Box>
    );
};

export default ConfirmMenuDetail;
