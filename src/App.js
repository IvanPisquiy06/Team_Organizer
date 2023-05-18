import './App.css';
import Header from "./components/header/header";
import Formulario from './components/form/formulario';
import MiOrg from './components/miOrg';
import { useState } from 'react';

function App() {

  const [mostrarFormulario, actualizarMostrar] = useState(true);

  const cambiarMostrar = () => {
    actualizarMostrar(!mostrarFormulario);
  }

  return (
    <div>
      <Header />
      { mostrarFormulario && <Formulario /> }
      <MiOrg cambiarMostrar={cambiarMostrar}/>
    </div>
  );
}

export default App;
