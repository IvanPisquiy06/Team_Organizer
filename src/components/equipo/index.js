import "./equipo.css";
import Colaborador from "../colaborador";
import HexToRgba from 'hex-to-rgba';

const Equipo = (props) => {

    const {titulo, colorPrimario, id} = props.datos

    const { colaboradores, eliminarColaborador, actualizarColor, agregarFav } = props

    return <>{ colaboradores.length > 0 &&
        <section className="equipo" style={{ backgroundColor: HexToRgba(colorPrimario, 0.6) }}>
            <input
                type='color'
                className='colorInput'
                value={colorPrimario}
                onChange={(event) => {
                    actualizarColor(event.target.value, id)
                }}
            />
            <h3 style={{borderColor: colorPrimario}}>{titulo}</h3>
            <div className="colaboradores">
                {
                    colaboradores.map( (colaborador, index) => <Colaborador 
                        datos={colaborador} 
                        key={index}
                        colorPrimario={colorPrimario}
                        eliminarColaborador={eliminarColaborador}
                        agregarFav={agregarFav}
                    />)
                }
            </div>
        </section>
    }</>
}

export default Equipo