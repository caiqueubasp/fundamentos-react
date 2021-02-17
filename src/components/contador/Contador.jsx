import "./contador.css"

import { useState, React, Component } from "react"

class Contador extends Component {

    state = {
        numero: this.props.numeroInicial || 0,
        passo: this.props.passoInicial || 5,
        configPasso: this.props.configPassoIcinial || 10
    }

    constructor(props) {
        super(props)

    }

    inc = () => {
        this.setState({
            numero: this.state.numero + 1,
        })
    }

    dec = () => {
        this.setState({
            numero: this.state.numero - 1,
        })
    }

    incPasso = () => {
        this.setState({
            passo: this.state.passo + this.state.passo,
        })
    }

    decPasso = () => {
        this.setState({
            passo: this.state.passo - this.state.passo,
        })
    }

    configPassoDo = (evento) => {
        this.setState({
            myConfigPasso: +evento.target.value,
        })
    }

    confirmPasso = () => {
        this.setState({
            configPasso: this.setState.configPasso + this.setState.myConfigPasso,
        })
    }


    render() {
        return (
            <div className="Contador">
                <h2>Contador</h2>
                <div className="box-container-1">
                    <p>Valor inicial: {this.state.numero}</p>
                    <br />
                    <button onClick={this.dec}>Menos 1 -</button>
                    <button onClick={this.inc}>Mais 1 +</button>
                </div>


                <div className="box-container-2">
                    <p>Valor inicial Passo: {this.state.passo}</p>
                    <br />
                    <button onClick={this.decPasso}>Menos Passo -</button>
                    <button onClick={this.incPasso}>Mais Passo +</button>
                </div>

                <div className="box-container-3">
                    <p>Valor Configurado Passo: {this.state.configPasso}</p>
                    <br />
                    <input type="number" value={this.state.configPasso}
                        onChange={this.configPassoDo} />
                    <button onClick={this.confirmPasso}>Confirmar Passo</button>
                </div>








            </div>
        )
    }
}

export default Contador