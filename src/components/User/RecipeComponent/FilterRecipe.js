import React, { useState } from 'react';
import {
  Box,
  Drawer,
  FormGroup,
  FormControlLabel,
  Checkbox,
  Typography,
} from '@mui/material';

const filters = {
  Time: ['10-20 min', '20-30 min', '30-45 min'],
  Country: ['Vietnamese', 'India', 'Chinaese', 'Thailand', 'Korea'],
  Category: ['Vegan', 'non-Vergan'],
};

const FilterSection = ({ title, options, selectedOptions, handleChange }) => (
  <Box sx={{ mb: 4 }}>
    <Typography variant="h6">{title}</Typography>
    <FormGroup>
      {options.map((option) => (
        <FormControlLabel
          control={
            <Checkbox
              checked={selectedOptions.includes(option)}
              onChange={() => handleChange(title, option)}
            />
          }
          label={option}
          key={option}
        />
      ))}
    </FormGroup>
  </Box>
);

const FilterRecipe = () => {
  const [selectedFilters, setSelectedFilters] = useState({
    Time: [],
    Country: [],
    Category: [],
  });

  const handleFilterChange = (category, option) => {
    setSelectedFilters((prevFilters) => {
      const isSelected = prevFilters[category].includes(option);
      if (isSelected) {
        return {
          ...prevFilters,
          [category]: prevFilters[category].filter((item) => item !== option),
        };
      } else {
        return {
          ...prevFilters,
          [category]: [...prevFilters[category], option],
        };
      }
    });
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <Drawer
        variant="permanent"
        anchor="left"
        sx={{
          width: 250,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: { width: 250, boxSizing: 'border-box' },
        }}
      >
        <Box sx={{ p: 2 }}>
          <Typography variant="h4" gutterBottom>
            Fillter
          </Typography>
          {Object.keys(filters).map((category) => (
            <FilterSection
              key={category}
              title={category}
              options={filters[category]}
              selectedOptions={selectedFilters[category]}
              handleChange={handleFilterChange}
            />
          ))}
        </Box>
      </Drawer>
      
    </Box>
  );
};

export default FilterRecipe;
