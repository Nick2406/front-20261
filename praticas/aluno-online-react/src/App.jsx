import { Routes, Route, Navigate } from 'react-router-dom';
import { useAuth } from './contexts/AuthContext';
import Layout from './layouts/Layout';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Notas from './pages/Notas';
import Faltas from './pages/Faltas';
import Boletos from './pages/Boletos';
import Requerimentos from './pages/Requerimentos';
import RequerimentoForm from './forms/RequerimentoForm';

function App() {
  const { autenticado } = useAuth();

  return (
    <Routes>
      <Route path="/login" element={!autenticado ? <Login /> : <Navigate to="/" />} />

      <Route path="/" element={autenticado ? <Layout /> : <Navigate to="/login" />}>
        <Route index element={<Dashboard />} />
        <Route path="notas" element={<Notas />} />
        <Route path="faltas" element={<Faltas />} />
        <Route path="boletos" element={<Boletos />} />
        <Route path="requerimentos">
        <Route index element={<Requerimentos />} />
        <Route path="novo" element={<RequerimentoForm />} />
      </Route>
      </Route>
      
      <Route path="*" element={<Navigate to={autenticado ? "/" : "/login"} />} />
    </Routes>
  );
}

export default App;
