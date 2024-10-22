import React, { useState, useEffect } from 'react';
import './App.css';
import { useQuery, useMutation, gql } from '@apollo/client';
import { useLocation } from 'react-router-dom';
import tapimg from './assets/images/tap.png'
import tonConnect from './tonConnect';
import { TonConnectButton } from '@tonconnect/ui-react';

const GET_USER = gql`
  query GetUser($id: String!) {
    getUser(id: $id) {
      id
      coins
    }
  }
`;

const UPDATE_USER = gql`
  mutation UpdateUser($id: String!, $coins: Int!) {
    updateUser(id: $id, coins: $coins) {
      id
      coins
    }
  }
`;

const App: React.FC = () => {
  const [coins, setCoins] = useState(0);
  const [userId, setUserId] = useState<string>();
  // const [walletAddress, setWalletAddress] = useState<string | null>(null);

  const { data } = useQuery(GET_USER, {
    variables: { id: userId },
    skip: !userId,
  });

  const [updateUser] = useMutation(UPDATE_USER);

  useEffect(() => {
    if (data && data.getUser) {
      setCoins(data.getUser.coins);
    }
  }, [data]);

  const location = useLocation();

  useEffect(() => {
    // Extract ID from pathname
    const pathname = location.pathname;
    const id = pathname.split('=')[1]; // assuming the format is /id=123
    if (id) {
      setUserId(id);
    }
  }, [location.pathname]);

  const handleTap = async () => {
    const newCoins = coins + 1;
    setCoins(newCoins);

    if (userId) {
      await updateUser({ variables: { id: userId, coins: newCoins } });
    }

    // Add animation class
    const img = document.querySelector('.tap-img');
    if (img) {
      img.classList.add('animate-tap');
      setTimeout(() => {
        img.classList.remove('animate-tap');
      }, 500); // Match the duration of the animation
    }
  };

  return (
    <div>
      <header className="App-header">
        <h1>TapMe </h1>
        <TonConnectButton />
      </header>
      <div className='App-wrapper'>
        <div className="App">
          {userId ? (
            <>
              <p>User ID: {userId}</p>
              <h2>💰 {coins}</h2>
              <img src={tapimg} onClick={handleTap} className='tap-img' alt="Tap Me!" />
            </>
          ) : (
            <p>Connecting to wallet...</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default App;
