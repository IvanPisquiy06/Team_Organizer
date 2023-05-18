import "./campoTexto.css"

const CampoTexto = (props) => {
    const placeHolderModificado = `${props.placeholder}...`

    const manejarCambio = (event) => {
        props.setValor(event.target.value);
    }

    return <div className="campo-texto">
        <label> {props.titulo} </label>
        <input 
        placeholder={placeHolderModificado} 
        required={props.required} 
        value={props.valor} 
        onChange={manejarCambio} />
    </div>
};

export default CampoTexto;