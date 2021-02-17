import "./input.css"
import { useState } from "react"

const Input = (props) => {

    const [valor, setValor] = useState("Inicial")

    function quandoMudar(e) {
        setValor(e.target.value)
        console.log(e.target.value)
    }

    return (

        <div className="Input">

            <input value={valor} onChange={quandoMudar}></input>

            <br /><br />

            <input value={valor} readOnly></input>

            <br /><br />

            <input value={undefined} ></input>
        </div>
    )
}

export default Input