import React from "react";
import "./Intro.css";
import contractInterface from '../contract-abi.json';
import { useContractRead } from "wagmi";

function Intro () {
    const contractConfig = {
        addressOrName: '0xBB75179672bf0140733B2843bA13E6C666C5D74D',
        contractInterface: contractInterface,
      };

    return (
        <section className="Intro">
            <h1 className="IntroTitle">Promised Lands. <br /> For promised people.</h1>
            <p className="IntroText">Promised land is an excellent project made by gonza and agu, a totally falopa designed virtually and specifically for you.</p>
            <img 
                src="land-arabe.jpeg"
                alt='Illustration of the central Promised Lands NFT'
                className="IntroLandImage"
            >
            </img>
            {/* <button className="IntroButton">MINT A LAND</button> */}
        </section>
    );
}

export { Intro };