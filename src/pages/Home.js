import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Layout from '../components/Layout';
import livrosMock from '../components/arraylivros';
import '../css/Home.css';

function Home() {
  const navigate = useNavigate();

  const [busca, setBusca] = useState('');

  const livrosFiltrados = livrosMock.filter((livro) =>
    livro.titulo.toLowerCase().includes(busca.toLowerCase())
  );

  const handleLivroClick = (livro) => {
    navigate(`/visualizalivro/${livro.id}`, { state: { livro } });
  };

  return (
    <Layout>
        
      <div className='Busca'>
        <div className='BarraBusca'>
            <img src="./Pesquisa.png" className="Pesquisaimg" alt="ícone pesquisa" />
            <input
            type="text"
            placeholder="Começar a procurar..."
            className='Pesquisacampo'
            value={busca}
            onChange={(e) => setBusca(e.target.value)}
            />
        </div>
        <div className='MeuPerfil'>
            <p>Moretto</p>
            <img src="/Moretto.png" className='ImagemMeuPerfil'/>
        </div>
      </div>

      <div className="livros-container">
        {livrosFiltrados.map((livro) => (
          <div
            key={livro.id}
            className="livro-card"
            onClick={() => handleLivroClick(livro)}
            style={{ cursor: 'pointer' }}
          >
            <img src={livro.imagem} alt={livro.titulo} className="livro-imagem" />
            <h3>{livro.titulo}</h3>
            <p>Nota: {livro.nota}</p>
          </div>
        ))}

        {livrosFiltrados.length === 0 && (
          <p style={{ padding: '1rem' }}>Nenhum livro encontrado.</p>
        )}
      </div>
    </Layout>
  );
}

export default Home;