// Footer.js
import React from 'react';
import { Box, Typography, Container, Link, Grid, IconButton } from '@mui/material';
import { Facebook, Twitter, Instagram } from '@mui/icons-material';
import logo from '../assets/logo-bar@2x.png';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <Box
            component="footer"
            sx={{
                padding: '20px 0',
                mt: 'auto',
                backgroundColor: '#00AD7C',
                color: 'white',
                position: 'relative',
                top: '60px'
            }}
        >
            <Container maxWidth="lg">
                <Grid container spacing={4} justifyContent="space-between">
                    {/* Information Section */}
                    <Grid item xs={12} sm={4} md={3}>
                        <Box display="flex" alignItems="center" mb={2}>
                            <img src={logo} alt="GuildVie Logo" width="100%" style={{ marginRight: '8px', padding: '5px 0' }} />
                        </Box>
                        <Typography variant="body2" gutterBottom sx={{ fontStyle: 'italic' }}>
                            “Good health - Good vibe - Good diet”
                        </Typography>
                        <Typography variant="body2">
                            Address: 123 Main Street, Anytown, USA
                        </Typography>
                        <Typography variant="body2">
                            Phone: (123) 456-7890
                        </Typography>
                        <Typography variant="body2">
                            Email: info@example.com
                        </Typography>
                    </Grid>

                    {/* Quick Links Section */}
                    <Grid item xs={12} sm={4} md={3}>
                        <Typography variant="h6" gutterBottom>
                            Quick Links
                        </Typography>
                        <Link href="#" color="inherit" variant="body2" display="block" gutterBottom>
                            Home
                        </Link>
                        <Link href="#" color="inherit" variant="body2" display="block" gutterBottom>
                            About Us
                        </Link>
                        <Link href="#" color="inherit" variant="body2" display="block" gutterBottom>
                            Services
                        </Link>
                        <Link href="#" color="inherit" variant="body2" display="block" gutterBottom>
                            Contact
                        </Link>
                    </Grid>

                    {/* Follow Us Section */}
                    <Grid item xs={12} sm={4} md={3}>
                        <Typography variant="h6" gutterBottom>
                            Follow Us
                        </Typography>
                        <Box>
                            <IconButton href="https://facebook.com" target="_blank" color="inherit" sx={{ mr: 1 }}>
                                <Facebook />
                            </IconButton>
                            <IconButton href="https://twitter.com" target="_blank" color="inherit" sx={{ mr: 1 }}>
                                <Twitter />
                            </IconButton>
                            <IconButton href="https://instagram.com" target="_blank" color="inherit" sx={{ mr: 1 }}>
                                <Instagram />
                            </IconButton>
                        </Box>
                    </Grid>
                </Grid>
                <Box mt={4} textAlign="center">
                    <Typography variant="body2">
                        {'© '}
                        <Link color="inherit" href="https://your-website.com/">
                            GuildVie
                        </Link>{' '}
                        {currentYear}
                        {'.'}
                    </Typography>
                </Box>
            </Container>
        </Box>
    );
};

export default Footer;
