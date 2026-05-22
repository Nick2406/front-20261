import Card from '../components/Card';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';
import './Dashboard.css';

function Dashboard() {
  return (
    <div className="layout-geral">
      <Sidebar />
      <main className="conteudo-principal">
        <Header />
        
        <section className="dashboard-grid">
          <Card titulo="Mural de Avisos">
            <p>Inscrição para o projeto de extensão</p>
            <p>Eleição para representante de turma</p>
          </Card>
          <Card titulo="Calendário Acadêmico">
            <p>23/02 - Início do período letivo 2026-1</p>
            <p>25/04 - Prazo final para aplicação da P1</p>
            <p>23/06 - Prazo final para aplicação da P2</p>
            <p>04/07 - Fim do período letivo 2026-1</p>
          </Card>
          <Card titulo="Minhas Disciplinas">
            <p>BI e Data Warehousing</p>
            <p>Construção de Frontend</p>
            <p>Manutenção de Software e DevOps</p>
            <p>Governança de TI</p>
          </Card>
        </section>
      </main>
    </div>
  );
}

export default Dashboard;