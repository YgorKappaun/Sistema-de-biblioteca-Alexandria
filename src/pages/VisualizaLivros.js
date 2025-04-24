import React from 'react';
import { useLocation, useParams, useNavigate } from 'react-router-dom';
import livrosMock from '../components/arraylivros';
import '../css/VisualizaLivros.css';
import Layout from '../components/Layout';

function VisualizaLivro() {

  const { id } = useParams();
  const location = useLocation();
  const livroAtual = location.state?.livro;
  const navigate = useNavigate();

  if (!livroAtual) {
    return <p>Nenhuma informação do livro encontrada.</p>;
  }

  // Simulação de lógica para obter livros relacionados
  const livrosRelacionados = livrosMock.filter(
    (livro) => livro.id !== livroAtual.id // Exclui o livro atual da lista
  ).slice(0, 5); // Pega os 5 primeiros como exemplo

  const handleLivroClick = (livro) => {
    navigate(`/visualizalivro/${livro.id}`, { state: { livro } });
  };

  return (
    <Layout>
      <div className='Busca'>
        <div className='BarraBusca'>
          <img src="../Pesquisa.png" className="Pesquisaimg" alt="ícone pesquisa" />
          <input
            type="text"
            placeholder="Começar a procurar..."
            className='Pesquisacampo'
          />
        </div>
        <div className='MeuPerfil'>
          <p>Moretto</p>
          <img src="/Moretto.png" className='ImagemMeuPerfil' alt="Meu Perfil" />
        </div>
      </div>
      <div className='Superior'>
        <div>
          <img src={livroAtual.imagem} alt={livroAtual.titulo} className='Tamanholivro' />
        </div>
        <div>
          <div>
            <h2 className='TituloLivro'>{livroAtual.titulo}</h2>
            <p className='NomeAno'>{livroAtual.autor} - {livroAtual.anoPublicacao}</p>
            <p className='NotaLivro'> Nota: {livroAtual.nota}</p>
          </div>
          <p className='DescricaoLivro'>{livroAtual.descricao}</p>
        </div>
      </div>
      <div className='LinhaSeparacao'></div>
      <div className='Inferior'>
        <div className='InformacaoAutor'>
          <div className='Autor'>
            <img src={livroAtual.infoAutor.foto} alt={livroAtual.autor} className='FotoAutor' />
            <p className='NomeAutor'>{livroAtual.autor}</p>
          </div>
          <p className='PrincipaisObras'>Obras: {livroAtual.infoAutor.principaisObras}.</p>
        </div>
        <div>
          <div className='InformacoesLivro'>
            <div className='alinhamento'>
              <p className='TextoInformacoes'>Idioma</p>
              <img src='/globo.png' alt='Simbolo de um globo' className='ImagemInformacoes'></img>
              <p>{livroAtual.idioma}</p>
            </div>
            <div className='LinhaInformacoes'></div>
            <div className='alinhamento'>
              <p className='TextoInformacoes'>Páginas</p>
              <img src='/paginas.png' alt='Simbolo de um livro' className='ImagemInformacoes'></img>
              <p>{livroAtual.numeroPaginas}</p>
            </div>
            <div className='LinhaInformacoes'></div>
            <div className='alinhamento'>
              <p className='TextoInformacoes'>Editora</p>
              <img src='/editora.png' alt='Simbolo de um prédio' className='ImagemInformacoes'></img>
              <p>{livroAtual.editora}</p>
            </div>
            <div className='LinhaInformacoes'></div>
            <div className='alinhamento'>
              <p className='TextoInformacoes'>Localizador</p>
              <img src='/localizacao.png' alt='Simbolo de livros' className='ImagemInformacoes'></img>
              <p>{livroAtual.localizacao}</p>
            </div>
          </div>
        </div>
      </div>

      {livrosRelacionados.length > 0 && (
        <div className="carrossel-container">
          <h2>Títulos semelhantes</h2>
          <div className="carrossel">
            {livrosRelacionados.map((livro) => (
              <div
                key={livro.id}
                className="livro-card-carrossel"
                onClick={() => handleLivroClick(livro)}
                style={{ cursor: 'pointer' }}
              >
                <img src={livro.imagem} alt={livro.titulo} className="livro-imagem-carrossel" />
                <h3>{livro.titulo}</h3>
                <p>Nota: {livro.nota}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </Layout>
  );
}

export default VisualizaLivro;