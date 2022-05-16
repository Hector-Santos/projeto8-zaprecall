import reactDom from "react-dom";
import React from "react";
import Tela from "./Tela";


function App(){
    
    return ( 
        <React.Fragment>
        <Tela/>
        </React.Fragment>
    )
}

const app = App();
reactDom.render(app, document.querySelector(".root"));