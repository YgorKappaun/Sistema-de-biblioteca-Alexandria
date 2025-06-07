import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import VisualizaLivro from './pages/VisualizaLivros';
import TelaCadastros from './pages/TelaCadastros';
import Login from './pages/Login';
import Cadastro from './pages/Cadastro';
import MeuPerfil from './pages/MeuPerfil';
import MeusEmprestimos from './pages/MeusEmprestimos';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/visualizalivro/:id" element={<VisualizaLivro />} />
      <Route path="/telacadastros" element={<TelaCadastros />} />
      <Route path="/login" element={<Login />}/>
      <Route path="/cadastro" element={<Cadastro />}/>
      <Route path="/meuperfil" element={<MeuPerfil />}/>
      <Route path="/meusemprestimos" element={<MeusEmprestimos />}/>
    </Routes>
  );
}

export default App;
