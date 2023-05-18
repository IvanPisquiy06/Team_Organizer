import "./formulario.css"
import CampoTexto from '../campoTexto';
import ListaOpciones from "../listaOpciones";
import Boton from "../boton/boton";

const Formulario = () => {

    const manejarEnvio = (event) => {
        event.preventDefault();
    }

    return <section className="formulario">
        <form onSubmit={manejarEnvio}>
            <h2>Rellena el formulario para crear el colaborador.</h2>
            <CampoTexto titulo="Nombre" placeholder="Ingresar nombre" required/>
            <CampoTexto titulo="Puesto" placeholder="Ingresar puesto" required/>
            <CampoTexto titulo="Foto" placeholder="Ingresar enlace de foto" required/>
            <ListaOpciones />
            <Boton texto="Crear" />
        </form>
    </section>
}

export default Formulario