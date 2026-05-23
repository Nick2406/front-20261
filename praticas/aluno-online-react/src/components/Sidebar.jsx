import { NavLink } from 'react-router-dom';
import './Sidebar.css';

function Sidebar() {
  return (
    <aside className="sidebar-container">
      <div className="sidebar-header">
        <img src="src/assets/learn.svg" alt="learn" className="sidebar-img" />
        <h2>Aluno Online</h2>
      </div>
      <nav className="menu-navegacao">
        <NavLink to="/" end className="menu-link">Dashboard</NavLink>
        <NavLink to="/notas" className="menu-link">Notas</NavLink>
        <NavLink to="/faltas" className="menu-link">Faltas</NavLink>
        <NavLink to="/boletos" className="menu-link">Boletos</NavLink>
        <NavLink to="/requerimentos" className="menu-link">Requerimentos</NavLink>
        <NavLink to="/login" className="menu-link btn-sair">Sair</NavLink>
      </nav>
    </aside>
  );
}

export default Sidebar;