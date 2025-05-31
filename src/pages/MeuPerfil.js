import React, { useState } from 'react';
import { useLocation, useParams, useNavigate } from 'react-router-dom';
import MenuSimples from '../components/MenuUsuario';
import '../css/MeuPerfil.css';
import livrosMock from '../components/arraylivros';

function MeuPerfil(){

    const navigate = useNavigate();

    const [busca, setBusca] = useState('');

    const livrosFiltrados = livrosMock.filter((livro) =>
        livro.titulo.toLowerCase().includes(busca.toLowerCase())
    );

    const handleLivroClick = (livro) => {
        navigate(`/visualizalivro/${livro.id}`, { state: { livro } });
    };

    return(
        <div>
            <div className='Busca'>
                <div className='BarraBusca'>
                </div>
                <MenuSimples/>
            </div>
            <div>
                <h2 className='PerfilUsuario'>Meu Perfil</h2>
                <div className='InformacoesUsuario'>
                    <div>
                        <img src="https://img.freepik.com/fotos-gratis/jovem-barbudo-com-camisa-listrada_273609-5677.jpg?semt=ais_hybrid&w=740" className='FotoUsuario'></img>
                    </div>
                    <div className='InfomacoesGerais'>
                        <div>
                            <p className='NomeUsuario'>Nome Exibição</p>
                            <p className='EmailUsuario'>E-mail</p>
                        </div>
                        <div className='DemaisInformacoes'>
                            <p>Instituição</p>
                            <p>Curso</p>
                            <p>Matricula</p>
                        </div>
                    </div>
                </div>
        </div>
        
        <div>
            <h2 className='Favoritos'>Favoritos</h2>
            <div className="livros-container LinhaDivisoria">
                {livrosFiltrados.slice(0, 5).map((livro) => (
            <div
                    key={livro.id}
                    className="livro-card"
                    onClick={() => handleLivroClick(livro)}
                    style={{ cursor: 'pointer' }}>
                    <img src={livro.imagem} alt={livro.titulo} className="livro-imagem" />
                    <h3>{livro.titulo}</h3>
                    <p>Nota: {livro.nota}</p>
                </div>
                ))}
                {livrosFiltrados.length === 0 && (
                <p style={{ padding: '1rem' }}>Nenhum livro encontrado.</p>
                )}
            </div>
        </div>

         <div>
            <h2 className='LidosPorUltimo'>Lidos por último</h2>
            <div className="livros-container LinhaDivisoria">
                {livrosFiltrados.slice(3, 8).map((livro) => (
            <div
                    key={livro.id}
                    className="livro-card"
                    onClick={() => handleLivroClick(livro)}
                    style={{ cursor: 'pointer' }}>
                    <img src={livro.imagem} alt={livro.titulo} className="livro-imagem" />
                    <h3>{livro.titulo}</h3>
                    <p>Nota: {livro.nota}</p>
                </div>
                ))}
                {livrosFiltrados.length === 0 && (
                <p style={{ padding: '1rem' }}>Nenhum livro encontrado.</p>
                )}
            </div>
        </div>

    </div>
    )
}

export default MeuPerfil;