import React, { useState } from 'react';
import { AppBar, Box, Button, Checkbox, Container, Grid, IconButton, List, ListItem, ListItemIcon, ListItemText, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField, Toolbar, Typography } from '@mui/material';
import { Pagination } from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import VisibilityIcon from '@mui/icons-material/Visibility';
import CheckIcon from '@mui/icons-material/Check';
import DeleteIcon from '@mui/icons-material/Delete';
import BarChartIcon from '@mui/icons-material/BarChart';
import PersonIcon from '@mui/icons-material/Person';
import PostAddIcon from '@mui/icons-material/PostAdd';
import ShopIcon from '@mui/icons-material/Shop';
import ReportIcon from '@mui/icons-material/Report';
import SettingsIcon from '@mui/icons-material/Settings';
import Logo from '../../../assets/Img/logo.png';
const menuOptions = [
    { text: 'Statistics', icon: <BarChartIcon /> },
    { text: 'Profile', icon: <PersonIcon /> },
    { text: 'Post', icon: <PostAddIcon /> },
    { text: 'Shop', icon: <ShopIcon /> },
    { text: 'Report', icon: <ReportIcon /> },
    { text: 'Settings', icon: <SettingsIcon /> }
];

const sampleData = [
    { id: 1, user: 'John Doe', time: '2 hours ago', type: 'Post' },
    { id: 2, user: 'Jane Smith', time: '1 hour ago', type: 'Comment' },
    { id: 3, user: 'Alice Johnson', time: '30 minutes ago', type: 'Post' },
    { id: 4, user: 'Bob Brown', time: '10 minutes ago', type: 'Post' },
    // Add more sample data as needed
];

const ConfirmMenu = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [selectAll, setSelectAll] = useState(false); // State to track select all checkbox
    const [selectedItems, setSelectedItems] = useState(new Set()); // State to track selected items
    const itemsPerPage = 5;
    const totalPages = Math.ceil(sampleData.length / itemsPerPage);

    const handleChangePage = (event, newPage) => {
        setCurrentPage(newPage);
    };

    const handleSelectAll = () => {
        const newSelectAll = !selectAll;
        setSelectAll(newSelectAll);
        if (newSelectAll) {
            setSelectedItems(new Set(sampleData.map(item => item.id)));
        } else {
            setSelectedItems(new Set());
        }
    };

    const handleView = (id) => {
        console.log('View details for id:', id);
    };

    const handleConfirm = (id) => {
        console.log('Confirm action for id:', id);
    };

    const handleDelete = (id) => {
        console.log('Delete action for id:', id);
    };

    const handleCheckboxChange = (id) => {
        const newSelectedItems = new Set(selectedItems);
        if (newSelectedItems.has(id)) {
            newSelectedItems.delete(id);
        } else {
            newSelectedItems.add(id);
        }
        setSelectedItems(newSelectedItems);

        if (newSelectedItems.size === sampleData.length) {
            setSelectAll(true);
        } else {
            setSelectAll(false);
        }
    };

    const currentItems = sampleData.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

    return (
        <Box display="flex">
            {/* Sidebar Menu */}
            <Box component={Paper} elevation={3} sx={{ width: '20%', p: 2, height: '100vh', position: 'fixed', bgcolor: '#00AD7C', color: '#ffffff', borderRight: '1px solid #cccccc' }}>
                <Box display="flex" alignItems="center" mb={2}>
                    <img src={Logo} alt="GuildVie Logo" style={{ width: '40px', height: '40px', marginRight: '10px' }} />
                    <Typography variant="h6">GuildVie</Typography>
                </Box>
                <List>
                    {menuOptions.map((option, index) => (
                        <ListItem button key={index} sx={{ '&:hover': { bgcolor: '#008e66' } }}>
                            <ListItemIcon>{option.icon}</ListItemIcon>
                            <ListItemText primary={option.text} />
                        </ListItem>
                    ))}
                </List>
            </Box>

            {/* Main Content */}
            <Box sx={{ ml: '20%', width: '80%', p: 3 }}>
                {/* Search and Confirm All */}
                <AppBar position="static" color="default" sx={{ mb: 2 }}>
                    <Toolbar>
                        <Box display="flex" flexGrow={1} sx={{ mr: 2 }}>
                            <TextField
                                label="Search"
                                variant="outlined"
                                fullWidth
                            />
                        </Box>
                        <Button variant="contained" color="primary" sx={{ bgcolor: '#00AD7C' }}>
                            Confirm All
                        </Button>
                    </Toolbar>
                </AppBar>

                {/* Table */}
                <TableContainer component={Paper}>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell padding="checkbox">
                                    <Checkbox
                                        checked={selectAll}
                                        onChange={handleSelectAll}
                                    />
                                </TableCell>
                                <TableCell align="center">Id</TableCell>
                                <TableCell align="center">User</TableCell>
                                <TableCell align="center">Time</TableCell>
                                <TableCell align="center">Type</TableCell>
                                <TableCell align="center">Actions</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {currentItems.map((item) => (
                                <TableRow key={item.id}>
                                    <TableCell padding="checkbox">
                                        <Checkbox
                                            checked={selectedItems.has(item.id)}
                                            onChange={() => handleCheckboxChange(item.id)}
                                        />
                                    </TableCell>
                                    <TableCell align="center">{item.id}</TableCell>
                                    <TableCell align="center">{item.user}</TableCell>
                                    <TableCell align="center">{item.time}</TableCell>
                                    <TableCell align="center">{item.type}</TableCell>
                                    <TableCell align="center">
                                        <IconButton onClick={() => handleView(item.id)}>
                                            <VisibilityIcon />
                                        </IconButton>
                                        <IconButton onClick={() => handleConfirm(item.id)}>
                                            <CheckIcon color="primary" />
                                        </IconButton>
                                        <IconButton onClick={() => handleDelete(item.id)}>
                                            <DeleteIcon color="error" />
                                        </IconButton>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>

                {/* Pagination */}
                <Box mt={2} display="flex" justifyContent="center">
                    <Pagination
                        count={totalPages}
                        page={currentPage}
                        onChange={handleChangePage}
                        color="primary"
                    />
                </Box>
            </Box>
        </Box>
    );
};

export default ConfirmMenu;
