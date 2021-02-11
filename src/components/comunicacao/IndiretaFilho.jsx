
import IndiretaPai from "./IndiretaPai";

const IndiretaFilho = props => {

    return (
        <div>
          Filho

          <button onClick={
              function(e){
                  props.quandoClicar("Pedro", 45, true)
              }
          }>
              Fornecer informações
              </button>

        </div>

    )
}

export default IndiretaFilho