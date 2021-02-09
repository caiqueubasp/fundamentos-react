import ReactDOM from "react-dom";
import React from "react";
import "./index.css"

import Primeiro from "./components/basicos/Primeiro";

const tag = <h1>Olá React!!!</h1>;
const containerReact = document.getElementById("root");


ReactDOM.render(
    <div>
        { tag }
        <br></br>
        <Primeiro></Primeiro>
    </div>, 

containerReact)