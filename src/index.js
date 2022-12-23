import React from 'react';
import ReactDOM from 'react-dom/client';
//importamos bootstrap a nuestro proyecto
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
//!Importante: los estilos propios, deben ir debajo del bootstap para qu eno los pise
import './index.css';

//import App from './App';
//import AppRouting from './AppRouting';
//import AppRoutingFinal from './AppRoutingFinal';
import AppEj18 from './ejercicios/leccion 18/App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AppEj18 />
    {/* <AppRoutingFinal/> */}
    
  </React.StrictMode>
);