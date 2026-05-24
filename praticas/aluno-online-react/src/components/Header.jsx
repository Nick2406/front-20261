import { useAuth } from '../contexts/AuthContext';
import './Header.css';

function Header(props) {
  const { usuario } = useAuth();

  return (
    <header className="header-container">
      <div className="header-textos">
        <h1>{props.titulo}</h1>
        <p>{props.subtitulo}</p>
      </div>
      <div className="header-user">
        <span>{usuario ? usuario.nome : 'Usuário'}</span>
      </div>
    </header>
  );
}

export default Header;