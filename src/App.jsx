import "./App.css";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import React from 'react';
import Home from './views/User/Home';

import BlogAboutLife from "./views/User/BlogAboutLife";
import RecipePage from "./views/User/RecipePage";
import TestBMIPage from "./views/User/TestBMIPage";
import BlogDetailPage from "./views/User/BlogDetailPage";
import RecipeDetailsPage from "./views/User/RecipeDetailsPage";


function App() {
  return (
   <RecipeDetailsPage/>
  )
}

export default App;
