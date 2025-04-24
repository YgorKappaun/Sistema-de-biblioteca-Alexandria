import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import VisualizaLivro from './pages/VisualizaLivros';
import CadastraLivro from './pages/CadastraLivros';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/visualizalivro/:id" element={<VisualizaLivro />} />
      <Route path="/cadastralivro" element={<CadastraLivro />} />
    </Routes>
  );
}

export default App;
