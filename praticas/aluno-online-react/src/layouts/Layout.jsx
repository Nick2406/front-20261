import { Outlet } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import './Layout.css';

function Layout() {
  return (
    <div className="layout-geral">
      <Sidebar />
      <div className="conteudo-principal">
        <Outlet /> 
      </div>
    </div>
  );
}

export default Layout;