import React from 'react';
import ReactDOM from 'react-dom/client';
import AppRoutes from './routes.js';
import './index.css';
import CadastradosProvider from 'contextos/Cadastros.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <CadastradosProvider>
      <AppRoutes />
    </CadastradosProvider>
  </React.StrictMode>
);

