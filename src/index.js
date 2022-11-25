import React from 'react';
import ReactDOM from 'react-dom/client';
//importamos bootstrap a nuestro proyecto
import 'bootstrap/dist/css/bootstrap.css'
//!Importante: los estilos propios, deben ir debajo del bootstap para qu eno los pise
import './index.css';

import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);