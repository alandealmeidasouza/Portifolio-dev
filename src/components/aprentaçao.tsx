import './apresentaçao.css'

function Apresentaçao(){
    return(
        <article className='apresenta'>
            <section className='container'>
                <i className="fa-solid fa-handshake hand"></i>
                <h2>Deixe-me apresentar</h2>
            </section>
            <section className='content'>
                <section className='video'>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/zwdWXgZ-xGM?si=shMESuNfaFFLWbn8" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                </section>
            </section>
        </article>
    )
}

export default Apresentaçao