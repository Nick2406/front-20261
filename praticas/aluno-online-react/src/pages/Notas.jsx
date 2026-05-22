import Layout from '../components/Layout';

function Notas() {
  return (
    <Layout tituloHeader="Minhas Notas" subtituloHeader="Histórico de Notas por Semestre">
      <section>
        <table className="tabela-padrão">
          <thead>
            <tr>
                <th colSpan="5" className="titulo-padrão">2026.1</th>
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
    </Layout>
  );
}

export default Notas;