import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import VisualizaLivro from './pages/VisualizaLivros';
import CadastraLivro from './pages/CadastraLivros';
import Login from './pages/Login';
import Cadastro from './pages/Cadastro';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/visualizalivro/:id" element={<VisualizaLivro />} />
      <Route path="/cadastralivro" element={<CadastraLivro />} />
      <Route path="/login" element={<Login />}/>
      <Route path="/cadastro" element={<Cadastro />}/>
    </Routes>
  );
}

export default App;
