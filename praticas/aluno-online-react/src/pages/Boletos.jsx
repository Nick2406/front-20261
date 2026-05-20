import Sidebar from '../components/Sidebar';
import Header from '../components/Header';
import './Boletos.css';

function Boletos() {
  return (
    <div className="layout-geral">
      <Sidebar />
      <main className="conteudo-principal">
        <section>
            <h1>Meus Boletos</h1>
            <h2>Histórico de Pagamentos</h2>
            <table>
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
      </main>
    </div>
  );
}

export default Boletos;