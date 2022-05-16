import React from "react"
import Perguntas from "./Perguntas"
import TelaInicial from "./TelaInicial"
export default function Tela(){
    const [estadoTela, setEstadoTela] = React.useState(0)
    const [resultados, setResultados] = React.useState([0,1,2,3,4,5,6,7])
    const [resultadoPergunta, setResultadoPergunta] = React.useState("");
    const [thisIcon, setThisIcon] = React.useState(["play-outline","play-outline","play-outline","play-outline","play-outline","play-outline","play-outline","play-outline"])
    
    
     console.log(estadoTela)
   return(estadoTela === 0 ?
    <TelaInicial estadoTela = {estadoTela} setEstadoTela= {setEstadoTela}/>
    :
     <Perguntas resultados = {resultados} setResultados = {setResultados} 
     resultadoPergunta={resultadoPergunta} setResultadoPergunta = {setResultadoPergunta}
     thisIcon = {thisIcon} setThisIcon = {setThisIcon}/>)
}