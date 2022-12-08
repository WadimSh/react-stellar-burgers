import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import './index.css';
import App from './components/app/App.jsx';
import rootReducer from './services/reducers/root-reducer';
import reportWebVitals from './reportWebVitals';

const store = configureStore({
  reducer: rootReducer,
  middleware: [thunk],
  devTools: process.env.NODE_ENV !== 'production'
})

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

reportWebVitals();
