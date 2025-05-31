import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import livrosMock from '../components/arraylivros';
import '../css/MeusEmprestimos.css';
import MenuSimples from '../components/MenuUsuario';

function MeusEmprestimos(){

    const livro = livrosMock.find(l => l.id === 1);

    return(
        <div>
            <div className='Busca'>
                <div className='BarraBusca'></div>
                <MenuSimples/>
            </div>
            <div>
                <h2 className='MeusEmprestimos'>Meus empréstimos</h2>
            </div>
            <div className='LivrosEmprestimo'>
                <img src={livro.imagem} className='ImagemLivro'/>
                <div className='InformacoesLivrosEmprestimo'>
                    <div className='InformacoesLivros'>
                        <h3 className='TituloLivroEmprestimo'>{livro.titulo}</h3>
                        <p className='AutoreAno'>{livro.autor} / {livro.anoPublicacao}</p>
                        <p className='DescricaoEmprestimo'>{livro.descricao}</p>
                        <p className='StatusEmprestimo'>Status</p>
                    </div>
                    <div className='NotaeData'>
                        <p>Minha Nota</p>
                        <p>Data Devolução</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MeusEmprestimos;