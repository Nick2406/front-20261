const BASE_URL = 'http://localhost:3000/requerimentos';

function obterToken() {
  const token = localStorage.getItem('@AlunoOnline:token');
  if (!token) {
    throw new Error('401');
  }
  return token;
}

export async function listarRequerimentos() {
  const token = obterToken();

  const response = await fetch(BASE_URL, {
    headers: {
      'Authorization': `Bearer ${token}`
    }
  });

  if (response.status === 401) throw new Error('401');
  if (!response.ok) throw new Error('Erro ao buscar requerimentos');
  
  return await response.json();
}

export async function cadastrarRequerimento(novoRequerimento) {
  const token = obterToken();

  const response = await fetch(BASE_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    },
    body: JSON.stringify(novoRequerimento),
  });

  if (response.status === 401) throw new Error('401');
  if (!response.ok) throw new Error('Erro ao salvar o requerimento');
  
  return await response.json();
}