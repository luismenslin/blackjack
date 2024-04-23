import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { MainPage } from './app/components/MainPage';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <MainPage />
  </React.StrictMode>
);
