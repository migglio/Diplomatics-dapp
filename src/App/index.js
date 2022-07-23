import './App.css';
import React from 'react';
import { Header } from '../Header';
import { Intro } from  '../Intro';
import { Step2 } from '../Step2';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

function App() {
  return (
    <div className="App">
      <Header />
      <Box sx={{width: '60%'}} >
        <Typography variant="h3" component="div" gutterBottom >
        Welcome
        </Typography>
      </Box>
      <Intro />
      <Step2 />
    </div>
  );
}

export default App ;
