import "./App.css";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import React from 'react';
import Home from './views/User/Home';

import BlogAboutLife from "./views/User/BlogAboutLife";
import RecipePage from "./views/User/RecipePage";
import TestBMIPage from "./views/User/TestBMIPage";
import BlogDetail from "./components/User/BlogComponet/blogDetails";


function App() {
  return (
     <BlogDetail/>
  )
}

export default App;
