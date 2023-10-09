import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MinecraftPage from './components/pages/Minecraft';
import PaginaPrincipal from './components/pages/Principal';
import Informacion from './components/organismos/informacion';
import HaloPage from './components/organismos/informacion'; // Importa la página Halo

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<PaginaPrincipal />} />
        <Route path="/Informacion" element={<Informacion />} />
        {/* Agrega una ruta dinámica para Halo */}
        <Route path="/:titulo" element={<HaloPage />} />
        <Route path="/minecraft" element={<MinecraftPage />} />
      </Routes>
    </Router>
  );
}

export default App;
