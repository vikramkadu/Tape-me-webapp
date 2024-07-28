import React, { useState, useEffect } from 'react';
import './App.css';
import { useQuery, useMutation, gql } from '@apollo/client';
import { useLocation } from 'react-router-dom';

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
  const [userId, setUserId] = useState<string >();
  const [walletAddress, setWalletAddress] = useState<string | null>(null);

  const { data, refetch } = useQuery(GET_USER, {
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
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>TapMe Game</h1>
        {userId ? (
          <>
            <p>User ID: {userId}</p>
            <p>Coins: {coins}</p>
            <button onClick={handleTap} className="tap-button">Tap Me!</button>
          </>
        ) : (
          <p>Connecting to wallet...</p>
        )}
      </header>
    </div>
  );
};

export default App;
