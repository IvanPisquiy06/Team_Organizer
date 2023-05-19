import "./campo.css"

const Campo = (props) => {
    const placeHolderModificado = `${props.placeholder}...`

    //Destructuración
    const { type = "text" } = props

    const manejarCambio = (event) => {
        props.setValor(event.target.value);
    }

    return <div className={`campo campo-${type}`}>
        <label> {props.titulo} </label>
        <input 
            placeholder={placeHolderModificado} 
            required={props.required} 
            value={props.valor} 
            onChange={manejarCambio} 
            type={type}
        />
    </div>
};

export default Campo;