import Sidebar from '../components/Sidebar';
import Header from '../components/Header';
import './Faltas.css';

function Faltas() {
  return (
    <div className="layout-geral">
      <Sidebar />
      <main className="conteudo-principal">
        <section>
            <h1>Minhas Faltas</h1>
            <h2>Histórico de Faltas por Semestre</h2>
            <table>
                <thead>
                    <tr>
                        <th colSpan="5" className="titulo-semestre">2026.1</th>
                    </tr>
                    <tr>
                        <th>Disciplina</th>
                        <th>Total de Faltas</th>
                        <th>% de Presença</th> 
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Construção de Frontend</td>
                        <td>0</td>
                        <td>100</td>
                    </tr>
                    <tr>
                        <td>BI e Data Warehousing</td>
                        <td>0</td>
                        <td>100</td>
                    </tr>
                    <tr>
                        <td>Manutenção de Software e DevOps</td>
                        <td>0</td>
                        <td>100</td>
                    </tr>
                    <tr>
                        <td>Governança de TI</td>
                        <td>0</td>
                        <td>100</td>
                    </tr>
                </tbody>
            </table>
        </section>
      </main>
    </div>
  );
}

export default Faltas;