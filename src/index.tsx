import ReactDOM from 'react-dom/client';
import App from './App';
import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';

const client = new ApolloClient({
  uri: 'https://tap-me-node.vercel.app/graphql',
  cache: new InMemoryCache(),
});


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <ApolloProvider client={client}>
      <BrowserRouter>

      <App />
      </BrowserRouter>

  </ApolloProvider>,
);
reportWebVitals();

