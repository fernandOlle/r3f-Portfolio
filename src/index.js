import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Loader from './components/loader';
import Overlay from './components/overlay';

ReactDOM.render(
  <React.StrictMode>
    <App />
    <Overlay />
  </React.StrictMode>,
  document.getElementById('root')
);
