import "./listaOpciones.css"

const ListaOpciones = () => {

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

    return <div className="lista-opciones">
        <label>Equipos</label>
        <select>
            { equipos.map((equipo, index) => {
                return <option key={index}>{equipo}</option>
            } ) }
        </select>
    </div>
}

export default ListaOpciones