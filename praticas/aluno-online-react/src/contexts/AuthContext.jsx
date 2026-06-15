import { createContext, useContext, useState, useEffect } from 'react';
import { loginApi } from '../services/authService';

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [autenticado, setAutenticado] = useState(false);
  const [usuarioLogado, setUsuarioLogado] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem('@AlunoOnline:token');
    const user = localStorage.getItem('@AlunoOnline:user');

    if (token && user) {
      setAutenticado(true);
      setUsuarioLogado(JSON.parse(user));
    }
  }, []);

  async function login(email, senha) {
    try {
      const { usuario, token } = await loginApi(email, senha);
      
      localStorage.setItem('@AlunoOnline:token', token);
      localStorage.setItem('@AlunoOnline:user', JSON.stringify(usuario));
      
      setAutenticado(true);
      setUsuarioLogado(usuario);
    } catch (error) {
      alert(error.message);
      throw error;
    }
  }

  function logout() {
    localStorage.removeItem('@AlunoOnline:token');
    localStorage.removeItem('@AlunoOnline:user');
    
    setAutenticado(false);
    setUsuarioLogado(null);
  }

  return (
    <AuthContext.Provider value={{ autenticado, usuarioLogado, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}