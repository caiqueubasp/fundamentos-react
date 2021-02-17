
import IndiretaPai from "./IndiretaPai";
import { useState } from "react"

const IndiretaFilho = props => {

    const max = 90
    const min = 42

    const [isNerd, setIsNerd] = useState(true)

    const gerarNome = () => Math.random().toString(36).substring(2);

    const gerarIdade = () => parseInt(Math.random() * (max - min) + min);

    const gerarNerd = () =>  Math.random() > 0.5

    return (
        <div>
          Filho

          <button onClick={
              function(e){
                  props.quandoClicar(gerarNome(), gerarIdade(), gerarNerd())
              }
          }>
              Fornecer informações
              </button>

        </div>

    )
}

export default IndiretaFilho