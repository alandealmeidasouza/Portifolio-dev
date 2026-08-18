import './formaçao.css'

function Formaçao(){

    function internal(ano:string, local:string, funçao:string){
        return(
             <div className='boxfundo'>
                <div className='boxfront'>
                    <p className='par1'>{ano}</p>
                    <h3>{local}</h3>
                    <p className='par2'>{funçao}</p>
                </div>
            </div>
        )
    }

    return(
        <article className='formaçao'>
            <section>
                <i className="fa-solid fa-graduation-cap icone"></i>
                <h2>Formação</h2>
            </section>
            <div className='boxfundo'>
                <div className='boxfront'>
                    <p className='par1'>2021 - 2024</p>
                    <h3>Centro de Inteligência Artificial</h3>
                    <p className='par2'>Técnicas para aplicação de IAs</p>
                </div>
            </div>
            {internal( "2009 - 2010",
                "Fundação para Ensino à Distância",
                "Especialização para produção em ambientes EAD"
            )}

            {internal( "2001 - 2003",
                "Laboratório de Docência Superior",
                "Docência para ensino superior profissional"
            )}

            {internal( "1998 - 2000",
                "Centro de Graduação de Professores",
                "Licenciatura em informática"
            )}

            {internal( "1995 - 2000",
                "Instituto Superior de Tecnologia",
                "Bacharelado em ciência da computação"
            )}

            {internal( "1991 - 1994",
                "Escola Técnica Carioca",
                "Técnico em informática"
            )}
            
        </article>
    )


}

export default Formaçao

