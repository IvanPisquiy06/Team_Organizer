import './App.css';
import Header from "./components/header/header";
import Formulario from './components/form/formulario';
import MiOrg from './components/miOrg';
import { useState } from 'react';
import Equipo from './components/equipo';
import Footer from './components/footer';

function App() {

  const [mostrarFormulario, actualizarMostrar] = useState(false);
  const [colaboradores, setColaboradores] = useState([{
    nombre: "Ivan Pisquiy",
    puesto: "Web Developer",
    foto: "https://github.com/IvanPisquiy06.png",
    equipo: "Front End"
}]);

  const cambiarMostrar = () => {
    actualizarMostrar(!mostrarFormulario);
  }

  //Registrar Colaborador
  const registrarColaborador = (colaborador) => {
    //Spread operator
    setColaboradores([...colaboradores, colaborador]);
  }

  //Eliminar Colaborador
  const eliminarColaborador = () => {

  }

  //Lista de Equipos
  const equipos = [
    {
      titulo: "Programación",
      colorPrimario: "#57C278",
      colorSecundario: "#D9F7E9"
    },
    {
      titulo: "Front End",
      colorPrimario: "#82CFFA",
      colorSecundario: "#E8F8FF"
    },
    {
      titulo: "Data Science",
      colorPrimario: "#A6D157",
      colorSecundario: "#F0F8E2"
    },
    {
      titulo: "DevOps",
      colorPrimario: "#E06B69",
      colorSecundario: "#FDE7E8"
    },
    {
      titulo: "UX y Diseño",
      colorPrimario: "#DB6EBF",
      colorSecundario: "#FAE9F5"
    },
    {
      titulo: "Movil",
      colorPrimario: "#FFBA05",
      colorSecundario: "#FFF5D9"
    },
    {
      titulo: "Innovación y Gestión",
      colorPrimario: "#FF8A29",
      colorSecundario: "#FFEEDF"
    }
];

  return (
    <div>
      <Header />
      { 
        mostrarFormulario && <Formulario 
          equipos={equipos.map( (equipo) => equipo.titulo)}
          registrarColaborador={registrarColaborador}
        /> 
      }

      <MiOrg cambiarMostrar={cambiarMostrar}/>

      {
        equipos.map( (equipo) => <Equipo 
          datos={equipo} 
          key={equipo.titulo}
          colaboradores={colaboradores.filter(colaborador => colaborador.equipo === equipo.titulo)}
          eliminarColaborador={eliminarColaborador}
        /> )
      }

      <Footer />
    </div>
  );
}

export default App;
