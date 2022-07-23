import React from "react";
import "./Intro.css";
import contractInterface from '../contract-abi.json';
import { useContractRead } from "wagmi";

function Intro () {
    const contractConfig = {
        addressOrName: '0x746B7D4c3BA8fF0B930F894E7416CaF802CF20Ee',
        contractInterface: contractInterface,
      };

    return (
        <section className="Intro">
            
        </section>
    );
}

export { Intro };