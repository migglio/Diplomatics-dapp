import './Header.css';
import React from 'react';
import { ConnectButton } from '@rainbow-me/rainbowkit';

function Header () {
    return (
        <div className='HeaderContainer'>
            <img 
                src="diplomatic-logo.png"
                alt="Diplomatic Logo"
                className="HeaderLogo"
            >
            </img>
            <div className='connect-wallet-button'>
                <ConnectButton  showBalance={{ smallScreen: false }}/>
            </div>
        </div>
    );
}

export { Header };