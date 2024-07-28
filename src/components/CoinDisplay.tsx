import React from 'react';

interface CoinDisplayProps {
  coins: number;
}

const CoinDisplay: React.FC<CoinDisplayProps> = ({ coins }) => (
  <p>Coins: {coins}</p>
);

export default CoinDisplay;
