
import IndiretaFilho from "./IndiretaFilho";
import {useState} from "react"

const IndiretaPai = props => {

    let [nome, setNome] = useState("?")
    let [idade, setIdade] = useState(0)
    let [nerd, setNerd] = useState(false)

    const fornecerInformacoes = (nomeParam, idadeParam, nerdParam)=>{
        setNome(nomeParam)
        setIdade(idadeParam)
        setNerd(nerdParam)

        console.log(nome, idade, nerd)
    }

    return (
        <div>
          Pai: <span>{nome} <strong>{idade} </strong>{nerd ? "Verdadeiro" : "Falso"}</span>
          <div>
              <IndiretaFilho quandoClicar={fornecerInformacoes}></IndiretaFilho>
          </div>
        </div>
    )
}

export default IndiretaPai