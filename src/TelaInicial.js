

export default function TelaInicial({estadoTela, setEstadoTela}){

    return(
    <div className="telaInicial">
    <img className="logo" src="images/logo.png"/>
    <h1>ZapRecal</h1>
    <button className="iniciar" onClick={()=> setEstadoTela(1) }>Iniciar Recal!!!</button>
  </div>

    )

}
