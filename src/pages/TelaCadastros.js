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
                    <button className='ButtonCadastros' onClick={() => setMostrarCadastroLivro(true)}>Cadastrar Livros</button>
                    <button className='ButtonCadastros'onClick={() => setMostrarCadastroLivro(false)}>Cadastrar Autores</button>
                </div>
                <MenuSimples/>
            </div>

            {mostrarCadastroLivro ? (
                <div className='CadastroLivro'>

                    <h2 className='CadastrosTitulo'>Cadastro de Livros</h2>

                    <input type="text" placeholder="Título do livro" className="InputdeCadastros"/>
                    <textarea rows="4" cols="50" placeholder="Sinopse" className="InputdeCadastros"></textarea>
                    <input type="text" placeholder="Idioma" className="InputdeCadastros"/>
                    <input type="text" placeholder="Páginas" className="InputdeCadastros"/>
                    <input type="text" placeholder="Editora" className="InputdeCadastros"/>
                    <input type="text" placeholder="Localização" className="InputdeCadastros"/>
                    <input type="date" placeholder="Ano de publicação" className="InputdeCadastros MarginButton"/>
                    <form action="/upload" method="post" encType="multipart/form-data">
                        <label htmlFor="imagem" className="botao-upload">Selecionar imagem</label>
                        <input type="file" id="imagem" name="imagem" accept="image/*" className="input-escondido" />
                    </form>
                </div>
            ) : (
                <div className='CadastroAutor'>

                    <h2 className='CadastrosTitulo'>Cadastro de Autores</h2>

                    <input type="text" placeholder="Nome" className="InputdeCadastros"/>
                    <textarea rows="4" cols="50" placeholder="Biográfia" className="InputdeCadastros"></textarea>
                    <input type="date" placeholder="Ano de nascimento" className="InputdeCadastros MarginButton"/>
                    <form action="/upload" method="post" encType="multipart/form-data">
                        <label htmlFor="imagem" className="botao-upload">Selecionar imagem</label>
                        <input type="file" id="imagem" name="imagem" accept="image/*" className="input-escondido" />
                    </form>
                </div>
            )}
        </div>
    );
}

export default TeladeCadastros;