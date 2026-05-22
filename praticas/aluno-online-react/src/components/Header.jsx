import './Header.css';

function Header(props) {
  return (
    <header>
      <div>
        <h1>{props.titulo}</h1>
        <h2>{props.subtitulo}</h2>
      </div>
      <img src="src/assets/avatar.svg" alt="avatar" />
    </header>
  );
}

export default Header;