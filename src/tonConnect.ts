// src/tonConnect.ts
import { TonConnect, WalletConnectionSource, WalletConnectionSourceHTTP } from '@tonconnect/sdk';

const tonConnect = new TonConnect({
  manifestUrl: process.env.REACT_APP_MANIFEST_URL,
});

const walletSource: WalletConnectionSourceHTTP = {
  bridgeUrl: 'https://bridge.tonapi.io/bridge',
  universalLink: 'https://tonkeeper.com/ton-connect',
};

export const connectWallet = async (): Promise<string | null> => {
  try {
    const address = await tonConnect.connect(walletSource);
    return address;
  } catch (error) {
    console.error('Failed to connect wallet:', error);
    return null;
  }
};


export default tonConnect;
