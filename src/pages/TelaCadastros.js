import { useState } from 'react';
import '../css/TelaCadastros.css';
import { useNavigate } from 'react-router-dom';
import MenuSimples from '../components/MenuUsuario';

function TeladeCadastros() {
  const [mostrarCadastroLivro, setMostrarCadastroLivro] = useState(true);

  return (
    <div>
      <div className='Busca'>
        <div className='BarraBusca'>
          <button className='ButtonCadastros' onClick={() => setMostrarCadastroLivro(true)}>
            Cadastrar Livros
          </button>
          <button className='ButtonCadastros' onClick={() => setMostrarCadastroLivro(false)}>
            Cadastrar Autores
          </button>
        </div>
        <MenuSimples />
      </div>

      {mostrarCadastroLivro ? (
        <div>
          <h2 className='CadastrosTitulo'>Cadastro de Livros</h2>
          <form action="/upload" method="post" encType="multipart/form-data" className='CadastroLivro'>
            <input type="text" name="titulo" placeholder="Título do livro" className="InputdeCadastros" required/>
            <textarea name="sinopse" rows="4" cols="50" placeholder="Sinopse" className="InputdeCadastros" required></textarea>
            <input type="text" name="idioma" placeholder="Idioma" className="InputdeCadastros" />
            <input type="number" name="paginas" placeholder="Páginas" className="InputdeCadastros" min="1"/>
            <input type="text" name="editora" placeholder="Editora" className="InputdeCadastros" />
            <input type="text" name="localizacao" placeholder="Localização" className="InputdeCadastros"/>
            <input type="date" name="ano_publicacao" placeholder="Ano de publicação" className="InputdeCadastros MarginButton"/>
            <div className="botoes-imagem-submit">
                <label htmlFor="imagemLivro" className="botao-upload">Selecionar imagem</label>
                <input type="file" id="imagemLivro" name="imagem" accept="image/*" className="input-escondido"/>
                <button type="submit" className="ButtonCadastros MarginButton">Cadastrar Livro</button>
            </div>
        </form>
        </div>
      ) : (
        <div>
          <h2 className='CadastrosTitulo'>Cadastro de Autores</h2>
          <form action="/upload" method="post" encType="multipart/form-data" className='CadastroAutor'>
                <input type="text" name="nome" placeholder="Nome" className="InputdeCadastros" required/>
                <textarea name="biografia" rows="4" cols="50" placeholder="Biografia" className="InputdeCadastros"></textarea>
                <input type="date" name="ano_nascimento" placeholder="Ano de nascimento" className="InputdeCadastros MarginButton"/>
                <div className="botoes-imagem-submit">
                        <label htmlFor="imagemAutor" className="botao-upload">Selecionar imagem</label>
                        <input type="file" id="imagemAutor" name="imagem" accept="image/*" className="input-escondido"/>
                        <button type="submit" className="ButtonCadastros MarginButton">Cadastrar Autor</button>
                </div>
            </form>
        </div>
      )}
    </div>
  );
}

export default TeladeCadastros;