import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Overlay from './components/overlay';

ReactDOM.render(
  <React.StrictMode>
    <Suspense fallback={null}>
      <App />
    </Suspense>
    <Overlay />
  </React.StrictMode>,
  document.getElementById('root')
);
