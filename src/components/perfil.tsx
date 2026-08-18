import './perfil.css'

function Perfil() {
    return(
        <article className='perfil'>
            <section className='fotoperfil'></section>
            <h1>Flávio Lopes</h1>
            <p>Formado em ciência da computação, com especialização em docência superior, desenvolvimento web e inteligência artificial. Apaixonado por tecnologia e sempre em busca de novos desafios. Atualmente, atuo como professor e desenvolvedor, compartilhando conhecimento através de cursos online e projetos de código aberto.
            </p>
            <nav>
                <a href=""><i className="fa-brands fa-linkedin-in"></i></a>
                <a href=""><i className="fa-brands fa-github"></i></a>
                <a href=""><i className="fa-brands fa-youtube"></i></a>
                <a href=""><i className="fa-brands fa-instagram"></i></a>
            </nav>
        </article>
    )
}

export default Perfil