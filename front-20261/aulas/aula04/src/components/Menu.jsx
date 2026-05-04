import "./Menu.css"

import { NavLink } from "react-router";

function Menu(){
    return <nav>
        <ul>
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/Perfil">Perfil</NavLink></li>
            <li><NavLink to="/Setting">Config</NavLink></li>
            <li><NavLink to="/About">Sobre</NavLink></li>
        </ul>
    </nav>
}

export default Menu;