import react from "react";
import React from "react"
import Carta from "./Carta"
export default function Perguntas({resultados, setResultados, resultadoPergunta,
   setResultadoPergunta, thisIcon, setThisIcon}){
     const [contador , setContador] = React.useState(0)
     const [tamanhorodape, setTamanhorodape] = React.useState("")
     let x = 0
    let deck = 
      [
        {Q: "O que é JSX?", R: "Uma extensão de linguagem do JavaScript"},
        {Q: "O React é __", R: "uma biblioteca JavaScript para construção de interfaces"},
        {Q: "Componentes devem iniciar com __ ", R: "letra maiúscula"},
        {Q: " Podemos colocar __ dentro do JSX", R: "expressões"},
        {Q: "O ReactDOM nos ajuda __?", R: "Interagindo com a DOM para colocar componentes React na mesma"},
        {Q: "Usamos o npm para __", R: "gerenciar os pacotes necessários e suas dependências"},
        {Q: "Usamos props para __ ?", R: "passar diferentes informações para componentes "},
        {Q: "Usamos estado (state) para __", R: "dizer para o React quais informações quando atualizadas devem renderizar a tela novamente"}
      ]

      function aleatorio() {
        return Math.random() - 0.5
      }
       deck = deck.sort(aleatorio);
      
   
    return(
      <React.Fragment>
    <div className="perguntas">
        <div className="topoPerguntas"><img className="logoPerguntas" src="images/logo.png"/>
        <h1>ZapRecal</h1>
        </div>
          {deck.map((carta, index) =>
          <div className= {`pergunta `}>
          <Carta carta={carta} index={index}
           resultados={resultados} setResultados = {setResultados}
            resultadoPergunta ={resultadoPergunta} setResultadoPergunta={setResultadoPergunta}
            thisIcon = {thisIcon} setThisIcon = {setThisIcon} contador= {contador} setContador = {setContador}/> 
          </div>)}

    </div> 
     <div className="rodape">
     <span> <h1>{contador}/8 Concluidos</h1></span>
     {contador == 8 && resultados.includes("vermelho") && 
     <div>
       
        <img src="/images/sad.png"></img>
       <strong>Putz...</strong><br/>
       Ainda faltam alguns<br/>
        mas não desanime!
     </div>
     
     }
     {contador == 8 && !resultados.includes("vermelho") && 
     <div>
       
       <img src="/images/party.png"></img>
       <strong>Parabéns!</strong><br/>
       Você não esqueceu <br/>
       de nenhum flashcard!!
     </div>
     
     }
     <div class="icons">
     {resultados.map((resultado) => {
     if(resultado === "laranja") {
     return (
       <div className={resultado}>
     <ion-icon   name="help-circle"></ion-icon>
      </div>
     )}
     
     if(resultado === "vermelho") {
      return (
        <div className={resultado}>
       <ion-icon name="close-circle"></ion-icon>
       </div>
      )}
      if(resultado === "verde") {
        
        return (
          <div className={resultado}>
         <ion-icon  name="checkmark-circle"></ion-icon>
         </div>
      )
    }
  }
)
}
     </div>
     </div>
    </React.Fragment>
    )
  }
    