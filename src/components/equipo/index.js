import "./equipo.css";
import Colaborador from "../colaborador"

const Equipo = (props) => {

    const {titulo, colorPrimario, colorSecundario} = props.datos

    return <section className="equipo" style={{ backgroundColor: colorSecundario }}>
        <h3 style={{borderColor: colorPrimario}}>{titulo}</h3>
        <div className="colaboradores">
            <Colaborador />
            <Colaborador />
            <Colaborador />
            <Colaborador />
        </div>
    </section>
}

export default Equipo