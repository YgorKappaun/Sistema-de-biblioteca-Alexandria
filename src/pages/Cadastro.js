import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import '../css/Cadastro.css';

function Cadastro() {

return(

<div>
    <div className='logo'>
        <img src="/image.png" alt="Logo" />
        <img src="/Alexandria.png" alt="Logo 2" />
    </div>
    <div className='Center'>
        <div className='PainelLogin'>
            <h3 className='Cadastro'>Cadastre-se:</h3>
            <input type="text" placeholder="Nome" className='InputLogin1'/>
            <input type="text" placeholder="E-mail" className='InputLogin2'/>
            <input type="text" placeholder="Senha" className='InputLogin3'/>
            <input type="text" placeholder="Confirmação de senha" className='InputLogin4'/>
            <button className='IniciarSessaoButton'><Link to="/">Criar Conta</Link></button>
            <div className='SemConta'>
                <p>Já possui uma conta?<Link to="/login" className='Entrar'> Entrar</Link></p>
            </div>
        </div>
    </div>
</div>

);
}

export default Cadastro;