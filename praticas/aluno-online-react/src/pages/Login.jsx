import { useState } from 'react';
import Input from '../components/Input';
import './Login.css';

function Login() {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [erros, setErros] = useState({});
  const handleSubmit = (event) => {
    event.preventDefault();

    let listaErros = {};

    if (!email) {
      listaErros.email = 'O e-mail é obrigatório.';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      listaErros.email = 'Insira um e-mail válido.';
    }

    if (!senha) {
      listaErros.senha = 'A senha é obrigatória.';
    } else if (senha.length < 6) {
      listaErros.senha = 'A senha deve ter pelo menos 6 caracteres.';
    }

    if (Object.keys(listaErros).length > 0) {
      setErros(listaErros);
    } else {
      setErros({});
      alert('Login realizado com sucesso! (Simulação)');
    }
  };

  return (
  <div className="login-page">
    <section>
      <img src="src/assets/learn.svg" alt="learn" /> 
      <h1>Aluno Online</h1>
      
      <form onSubmit={handleSubmit}>
        <Input
          id="email"
          label="E-mail"
          type="email"
          placeholder="exemplo@email.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          erro={erros.email}
        />

        <Input
          id="senha"
          label="Senha"
          type="password"
          placeholder="Digite sua senha"
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
          erro={erros.senha}
        />

        <button type="submit">Entrar</button>
      </form>
    </section>

    <footer>
      <p>© 2026 Aluno Online. Todos os direitos reservados.</p>
    </footer>
  </div>
);
}

export default Login;