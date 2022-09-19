import react from "react";

function Post(Props) {
    const [like, setLike]= react.useState(false)
    const [likes, setLikes ] = react.useState("")
    const [salvar, setSalvar] = react.useState(false)



// Função Curtir Post 
function Curtir(){
    if (like === false){
        setLike(true);
    }
    else {
        setLike(false)

    }

}
// -----------------------


// Função Salvar Post 
function Salvar(){
    if (salvar === false){
        setSalvar(true);
    }
    else {
        setSalvar(false);

    }


}
// -----------------------


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
                <img onClick={Curtir} src={Props.conteudo} alt="ImagemPost" />
            </div>

            <div class="fundo">
                <div class="acoes">
                    <div>
                        <ion-icon Class={(like === false)? "" : "Curtido"} onClick={Curtir} name={(like === false) ?"heart-outline" : "heart" }></ion-icon>
                        <ion-icon name="chatbubble-outline"></ion-icon>
                        <ion-icon name="paper-plane-outline"></ion-icon>
                    </div>
                    <div>
                        <ion-icon onClick={Salvar} name={(salvar === false) ?"bookmark-outline" : "bookmark" }></ion-icon>
                    </div>
                </div>

                <div class="curtidas">
                    <img src={Props.curtidas} alt="PerfilCurtidas" />
                    <div class="texto">
                        Curtido por <strong>{Props.curtido}</strong> e <strong>{Props.text1} {Props.number} {Props.text2} </strong>
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
            text1: "outras",
            number: 101.523,
            text2:"pessoas"
        }
        ,
        {
            usuario: "assets/img/barked.svg",
            nome: "barked",
            conteudo: "assets/img/dog.svg",
            curtidas: "assets/img/adorable_animals.svg",
            Curtido: "adorable_animals",
            text1: "outras",
            number: 99.159,
            text2:"pessoas"
        }
    ]

    return (
        <>
            <div class="posts">
                {ConteudoPost.map((c) => <Post usuario={c.usuario} nome={c.nome} conteudo={c.conteudo} curtidas={c.curtidas} curtido={c.curtido} text1={c.text1} number={c.number} text2={c.text2}  />)}
            </div>
        </>
    )


}