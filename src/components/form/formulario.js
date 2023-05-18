import "./formulario.css"
import CampoTexto from '../campoTexto';
import ListaOpciones from "../listaOpciones";
import Boton from "../boton/boton";
import { useState } from "react";

const Formulario = () => {

    const [nombre, setNombre] = useState("");
    const [puesto, setPuesto] = useState("");
    const [foto, setFoto] = useState("");
    const [equipo, setEquipo] = useState("");

    const manejarEnvio = (event) => {
        event.preventDefault();
        let datosEnviar = {
            nombre,
            puesto,
            foto,
            equipo
        }
    }

    return <section className="formulario">
        <form onSubmit={manejarEnvio}>
            <h2>Rellena el formulario para crear el colaborador.</h2>
            <CampoTexto titulo="Nombre" placeholder="Ingresar nombre" required valor={nombre} setValor={setNombre}/>
            <CampoTexto titulo="Puesto" placeholder="Ingresar puesto" required valor={puesto} setValor={setPuesto}/>
            <CampoTexto titulo="Foto" placeholder="Ingresar enlace de foto" required valor={foto} setValor={setFoto}/>
            <ListaOpciones valor={equipo} setEquipo={setEquipo}/>
            <Boton texto="Crear" />
        </form>
    </section>
}

export default Formulario