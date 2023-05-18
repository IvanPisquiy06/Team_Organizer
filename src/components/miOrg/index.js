import "./miOrg.css";

const MiOrg = (props) => {

    return <section className="orgSection">
        <h3 className="title">Mi Organización</h3>
        <img src="/img/add.png" alt="Add" onClick={props.cambiarMostrar}></img>
    </section>
}

export default MiOrg