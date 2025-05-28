import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import '../css/Login.css';

function Login() {

return(

<div>
    <div className='logo'>
        <img src="/image.png" alt="Logo" />
        <img src="/Alexandria.png" alt="Logo 2" />
    </div>
    <div className='Center'>
        <div className='PainelLogin'>
            <h3 className='IniciarSessao'>Iniciar Sessão:</h3>
            <input type="text" placeholder="Nome" className='InputLogin1'/>
            <input type="text" placeholder="Senha" className='InputLogin2'/>
            <button className='IniciarSessaoButton'><Link to="/">Iniciar Sessão</Link></button>
            <div className='SemConta'>
                <p>Não possui uma conta?<Link to="/cadastro" className='Cadastre-se'> Cadastre-se</Link></p>
            </div>
        </div>
    </div>
</div>

);
}

export default Login;