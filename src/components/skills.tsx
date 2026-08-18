import './skills.css'

function Skills(){

    function Render(icone:string, tec:string, porcento:string, margin:string) {
        return(
            <>
                <section className='skills'>
                    <p><i className={icone}></i> {tec}</p>
                    <p className='porcent'>{porcento}</p>
                </section>
                <div className='corfundo'>
                    <div className='corfrente' style={{marginRight: margin}}></div>
                </div>
            </>
        )  
    }
    return(
        <article className='habilidade'>
            <section className='titulo'>
                <i className="fa-solid fa-brain brain"></i>
                <h2>Minhas skills</h2>
            </section>

            <div className='principal-block'>
                <div className='block-skill'>
                    <section className='skills'>
                        <p><i className="fa-solid fa-code"></i> HTML5</p>
                        <p className='porcent'>90%</p>
                    </section>
                    <div className='corfundo'>
                        <div className='corfrente'></div>
                    </div>
                    {Render('fa-solid fa-code', 'CSS3', '80%', '82px')}
                    {Render('fa-solid fa-code', 'JavaScript', '75%', '102px')}
                    {Render('fa-solid fa-code', 'PHP', '60%', '164px')}
                </div>
                <div className='block-skill'>
                    {Render('fa-solid fa-person-rays', 'Comunicação', '100%', '0px')}
                    {Render('fa-solid fa-person-rays', 'Trabalho em equipe', '90%', '41px')}
                    {Render('fa-solid fa-person-rays', 'Adaptabilidade', '85%', '62px')}
                    {Render('fa-solid fa-person-rays', 'Liderança', '80%', '82px')}
                </div>
            </div>
        </article>
    )
}

export default Skills
