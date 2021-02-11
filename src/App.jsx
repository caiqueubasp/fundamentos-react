import "./App.css"


import Primeiro from "./components/basicos/Primeiro";
import ComParametros from "./components/basicos/ComParametros";
import Fragmento from "./components/basicos/Fragmento";
import NumeroAleatorio from "./components/basicos/NumeroAleatorio";
import Card from "./components/layout/Card";
import Familia from "./components/basicos/Familia";
import FamiliaMembro from "./components/basicos/FamiliaMembro";
import ListaAlunos from "./components/repeticao/ListaAlunos";
import TabelaProdutos from "./components/repeticao/TabelaProdutos";
import ParOuImpar from "./components/condicional/ParOuImpar";
import UsuarioInfo from "./components/condicional/UsuarioInfo";
import DiretaPai from "./components/comunicacao/DiretaPai";
import IndiretaPai from "./components/comunicacao/IndiretaPai"

const App = (props) => {
    const tag = <h1>Olá React!!!</h1>;

    return (
        <div id="App">
            { tag}
            <br></br>

            <Card
                titulo="#10 - Comunicação Indireta"
                color="#d4c4c8"
            >
                <IndiretaPai></IndiretaPai>
            </Card>

            <Card
                titulo="#09 - Comunicação Direta"
                color="#59323C"
            >
                <DiretaPai></DiretaPai>
            </Card>


            <Card
                titulo="#08 - Renderização Condicional"
                color="#ddd"
            >
                <ParOuImpar
                    numero={56}></ParOuImpar>
                <br />
                <UsuarioInfo
                    usuario={{
                        nome: "Caique"
                    }}
                ></UsuarioInfo>

                <UsuarioInfo></UsuarioInfo>
            </Card>

            <Card
                titulo="#07 - Membros Familia"
                color="#4D7298">
                <TabelaProdutos></TabelaProdutos>
            </Card>

            <Card
                titulo="#06 - Membros Familia"
                color="#77A6B6">
                <ListaAlunos></ListaAlunos>
            </Card>

            <div className="Cards">

                <Card
                    titulo="#05 - Membros Familia"
                    color="#4D7298"
                >
                    <Familia sobrenome="Souza">
                        <FamiliaMembro nome="Caique"></FamiliaMembro>
                        <FamiliaMembro nome="Pedro"></FamiliaMembro>
                        <FamiliaMembro nome="Marleide"></FamiliaMembro>
                        <FamiliaMembro nome="Pedro Henrique"></FamiliaMembro>
                        <FamiliaMembro nome="Vitor"></FamiliaMembro>
                        <FamiliaMembro nome="Guilherme"></FamiliaMembro>

                    </Familia>
                </Card>

                <Card
                    titulo="#04 - Números Aleatórios"
                    color="#D0EFB1"
                >
                    <NumeroAleatorio
                        min={2}
                        max={20}
                    ></NumeroAleatorio>
                    <NumeroAleatorio
                        min={2}
                        max={20}
                    ></NumeroAleatorio>
                    <NumeroAleatorio
                        min={2}
                        max={20}
                    ></NumeroAleatorio>
                    <NumeroAleatorio
                        min={2}
                        max={20}
                    ></NumeroAleatorio>
                    <NumeroAleatorio
                        min={2}
                        max={20}
                    ></NumeroAleatorio>
                    <NumeroAleatorio
                        min={2}
                        max={20}
                    ></NumeroAleatorio>
                </Card>

                <Card titulo="#03 - Fragmento" color="#B3D89C">
                    <Fragmento></Fragmento>
                </Card>

                <Card titulo="#02 - Com Parametros" color="#9DC3C2">
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
                </Card>

                <Card titulo="#01 - Primeiro exercicio" color="#77A6B6">
                    <Primeiro></Primeiro>
                </Card>

            </div>

        </div>
    )
}

export default App;