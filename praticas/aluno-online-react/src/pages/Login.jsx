import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import Input from '../components/Input';
import './Login.css';

function Login() {
  const { login } = useAuth();
  const navigate = useNavigate();
  
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [erros, setErros] = useState({});

  const handleSubmit = async (event) => {
    event.preventDefault();
    let listaErros = {};

    if (!email) listaErros.email = 'O e-mail é obrigatório.';
    if (!senha) listaErros.senha = 'A senha é obrigatória.';

    if (Object.keys(listaErros).length > 0) {
      setErros(listaErros);
    } else {
      setErros({});
      
      try {
        await login(email, senha);
        navigate('/');
      } catch (error) {
        console.error("Falha na autenticação:", error);
      }
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