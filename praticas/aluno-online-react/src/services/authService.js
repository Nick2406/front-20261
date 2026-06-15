const BASE_URL = 'http://localhost:3000/usuarios';

export async function loginApi(email, senha) {
  console.log("1. Tentando logar com:", email, senha);

  const response = await fetch(BASE_URL);
  const usuarios = await response.json();
  
  console.log("2. O que o JSON Server está listando em /usuarios:", usuarios);

  const usuarioValido = usuarios.find(
    (u) => u.email.trim() === email.trim() && u.senha.trim() === senha.trim()
  );

  if (!usuarioValido) {
    throw new Error('Email ou senha incorretos');
  }

  console.log("3. Usuário autenticado com sucesso:", usuarioValido);

  const tokenFalso = btoa(JSON.stringify({ id: usuarioValido.id, email: usuarioValido.email, exp: Date.now() + 86400000 }));

  return {
    usuario: { id: usuarioValido.id, email: usuarioValido.email },
    token: tokenFalso
  };
}