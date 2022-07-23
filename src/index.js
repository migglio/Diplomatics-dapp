import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import  App from './App';
import { WagmiConfig } from "wagmi";
import { RainbowKitProvider } from "@rainbow-me/rainbowkit";
import { chains, wagmiClient } from '../src/ConnectWallet/configuration';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <WagmiConfig client={wagmiClient}>
      <RainbowKitProvider chains={chains} /* theme={darkTheme({borderRadius: 'none', fontStack: 'system', accentColor: '#000',overlayBlur: 'none'})} */>
        <App />
      </RainbowKitProvider>
    </WagmiConfig>
  </React.StrictMode>
);
