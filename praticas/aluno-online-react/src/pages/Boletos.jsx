import Layout from '../components/Layout';

function Boletos() {
  return (
    <Layout tituloHeader="Meus Boletos" subtituloHeader="Histórico de Pagamentos">
      <section>
        <table className="tabela-padrão">
            <thead>
                <tr>
                    <th>Vencimento</th>
                    <th>Valor R$</th>
                    <th>Situação</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>19/01/2026</td>
                    <td>R$800</td>
                    <td>Pago</td>
                </tr>
                <tr>
                    <td>19/02/2026</td>
                    <td>R$800</td>
                    <td>Pendente</td>
                </tr>
                <tr>
                    <td>19/03/2026</td>
                    <td>R$800</td>
                    <td>Pendente</td>
                </tr>
                <tr>
                    <td>19/04/2026</td>
                    <td>R$800</td>
                    <td>Pendente</td>
                </tr>
            </tbody>
        </table>
      </section>
    </Layout>
  );
}

export default Boletos;