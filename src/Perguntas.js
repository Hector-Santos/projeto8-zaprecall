import React from "react"
import Carta from "./Carta"
export default function Perguntas({resultados, setResultados, resultadoPergunta,
   setResultadoPergunta, thisIcon, setThisIcon}){
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
    <div className="perguntas">
        <div className="topoPerguntas"><img className="logoPerguntas" src="images/logo.png"/>
        <h1>ZapRecal</h1>
        </div>
          {deck.map((carta, index) =>
          <div className= {`pergunta ${resultados[index]}`}>
          <Carta carta={carta} index={index}
           resultados={resultados} setResultados = {setResultados}
            resultadoPergunta ={resultadoPergunta} setResultadoPergunta={setResultadoPergunta}
            thisIcon = {thisIcon} setThisIcon = {setThisIcon}/> 
          </div>)}

          </div>)
}