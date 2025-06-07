import { useState } from 'react';
import '../css/MenuUsuario.css';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

function MenuSimples() {
  const [mostrar, setMostrar] = useState(false);

  return (
    <div className="MenuContainerPerfil">
      <button onClick={() => setMostrar(!mostrar)}>
        <div className='MeuPerfil'>
          <p>Moretto</p>
          <img src="/Moretto.png" className='ImagemMeuPerfil' />
        </div>
      </button>

      {mostrar && (
        <div className="MenuDropdown">
          <Link to="/" className='Hovermenu'>Home</Link>
          <Link to="/meuperfil" className='Hovermenu'>Meu Perfil</Link>
          <Link to="/meusemprestimos" className='Hovermenu'>Emprestimos</Link>
          <Link to="/telacadastros" className='Hovermenu'>Cadastros</Link>
          <Link to="/login" className='LogOut'>LogOut</Link>
        </div>
      )}
    </div>
  );
}

export default MenuSimples;
