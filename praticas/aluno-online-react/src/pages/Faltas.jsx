import Layout from '../components/Layout';

function Faltas() {
  return (
    <Layout tituloHeader="Minhas Faltas" subtituloHeader="Histórico de Faltas por Semestre">
      <section>
        <table className="tabela-padrão">
            <thead>
                <tr>
                    <th colSpan="5" className="titulo-padrão">2026.1</th>
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
    </Layout>
  );
}

export default Faltas;