import "./colaborador.css"
import { FaTrashAlt } from "react-icons/fa";

const Colaborador = (props) => {

    const {nombre, puesto, foto, id} = props.datos
    const {colorPrimario, eliminarColaborador} = props

    return <div className="colaborador">
        <FaTrashAlt onClick={() => eliminarColaborador(id)} className="eliminar" />
        <div className="encabezado" style={{ backgroundColor: colorPrimario}}>
            <img src={foto} alt={nombre}/>
        </div>
        <div className="info">
            <h4>{nombre}</h4>
            <h5>{puesto}</h5>
        </div>
    </div>
}

export default Colaborador