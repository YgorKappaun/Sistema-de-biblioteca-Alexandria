import React, { useState } from 'react';
import '../css/Sidebar.css';
import { Link } from 'react-router-dom';

function Sidebar() {

  return (
    <div className="Sidebar">
      <div className="Logo">
        <img src="/image.png" alt="Logo" />
        <img src="/Alexandria.png" alt="Logo 2" />
      </div>
          <ul className="ListaMenus">
            <li className="Opcoes"> <Link to="/VisualizaLivros">Biblioteca</Link></li>
            <li className="Opcoes">Adicionar Itens</li>
            <li className="Opcoes">Adicionar Coleção</li>
            <li className="Opcoes">Publicar</li>
            <li className="Opcoes">Painel de controle</li>
          </ul>
    </div>
  );
}

export default Sidebar;
