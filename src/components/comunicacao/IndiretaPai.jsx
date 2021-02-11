
import IndiretaFilho from "./IndiretaFilho";

const IndiretaPai = props => {

    let nome = "?"
    let idade = 0
    let nerd = false

    const fornecerInformacoes = (nomeParam, idadeParam, nerdParam)=>{
        nome = nomeParam
        idade = idadeParam
        nerd = nerdParam

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