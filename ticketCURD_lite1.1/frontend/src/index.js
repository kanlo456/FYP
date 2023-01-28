import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { TicketContextProvider } from './context/TicketContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <TicketContextProvider>
      <App />
    </TicketContextProvider>
  </React.StrictMode>
);


