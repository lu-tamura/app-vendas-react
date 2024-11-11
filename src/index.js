import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CadastroUser from './CadastroUser';
import ListarUsuario from './components/ListarUsuario';
import Atualizar from './components/Atualizar';
import CadastroProduto from './CadastroProduto';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<App/>}></Route>
      <Route path='/create-user' element={<CadastroUser/>}></Route>
      <Route path='/listar-user' element={<ListarUsuario/>}></Route>
      <Route path='/update-user/:id' element={<Atualizar/>}></Route>
      <Route path='/create-produto' element={<CadastroProduto/>}></Route>
    </Routes>
    </BrowserRouter>
    
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
