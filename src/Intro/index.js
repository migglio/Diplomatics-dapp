import React from "react";
import "./Intro.css";
import contractInterface from '../contract-abi.json';
import Paper from '@mui/material/Paper';
import { useContractRead } from "wagmi";
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const PaperForm = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    textAlign: 'center',
    height: '30vh',
  }));


function Intro () {
    const contractConfig = {
        addressOrName: '0x746B7D4c3BA8fF0B930F894E7416CaF802CF20Ee',
        contractInterface: contractInterface,
      };

    return (
        <Box display='flex' justifyContent='center' marginTop='2%'>
         <Box width='80%'>   
            <PaperForm elevation={3}>
            <Typography fontFamily='Roboto' variant="h5" component="div" gutterBottom >
                1. Complete the Form
            </Typography>
            <Typography>
            Wake up will include a link to this URL on the NFT details page so users can get more information. You can link to your own web page.
            </Typography>
        </PaperForm>
        </Box>
        </Box>
    );
}

export { Intro };