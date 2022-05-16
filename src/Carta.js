import React from "react"
export default function Carta({carta, index, resultados, setResultados,
     resultadoPergunta, setResultadoPergunta, thisIcon, setThisIcon}){
    const [estadoCarta, setEstadoCarta] = React.useState(0)
    
    
    function gerenciarResposta(classeDaResposta){
        setResultadoPergunta(classeDaResposta)
        let arrayAuxiliar = resultados; 
        arrayAuxiliar[index]=classeDaResposta;
        let arrayAuxiliar2 = thisIcon
        arrayAuxiliar2[index] = classeDaResposta
        for(let i=0; i <= index; i++){
            if(arrayAuxiliar2[i] === "verde"){
            arrayAuxiliar2[i] = "checkmark-circle"
            } else if(arrayAuxiliar2[i] === "vermelho"){
            arrayAuxiliar2[i] = "close-circle"
           }else if(arrayAuxiliar2[i] === "laranja"){
            arrayAuxiliar2[i] = "help-circle"
    }
        }

        
        
        setThisIcon(arrayAuxiliar2)
        setResultados(arrayAuxiliar);
        setEstadoCarta(0)
    }
   
    console.log(resultados)
    return(
        estadoCarta === 0 ?
        <li onClick={()=> setEstadoCarta(1)}
        >Pergunta {index+1} <ion-icon  name={thisIcon[index]}></ion-icon></li> :
         estadoCarta === 1 ?
        <li className = "virada" onClick={()=> setEstadoCarta(2)}>{carta.Q}</li> :
        <li className = "virada revirada">
            {carta.R}
            <div className="botoes">
            <button className="btnVermelho" onClick={()=> gerenciarResposta("vermelho")} >Não lembrei</button>
            <button className="btnLaranja"onClick={()=>gerenciarResposta("laranja")}>Quase não lembrei</button>
            <button className="btnVerde"onClick={()=>gerenciarResposta("verde")}>Zap!</button>
            </div>
        </li>

        )    
}
    
/* lá no rodapé: resultados.map(checar se é uma string com um dos 3 possiveis resultados ===>
    renderizar icone correspondente) */
     
        
    