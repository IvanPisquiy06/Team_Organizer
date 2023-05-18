import "./listaOpciones.css"

const ListaOpciones = (props) => {

    //Método Map
    const equipos = [
        "Programación",
        "Front End",
        "Data Science",
        "DevOps",
        "UX y Diseño",
        "Movil",
        "Innovación y Gestión"    
    ];

    const manejarCambio = (event) => {
        props.setEquipo(event.target.value)
    }

    return <div className="lista-opciones">
        <label>Equipos</label>
        <select value={props.valor} onChange={manejarCambio}>
            <option value="" disabled defaultValue="" hidden >Seleccionar equipo</option>
            { equipos.map((equipo, index) => {
                return <option key={index} value={equipo}>{equipo}</option>
            } ) }
        </select>
    </div>
}

export default ListaOpciones