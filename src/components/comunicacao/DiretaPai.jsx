
import DiretaFilho from "./DiretaFilho";

const DiretaPai = props => {

    return (
        <div>
            <DiretaFilho nome="Caique" idade={27} nerd={true}>
            </DiretaFilho>

            <DiretaFilho nome="Vitor" idade={20} nerd={false}>
            </DiretaFilho>
        </div>
    )
}

export default DiretaPai