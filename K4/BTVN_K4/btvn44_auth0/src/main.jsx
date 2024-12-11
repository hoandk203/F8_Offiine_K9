import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { Auth0Provider } from '@auth0/auth0-react';
import './index.css'
import './output.css'
import Provider from './core/Provider.jsx';

createRoot(document.getElementById('root')).render(
  // <StrictMode>
      <Auth0Provider
          domain="dev-dsz1fniefq0sjjz4.us.auth0.com"
          clientId="YFPBiGigL1aljUbvrCsZu8t9e5533oWe"
          authorizationParams={{
              redirect_uri: window.location.origin
          }}
      >
          <Provider>
            <App />
          </Provider>
      </Auth0Provider>,
  /*</StrictMode>,*/
)
