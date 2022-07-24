import React from "react";
import "./FirstBox.css";
import contractInterface from '../contract-abi.json';
import Paper from '@mui/material/Paper';
import { useContractRead } from "wagmi";
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';


  const url_form = 'https://forms.gle/Fh5eAsaRqqaaKm5b6';


function FirstBox () {

    return (
        <>
        <h1 className="Welcome">Welcome</h1>
        <Box className="FirstBox">
         <Box className="SecondBox" >   
                <h2 className="BoxTitle">
                    Are you already registered?
                </h2>
                <p className="BoxText">
                    Don’t forget to fill the form, every institution has been curated and allowed by the Diplomatics team.
                </p>
                <button 
                    className="IntroContactButton"
                    onClick={() => window.open(url_form, "_blank")}
                >
                    <img
                        src="contact-us.png" 
                        alt="Contact Us Illustration"
                        className="ButtonImg"
                        >
                    </img>
                    <p className="Text1Contact">
                        Click Here!
                    </p>
                    <p className="Text2Contact">
                        And complete the form.
                    </p>
                </button>
                <p className="BoxText2">
                    You have no need to take care of this if you are already allowed.
                </p>
        </Box>
        </Box>
        </>
    );
}

export { FirstBox };