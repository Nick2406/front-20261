import "./Menu.css"

import { Link, NavLink } from "react-router";

function Menu() {
    return <nav>
        <ul>
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to={`/Perfil/${usuarioId}`}>Perfil</NavLink></li>
            <li><NavLink to="/Setting">Config</NavLink></li>
            <li><NavLink to="/About">Sobre</NavLink></li>
            <li><Link to="/Login">Sair</Link></li>
        </ul>
    </nav>
}
    
export default Menu;