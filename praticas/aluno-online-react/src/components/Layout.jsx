import Sidebar from './Sidebar';
import Header from './Header';
import './Layout.css'; 

function Layout(props) {
  return (
    <div className="layout-geral">
      <Sidebar />
      <main className="conteudo-principal">
        <Header titulo={props.tituloHeader} subtitulo={props.subtituloHeader} />
        {props.children}
      </main>
    </div>
  );
}

export default Layout;