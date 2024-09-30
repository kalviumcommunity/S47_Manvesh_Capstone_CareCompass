import React from 'react';
import ReactDOM from 'react-dom/client';
import { Auth0Provider } from '@auth0/auth0-react';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <Auth0Provider
    domain={import.meta.env.VITE_AUTH0_DOMAIN} // Your Auth0 Domain
    clientId={import.meta.env.VITE_AUTH0_CLIENT_ID} // Your Auth0 Client ID
    redirectUri={window.location.origin}
  >
    <App />
  </Auth0Provider>
);
