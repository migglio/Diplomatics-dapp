import '@rainbow-me/rainbowkit/styles.css';

import {
  getDefaultWallets,
} from '@rainbow-me/rainbowkit';
import {
  chain,
  configureChains,
  createClient,
} from 'wagmi';
import { alchemyProvider } from 'wagmi/providers/alchemy';
import { publicProvider } from 'wagmi/providers/public';

const { chains, provider } = configureChains(
  [chain.polygonMumbai],
  [
    alchemyProvider({ alchemyId: 'nYr2-OrnkkCx6nC0EF_WtAXohgX8swko' }),
    publicProvider(),
  ],
);
  
const { connectors } = getDefaultWallets({
  appName: 'Diplomatics-Dapp',
  chains,
});
  
const wagmiClient = createClient({
  autoConnect: true,
  connectors,
  provider,
});

export { wagmiClient, chains };