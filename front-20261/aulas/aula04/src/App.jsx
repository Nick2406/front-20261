import { Route, Routes } from 'react-router';
import Layout from './layouts/Layout';
import About from './pages/About';
import Erro404 from './pages/Erro404';
import Home from './pages/Home';
import Perfil from './pages/Perfil';
import Setting from './pages/Setting';

function App(){
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Perfil" element={<Perfil />} />
        <Route path="/Setting" element={<Setting />} />
        <Route path="*" element={<Erro404 />} />
      </Route>
      <Route path="/login" element={<Login />} />
    </Routes>
  );
}

export default App
