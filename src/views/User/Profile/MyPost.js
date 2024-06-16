import React, { useState } from 'react';
import { AppBar, Avatar, Box, Button, Container, Grid, IconButton, Menu, MenuItem, Paper, TextField, Toolbar, Typography } from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import FavoriteIcon from '@mui/icons-material/Favorite';
import CommentIcon from '@mui/icons-material/Comment';

import profilePic from '../../../assets/Img/26_1.jpg';
import postImage from '../../../assets/Img/26_1.jpg';

const blogPostsData = [
    {
        id: 1,
        username: 'John Doe',
        postTime: '2 hours ago',
        description: 'This is a sample blog post description',
        postImage: postImage,
        likes: 10,
        comments: 5,
    },
    {
        id: 2,
        username: 'Jane Smith',
        postTime: '1 hour ago',
        description: 'Another blog post description',
        postImage: postImage,
        likes: 8,
        comments: 2,
    },
    {
        id: 3,
        username: 'Alice Johnson',
        postTime: '30 minutes ago',
        description: 'Yet another blog post description',
        postImage: postImage,
        likes: 15,
        comments: 4,
    },
    {
        id: 4,
        username: 'Bob Brown',
        postTime: '10 minutes ago',
        description: 'More blog post content',
        postImage: postImage,
        likes: 5,
        comments: 1,
    },
];

const MyPost = () => {
    const [blogPosts, setBlogPosts] = useState(blogPostsData);
    const [menuAnchor, setMenuAnchor] = useState(null);

    const handleMenuOpen = (event) => {
        setMenuAnchor(event.currentTarget);
    };

    const handleMenuClose = () => {
        setMenuAnchor(null);
    };

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
                        <Button variant="contained" color="primary">Edit Profile</Button>
                    </Grid>
                </Grid>
            </Box>

            {/* Menu */}
            <AppBar position="sticky" color="default">
                <Toolbar>
                    <Box display="flex" flexGrow={1}>
                        <Button color="inherit">Blog</Button>
                        <Button color="inherit">Information</Button>
                    </Box>
                </Toolbar>
            </AppBar>

            {/* Post Section */}
            <Container maxWidth="lg">
                <Box mt={2}>
                    <Paper elevation={3} sx={{ p: 2, mb: 2 }}>
                        <Typography variant="h6">Create a new post</Typography>
                        <TextField
                            label="What's on your mind?"
                            variant="outlined"
                            fullWidth
                            multiline
                            rows={4}
                            sx={{ mt: 2 }}
                        />
                        <Button variant="contained" color="primary" sx={{ mt: 2, bgcolor: '#00AD7C' }}>
                            Post
                        </Button>
                    </Paper>
                    <Box>
                        <Grid container spacing={4} direction="column">
                            {blogPosts.slice(0, 3).map(post => ( // Display only the first 3 posts
                                <Grid item xs={12} key={post.id}>
                                    <Paper elevation={3} sx={{ display: 'flex', flexDirection: 'column', p: 2, m: 2 }}> {/* Add padding and margin */}
                                        <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                            <Avatar src={profilePic} alt={post.username} sx={{ mr: 2 }} />
                                            <Box sx={{ flex: 1 }}>
                                                <Typography variant="subtitle1">{post.username}</Typography>
                                                <Typography variant="body2" color="textSecondary">{post.postTime}</Typography>
                                            </Box>
                                            <IconButton onClick={handleMenuOpen}>
                                                <MoreVertIcon />
                                            </IconButton>
                                            <Menu anchorEl={menuAnchor} keepMounted open={Boolean(menuAnchor)} onClose={handleMenuClose}>
                                                <MenuItem onClick={handleMenuClose}>Edit</MenuItem>
                                                <MenuItem onClick={handleMenuClose}>Delete</MenuItem>
                                            </Menu>
                                        </Box>
                                        <Box mt={2}>
                                            <Typography variant="body1">{post.description}</Typography>
                                            <Box mt={2} display="flex" justifyContent="center">
                                                <Box component="img" src={post.postImage} alt="Post" sx={{ width: '100%', height: 'auto', maxHeight: '500px', objectFit: 'cover', borderRadius: 2 }} />
                                            </Box>
                                        </Box>
                                        <Box mt={2} sx={{ display: 'flex', alignItems: 'center' }}>
                                            <IconButton>
                                                <FavoriteIcon color="error" />
                                            </IconButton>
                                            <Typography variant="body2" sx={{ mr: 2 }}>{post.likes}</Typography>
                                            <IconButton>
                                                <CommentIcon color="primary" />
                                            </IconButton>
                                            <Typography variant="body2">{post.comments}</Typography>
                                        </Box>
                                    </Paper>
                                </Grid>
                            ))}
                        </Grid>
                    </Box>
                </Box>
            </Container>
        </Box>
    );
};

export default MyPost;
