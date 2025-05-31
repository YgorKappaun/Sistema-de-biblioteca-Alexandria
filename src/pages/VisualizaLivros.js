import React, { useState } from 'react';
import { useLocation, useParams, useNavigate } from 'react-router-dom';
import livrosMock from '../components/arraylivros';
import '../css/VisualizaLivros.css';
import Layout from '../components/Layout';
import MenuSimples from '../components/MenuUsuario';

function VisualizaLivro() {

  const { id } = useParams();
  const location = useLocation();
  const livroAtual = location.state?.livro;
  const navigate = useNavigate();

  const [termoBusca, setTermoBusca] = useState('');
  const [resultadosBusca, setResultadosBusca] = useState([]);

  const handleBusca = (e) => {
    const valor = e.target.value;
    setTermoBusca(valor);

    if (valor.length > 0) {
      const filtrados = livrosMock.filter(livro =>
        livro.titulo.toLowerCase().includes(valor.toLowerCase()) ||
        livro.autor.toLowerCase().includes(valor.toLowerCase())
      );
      setResultadosBusca(filtrados);
    } else {
      setResultadosBusca([]);
    }
  };

  const handleLivroClick = (livro) => {
    navigate(`/visualizalivro/${livro.id}`, { state: { livro } });
    setTermoBusca('');
    setResultadosBusca([]);
  };

  if (!livroAtual) {
    return <p>Nenhuma informação do livro encontrada.</p>;
  }

  const livrosRelacionados = livrosMock.filter(
    (livro) => livro.id !== livroAtual.id
  ).slice(0, 5);

  return (
    <Layout>
      <div className='Busca'>
        <div className='BarraBusca'>
          <img src="/Pesquisa.png" className="Pesquisaimg" alt="ícone pesquisa" />
          <input
            type="text"
            placeholder="Começar a procurar..."
            className='Pesquisacampo'
            value={termoBusca}
            onChange={handleBusca}
          />
        </div>
        {resultadosBusca.length > 0 && (
          <div className='ResultadosBusca'>
            {resultadosBusca.map((livro) => (
              <div
                key={livro.id}
                className='ItemResultado'
                onClick={() => handleLivroClick(livro)}
                style={{ cursor: 'pointer' }}
              >
                <img src={livro.imagem} alt={livro.titulo} className='ImagemResultado' />
                <div>
                  <p>{livro.titulo} / {livro.autor} / {livro.anoPublicacao}</p>
                  <p> Nota: {livro.nota}</p>
                </div>
              </div>
            ))}
          </div>
        )}
        <MenuSimples />
      </div>
      <div className='Superior'>
        <div>
          <img src={livroAtual.imagem} alt={livroAtual.titulo} className='Tamanholivro' />
        </div>
        <div className='InformacoesLivros'>
          <div>
            <h2 className='TituloLivro'>{livroAtual.titulo}</h2>
            <p className='NomeAno'>{livroAtual.autor} - {livroAtual.anoPublicacao}</p>
            <p className='NotaLivro'> Nota: {livroAtual.nota}</p>
          </div>
          <p className='DescricaoLivro'>{livroAtual.descricao}</p>
        </div>
        <div className='DivEmprestimo'>
          <h3 className='Emprestimo'>Empréstimo</h3>
          <p className='ItemEmEstoque'>EM ESTOQUE</p>
          <button className="Favorito">Adicionar aos favoritos</button>
          <button className='Reservar'>Reservar Livro</button>
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
        <div className='InformacoesLivro'>
          <div className='alinhamento'>
            <p className='TextoInformacoes'>Idioma</p>
            <img src='/globo.png' alt='globo' className='ImagemInformacoes' />
            <p>{livroAtual.idioma}</p>
          </div>
          <div className='LinhaInformacoes'></div>
          <div className='alinhamento'>
            <p className='TextoInformacoes'>Páginas</p>
            <img src='/paginas.png' alt='livro' className='ImagemInformacoes' />
            <p>{livroAtual.numeroPaginas}</p>
          </div>
          <div className='LinhaInformacoes'></div>
          <div className='alinhamento'>
            <p className='TextoInformacoes'>Editora</p>
            <img src='/editora.png' alt='prédio' className='ImagemInformacoes' />
            <p>{livroAtual.editora}</p>
          </div>
          <div className='LinhaInformacoes'></div>
          <div className='alinhamento'>
            <p className='TextoInformacoes'>Localizador</p>
            <img src='/localizacao.png' alt='livros' className='ImagemInformacoes' />
            <p>{livroAtual.localizacao}</p>
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
