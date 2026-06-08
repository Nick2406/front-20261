import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { listarRequerimentos } from '../services/requerimentoService';

function Requerimentos() {
  const [lista, setLista] = useState([]);
  const [erro, setErro] = useState('');

  useEffect(() => {
    async function carregarDados() {
      try {
        const dados = await listarRequerimentos();
        setLista(dados);
      } catch (err) {
        setErro('Não foi possível carregar os requerimentos.');
        console.error(err);
      }
    }
    carregarDados();
  }, []);

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h2>Meus Requerimentos</h2>
        <Link to="/requerimentos/novo" className="btn-novo">
          ➕ Novo Requerimento
        </Link>
      </div>

      {erro && <p style={{ color: 'red' }}>{erro}</p>}

      {lista.length === 0 ? (
        <p>Nenhum requerimento encontrado.</p>
      ) : (
        <table className="tabela-requerimentos">
          <thead>
            <tr>
              <th>ID</th>
              <th>Tipo</th>
              <th>Descrição</th>
              <th>Data</th>
            </tr>
          </thead>
          <tbody>
            {lista.map((req) => (
              <tr key={req.id}>
                <td>{req.id}</td>
                <td>{req.tipo}</td>
                <td>{req.descricao}</td>
                <td>{req.data}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default Requerimentos;