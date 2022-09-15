export default function Stories(){

    function Story(Props){
return(

<div class="story">
            <div class="imagem">
            
              <img src= {Props.imagem}/>
            </div>
            <div class="usuario">
              {Props.usuario}
            </div>
          </div>

)

    }

    return(
    
        <>
        <div class="stories">
          <Story imagem = "assets/img/9gag.svg" usuario = "9gag" />
          <Story imagem = "assets/img/meowed.svg" usuario = "meowed" />
          <Story imagem = "assets/img/barked.svg" usuario = "barked" />
          <Story imagem = "assets/img/nathanwpylestrangeplanet.svg" usuario = "nathanwpylestrangeplanet" />
          <Story imagem = "assets/img/wawawicomics.svg" usuario = "wawawicomics" />
          <Story imagem = "assets/img/respondeai.svg" usuario = "respondeai" />
          <Story imagem = "assets/img/filomoderna.svg" usuario = "filomoderna" />
          <Story imagem = "assets/img/memeriagourmet.svg" usuario = "memeriagourmet" />
          <div class="setinha">
            <ion-icon name="chevron-forward-circle"></ion-icon>
          </div>
        </div>
        </>
    )
    
    
    }