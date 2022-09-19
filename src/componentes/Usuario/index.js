import React from "react"

export default function Usuario(){

  const [nome, setNome] = React.useState("")
  const [foto, setFoto] = React.useState("")

  function alterarNome(){
    
    const NovoNome = prompt("Qual é o seu novo nome ?")
    setNome(NovoNome)
}

function alterarFoto(){
const NovaFoto= prompt("Qual link da sua foto?")
setFoto(NovaFoto)
}


    return(
    
        <>
        <div class="usuario">
          <img onClick={alterarFoto} src={(foto === "" || foto === null) ? "assets/img/catanacomics.svg" : ` ${foto}`} alt="FotoPerfil"/>
          <div class="texto">
            <strong> catanacomics </strong>
            <span>
            {(nome === "" || nome === null) ? "catana" : ` ${nome}`}
              <ion-icon onClick={alterarNome}  name="pencil"></ion-icon>
            </span>
          </div>
        </div>
        </>
    )
    
    
    }