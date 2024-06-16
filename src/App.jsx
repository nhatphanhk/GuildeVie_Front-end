import React from 'react';
import './App.css';
import Profile from './views/Admin/Profile';
import { Grid } from '@mui/material';
import SidebarSeller from './components/SidebarAdmin';
import Dashboard from './views/Admin/DashBoard';

function App() {
  return (
    <Grid container sx={{ FlexGrow: 1 }}>
      <Grid item xs={3} sx={{position: "relative"}}>
        <SidebarSeller />
      </Grid>
      <Grid item xs={9} sx={{position: "static"}}>
        <Dashboard />
      </Grid>
    </Grid>
  );
}

export default App;

