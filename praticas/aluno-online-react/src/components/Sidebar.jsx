import './Sidebar.css';

function Sidebar() {
  return (
    <aside>
      <nav>
        <div>
          <img src="src/assets/learn.svg" alt="learn" />
          <h2>Aluno Online</h2>
        </div>
        <ul>
          <li><a href="#">Dashboard</a></li>
          <li><a href="#">Notas</a></li>
          <li><a href="#">Faltas</a></li>
          <li><a href="#">Boletos</a></li>
          <li><a href="#">Requerimentos</a></li>
          <li><a href="#">Sair</a></li>
        </ul>
      </nav>
    </aside>
  );
}

export default Sidebar;