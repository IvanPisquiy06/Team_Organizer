import "./colaborador.css"
import { FaTrashAlt, FaHeart, FaRegHeart } from "react-icons/fa";

const Colaborador = (props) => {

    const {nombre, puesto, foto, id, fav} = props.datos
    const {colorPrimario, eliminarColaborador, agregarFav} = props

    return <div className="colaborador">
        <FaTrashAlt onClick={() => eliminarColaborador(id)} className="eliminar" />
        <div className="encabezado" style={{ backgroundColor: colorPrimario}}>
            <img src={foto} alt={nombre}/>
        </div>
        <div className="info">
            <h4>{nombre}</h4>
            <h5>{puesto}</h5>
            { fav ? <FaHeart color="red" onClick={() => agregarFav(id)} /> : <FaRegHeart onClick={() => agregarFav(id)} /> }
        </div>
    </div>
}

export default Colaborador