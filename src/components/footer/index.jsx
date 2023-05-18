import "./footer.css"

const Footer = () => {
    return <footer className="footer" style={{backgroundImage: "url(/img/Footer.png)"}}>
        <div className="redes">
            <a href="https://github.com/IvanPisquiy06">
                <img src="/img/github.png" alt="GitHub" className="github" />
            </a>
            <a href="https://www.instagram.com/tashuelaspe/">
                <img src="/img/instagram.png" alt="Instagram" />
            </a>
            <a href="https://www.linkedin.com/in/ivanpisquiy/">
                <img src="/img/linkedin.png" alt="Linkedin" className="linkedin" />
            </a>
        </div>
        <img src="/img/Logo.png" alt="org" />
        <strong>Desarrolado por Ivan Pisquiy</strong>
    </footer>
}

export default Footer