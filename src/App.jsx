import Primeiro from "./components/basicos/Primeiro";
import ComParametros from "./components/basicos/ComParametros";
import Fragmento from "./components/basicos/Fragmento";
import NumeroAleatorio from "./components/basicos/NumeroAleatorio";

const App = (props) => {
    const tag = <h1>Olá React!!!</h1>;

    return (
        <div id="app">
            { tag}
            <br></br>
            <Fragmento></Fragmento>

            <ComParametros
                titulo="Nota do Aluno"
                aluno="Caique Souza"
                nota={9.7}
            ></ComParametros>
            <ComParametros
                titulo="Nota do Aluno"
                aluno="Dom Quixote"
                nota={4.9}
            ></ComParametros>

            <Primeiro></Primeiro>

            <NumeroAleatorio
            min={2}
            max={20}
            ></NumeroAleatorio>

        </div>
    )
}

export default App;