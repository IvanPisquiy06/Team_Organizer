import "./formulario.css"
import CampoTexto from '../campoTexto';
import ListaOpciones from "../listaOpciones";
import Boton from "../boton/boton";
import { useState } from "react";
import { v4 as uuid } from "uuid";

const Formulario = (props) => {

    const [nombre, setNombre] = useState("");
    const [puesto, setPuesto] = useState("");
    const [foto, setFoto] = useState("");
    const [equipo, setEquipo] = useState("");

    const [titulo, setTitulo] = useState("");
    const [color, setColor] = useState("");

    const { registrarColaborador, crearEquipo } = props

    const manejarEnvio = (event) => {
        event.preventDefault();
        let datosEnviar = {
            id: uuid(),
            nombre,
            puesto,
            foto,
            equipo
        }
        registrarColaborador(datosEnviar)
    }

    const manejarEquipo = (event) => {
        event.preventDefault();
        let datosEquipo = {
            id: uuid(),
            titulo,
            colorPrimario: color
        }
        crearEquipo(datosEquipo)
    }

    return <section className="formulario">
        <form onSubmit={manejarEnvio}>
            <h2>Rellena el formulario para crear el colaborador.</h2>
            <CampoTexto 
                titulo="Nombre" 
                placeholder="Ingresar nombre" 
                required 
                valor={nombre} 
                setValor={setNombre}
            />
            <CampoTexto 
                titulo="Puesto" 
                placeholder="Ingresar puesto" 
                required 
                valor={puesto} 
                setValor={setPuesto}
            />
            <CampoTexto 
                titulo="Foto" 
                placeholder="Ingresar enlace de foto" 
                required 
                valor={foto} 
                setValor={setFoto}
            />
            <ListaOpciones 
                valor={equipo} 
                setEquipo={setEquipo}
                equipos={props.equipos}
            />
            <Boton texto="Crear" />
        </form>
        <form onSubmit={manejarEquipo}>
            <h2>Rellena el formulario para crear el equipo.</h2>
            <CampoTexto 
                titulo="Titulo" 
                placeholder="Ingresar titulo" 
                required 
                valor={titulo} 
                setValor={setTitulo}
            />
            <CampoTexto 
                titulo="Color" 
                placeholder="Ingresar color Hex" 
                required 
                valor={color} 
                setValor={setColor}
            />
            <Boton texto="Crear equipo" />
        </form>
    </section>
}

export default Formulario