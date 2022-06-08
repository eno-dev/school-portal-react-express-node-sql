import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { ToggleProvider } from './components/sidebar-menu/toggleContext';
import { store } from './redux/store' // import your store
import { Provider } from 'react-redux';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <ToggleProvider>
      <App />
    </ToggleProvider>
  </Provider>
);
