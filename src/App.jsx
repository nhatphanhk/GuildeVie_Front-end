import "./App.css";
import SellerHomePage from "./views/SellerHomePage";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Footer from './components/Footer';
import React from 'react';

function App() {
  return (
    <div className="App">
      <header className="App-header"> 
          <SellerHomePage/>
          <CssBaseline />
            
      </header>
      <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
                <header> {/* Your header here */} </header>
                <main style={{ flex: 1 }}> {/* Your main content here */} </main>
                <Footer />
            </div>
    </div>
  );

}

export default App;
