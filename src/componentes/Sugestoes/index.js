export default function Sugestoes(){

    function Sugestao(Props){
return(
<div class="sugestao">
            <div class="usuario">
              <img src= {Props.usuario} alt="PerfilSugestoes"/>
              <div class="texto">
                <div class="nome">{Props.nome}</div>
                <div class="razao">{Props.razao}</div>
              </div>
            </div>

            <div class="seguir">Seguir</div>
          </div>

)

    }
    return(
    
        <>
        


          <div class="sugestoes">
          <div class="titulo">
            Sugestões para você
            <div>Ver tudo</div>
            
          </div>
          <Sugestao usuario="assets/img/bad.vibes.memes.svg" nome = "bad.vibes.memes" razao= "Segue você"/>
          <Sugestao usuario="assets/img/chibirdart.svg" nome = "chibirdart" razao= "Segue você"/>
          <Sugestao usuario="assets/img/razoesparaacreditar.svg" nome = "razoesparaacreditar" razao= "Novo no Instagram"/>
          <Sugestao usuario="assets/img/adorable_animals.svg" nome = "adorable_animals" razao= "Segue você"/>
          <Sugestao usuario="assets/img/smallcutecats.svg" nome = "smallcutecats" razao= "Segue você"/>
        </div>
        
        </>
    )
    
    
    }