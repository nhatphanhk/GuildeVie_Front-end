import "./App.css";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import React from 'react';
import Home from './views/User/Home';

import BlogAboutLife from "./views/User/BlogAboutLife";
import RecipePage from "./views/User/RecipePage";
import TestBMIPage from "./views/User/TestBMIPage";
import BlogDetailPage from "./views/User/BlogDetailPage";


function App() {
  return (
    <BlogDetailPage/>
  )
}

export default App;
