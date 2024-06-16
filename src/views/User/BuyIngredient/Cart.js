import React, { useState } from 'react';
import { Box, Container, Grid, Typography, Button, Checkbox, IconButton, Paper, TextField } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';

import ingreImage3 from '../../../assets/Img/26_1.jpg';

const ingredientsData = [
    { id: 1, name: 'Ingredient 1', unit: '100 Gram', price: 30, originalPrice: 40, image: ingreImage3 },
    { id: 2, name: 'Ingredient 2', unit: '200 Gram', price: 50, originalPrice: 60, image: ingreImage3 },
    // Thêm các nguyên liệu khác vào đây
];

const Cart = () => {
    const [ingredients, setIngredients] = useState(
        ingredientsData.map(ingredient => ({
            ...ingredient,
            quantity: 1,
            checked: false,
        }))
    );

    const [discountCode, setDiscountCode] = useState('');
    const [discountApplied, setDiscountApplied] = useState(false);

    const handleQuantityChange = (id, delta) => {
        setIngredients(prevIngredients =>
            prevIngredients.map(ingredient =>
                ingredient.id === id
                    ? { ...ingredient, quantity: Math.max(1, ingredient.quantity + delta) }
                    : ingredient
            )
        );
    };

    const handleCheckboxChange = (id) => {
        setIngredients(prevIngredients =>
            prevIngredients.map(ingredient =>
                ingredient.id === id
                    ? { ...ingredient, checked: !ingredient.checked }
                    : ingredient
            )
        );
    };

    const handleApplyDiscount = () => {
        if (discountCode.trim() === 'DISCOUNT10') {
            setDiscountApplied(true);
        } else {
            alert('Invalid discount code');
        }
    };

    const totalPrice = ingredients
        .filter(ingredient => ingredient.checked)
        .reduce((total, ingredient) => total + ingredient.price * ingredient.quantity, 0);

    const discountedTotalPrice = discountApplied ? totalPrice * 0.9 : totalPrice;

    return (
        <Box>
            {/* Banner */}
            <Box>
                <img src="https://www.wayne-local.com/media/site/department/menus%20banner.png" alt="Banner" width="100%" />
            </Box>
            <br />
            <Container maxWidth="lg">
                <Box display="flex" justifyContent="space-between" alignItems="center" mb={2}>
                    <Box flex={1} />
                    <Box display="flex" alignItems="center" flex={1} justifyContent="center">
                        <TextField
                            label="Discount Code"
                            variant="outlined"
                            value={discountCode}
                            onChange={(e) => setDiscountCode(e.target.value)}
                            sx={{ marginRight: 2 }}
                        />
                        <Button variant="contained" color="primary" onClick={handleApplyDiscount} sx={{ bgcolor: '#00AD7C' }}>
                            Apply
                        </Button>
                    </Box>
                    <Box flex={1} display="flex" justifyContent="flex-end">
                        <IconButton color="primary" aria-label="cart">
                            <ShoppingCartIcon sx={{ fontSize: 40 }} />
                        </IconButton>
                    </Box>
                </Box>
                <Typography variant="h3" gutterBottom>
                    Cart
                </Typography>
                <Grid container spacing={4} direction="column">
                    {ingredients.map(ingredient => (
                        <Grid item xs={12} key={ingredient.id}>
                            <Paper elevation={3} sx={{ display: 'flex', alignItems: 'center', p: 2 }}>
                                <Box sx={{ flex: 1, display: 'flex', alignItems: 'center' }}>
                                    <Checkbox
                                        checked={ingredient.checked}
                                        onChange={() => handleCheckboxChange(ingredient.id)}
                                    />
                                    <img src={ingredient.image} alt={ingredient.name} width="250px" style={{ marginLeft: '8px' }} />
                                </Box>
                                <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column', ml: 2 }}>
                                    <Typography variant="h5" sx={{ fontSize: '1.7rem' }}>{ingredient.name}</Typography>
                                    <Typography variant="body2" color="textSecondary" sx={{ fontSize: '1.4rem' }}>
                                        Unit: {ingredient.unit}
                                    </Typography>
                                </Box>
                                <Box sx={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                                    <Box display="flex" alignItems="center">
                                        <IconButton onClick={() => handleQuantityChange(ingredient.id, -1)} sx={{ color: '#00AD7C' }}>
                                            <RemoveIcon />
                                        </IconButton>
                                        <Typography variant="body2" sx={{ mx: 1, fontSize: '1.4rem' }}>
                                            {ingredient.quantity}
                                        </Typography>
                                        <IconButton onClick={() => handleQuantityChange(ingredient.id, 1)} sx={{ color: '#00AD7C' }}>
                                            <AddIcon />
                                        </IconButton>
                                    </Box>
                                    <Box sx={{ textAlign: 'right' }}>
                                        <Typography variant="h6" sx={{ fontSize: '1.7rem' }}>${ingredient.price * ingredient.quantity}</Typography>
                                        <Typography variant="body2" color="textSecondary" sx={{ textDecoration: 'line-through', fontSize: '1.4rem' }}>
                                            ${ingredient.originalPrice * ingredient.quantity}
                                        </Typography>
                                    </Box>
                                </Box>
                            </Paper>
                        </Grid>
                    ))}
                </Grid>
                <Box mt={4} display="flex" justifyContent="space-between" alignItems="center">
                    <Typography variant="h5" sx={{ fontSize: '1.8rem', fontWeight: 'bold', color: '#00AD7C' }}>
                        Total: ${discountedTotalPrice.toFixed(2)}
                    </Typography>
                    <Button variant="contained" color="primary" sx={{ bgcolor: '#00AD7C', fontSize: '1.2rem' }}>
                        Order
                    </Button>
                </Box>
            </Container>
        </Box>
    );
};

export default Cart;
