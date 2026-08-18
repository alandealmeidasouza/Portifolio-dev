import './projeto.css'

function Projeto() {

    function RenderProj(imag:string, ano:string, proj:string, desc:string){
        return(
            <>
                <div className='fundo-proj'>
                    <div className='front-proj'>
                        <section className='imagem-proj'>
                            <img src={imag} alt="img"/>
                        </section>
                        <section className='content'>
                            <p>{ano}</p>
                            <h3>{proj}</h3>
                            <p>{desc}</p>
                            <details>
                                <summary>Saiba mais...</summary>
                                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores officia, deserunt sit recusandae impedit ex temporibus rerum provident earum hic aperiam maxime assumenda non voluptate sapiente obcaecati vitae id beatae.</p>
                            </details>
                        </section>
                    </div>
                </div>
            </>
        )
    }
    return(
        <aside className='project'>
            <section className='titulo-proj'>
                <i className="fa-solid fa-swatchbook icone"></i>
                <h2>Projetos</h2>
            </section>

            <div className='fundo-proj'>
                <div className='front-proj'>
                    <section className='imagem-proj'>
                        <img src="album.jpg" alt="album"/>
                    </section>
                    <section className='content'>
                        <p>2025</p>
                        <h3>Projeto Álbum de Fotos</h3>
                        <p>Projeto construído para treinar conteúdos flexíveis usando CSS FlexBox para mostrar um álbum de fotos.</p>
                        <details>
                            <summary>Saiba mais...</summary>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores officia, deserunt sit recusandae impedit ex temporibus rerum provident earum hic aperiam maxime assumenda non voluptate sapiente obcaecati vitae id beatae.</p>
                        </details>
                    </section>
                </div>
            </div>
            {RenderProj('login.jpg', '2024', 'Projeto Login', 'Projeto construído para treinar responsividade e formulários em uma das telas mais populares em sistema.')}

            {RenderProj('links.jpg', '2024', 'Projeto Redes Sociais', 'Projeto construído para treinar responsividade, múltiplos media queries e divulgar as suas principais redes sociais.')}

            {RenderProj('android.jpg', '2023', 'Projeto Android', 'Projeto construído para treinar conteúdos e imagens dinâmicas com a história do sistema android.')}

            {RenderProj('cordel.jpg', '2023', 'Projeto Cordel', 'Projeto construído para treinar efeito parallax em imagens e apresentação de conteúdo em diversos tamanhos de tela.')}

            {RenderProj('videos.jpg', '2022', 'Projeto de Vídeos', 'Projeto construído para treinar a inserção de vídeos em nosso site, além da navegação entre páginas.')}
        </aside>
    )
}

export default Projeto
