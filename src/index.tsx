import ReactDOM from 'react-dom/client';
import App from './App';
import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { TonConnectUIProvider } from '@tonconnect/ui-react';


const client = new ApolloClient({
  uri: process.env.REACT_APP_BASE_URL,
  cache: new InMemoryCache(),
});


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <ApolloProvider client={client}>
    <TonConnectUIProvider manifestUrl={process.env.REACT_APP_MANIFEST_URL}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </TonConnectUIProvider>

  </ApolloProvider>,
);
reportWebVitals();

