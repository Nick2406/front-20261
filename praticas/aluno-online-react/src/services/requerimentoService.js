const BASE_URL = 'http://localhost:3000/requerimentos';

export async function listarRequerimentos() {
  const response = await fetch(BASE_URL);
  if (!response.ok) {
    throw new Error('Erro ao buscar requerimentos da API');
  }
  return await response.json();
}

export async function cadastrarRequerimento(novoRequerimento) {
  const response = await fetch(BASE_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(novoRequerimento),
  });

  if (!response.ok) {
    throw new Error('Erro ao salvar o requerimento na API');
  }
  return await response.json();
}