
function Post(Props) {
    return (

        <div class="post">
            <div class="topo">
                <div class="usuario">
                    <img src={Props.usuario} alt="FotoUsuario" />
                    {Props.nome}
                </div>
                <div class="acoes">
                    <ion-icon name="ellipsis-horizontal"></ion-icon>
                </div>
            </div>

            <div class="conteudo">
                <img src={Props.conteudo} alt="ImagemPost" />
            </div>

            <div class="fundo">
                <div class="acoes">
                    <div>
                        <ion-icon name="heart-outline"></ion-icon>
                        <ion-icon name="chatbubble-outline"></ion-icon>
                        <ion-icon name="paper-plane-outline"></ion-icon>
                    </div>
                    <div>
                        <ion-icon name="bookmark-outline"></ion-icon>
                    </div>
                </div>

                <div class="curtidas">
                    <img src={Props.curtidas} alt="PerfilCurtidas" />
                    <div class="texto">
                        Curtido por <strong>{Props.curtido}</strong> e <strong>{Props.outros}</strong>
                    </div>
                </div>
            </div>
        </div>


    )

}
export default function Posts() {


    const ConteudoPost = [
        {
            usuario: "assets/img/meowed.svg",
            nome: "meowed",
            conteudo: "assets/img/gato-telefone.svg"
            , curtidas: "assets/img/respondeai.svg",
            curtido: "Responde ai",
            outros: "outras 101.523 pessoas"
        }
        ,
        {
            usuario: "assets/img/barked.svg",
            nome: "barked",
            conteudo: "assets/img/dog.svg",
            curtidas: "assets/img/adorable_animals.svg",
            Curtido: "adorable_animals",
            outros: "outras 99.159 pessoas"
        }
    ]

    return (
        <>
            <div class="posts">
                {ConteudoPost.map((c) => <Post usuario={c.usuario} nome={c.nome} conteudo={c.conteudo} curtidas={c.curtidas} curtido={c.curtido} outros={c.outros} />)}
            </div>
        </>
    )


}