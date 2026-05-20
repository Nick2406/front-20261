import Sidebar from '../components/Sidebar';
import Header from '../components/Header';
import './Notas.css';

function Notas() {
  return (
    <div className="layout-geral">
      <Sidebar />
      <main className="conteudo-principal">
        <section>
            <h1>Minhas Notas</h1>
            <h2>Notas por Semestre</h2>
            <table>
                <thead>
                    <tr>
                        <th colSpan="5" className="titulo-semestre">2026.1</th>
                    </tr>
                    <tr>
                        <th>Disciplina</th>
                        <th>A1</th>
                        <th>A2</th>
                        <th>A3</th>
                        <th>Menção</th> 
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Construção de Frontend</td>
                        <td>8</td>
                        <td>7</td>
                        <td>9</td>
                        <td>MS</td>
                    </tr>
                    <tr>
                        <td>BI e Data Warehousing</td>
                        <td>6</td>
                        <td>8</td>
                        <td>7</td>
                        <td>MS</td>
                    </tr>
                    <tr>
                        <td>Manutenção de Software e DevOps</td>
                        <td>6</td>
                        <td>8</td>
                        <td>7</td>
                        <td>MS</td>
                    </tr>
                    <tr>
                        <td>Governança de TI</td>
                        <td>6</td>
                        <td>8</td>
                        <td>7</td>
                        <td>MS</td>
                    </tr>
                </tbody>
            </table>
        </section>
      </main>
    </div>
  );
}

export default Notas;