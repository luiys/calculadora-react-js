import React, { Component } from 'react';
import './style.css'

import Buttons from './components/Buttons';
import Display from './components/Display';

class App extends Component {

    constructor(props) {
        super(props)

        this.state = {
            tela: '',
            memoria: [],
        }
    }

    write = (valor) => {

        let newMemoria = this.state.memoria.slice();
        const ultimoItem = this.state.memoria.length - 1;

        if (typeof (valor) === 'string' && this.state.memoria.length === 0) {
            window.alert('Erro1')
        } else if (this.state.memoria.length > 0 && typeof (this.state.memoria[this.state.memoria.length - 1]) === 'string' && typeof (valor) === 'string') {
            window.alert('Erro2')
        } else {

            let newTela = this.state.tela + valor;
            this.setState({ tela: newTela })
            valor = valor === 'x' ? '*' : valor

            if (typeof (valor) === 'number' && typeof (this.state.memoria[this.state.length - 1]) === 'string') {
                newMemoria.push(valor);
                this.setState({ memoria: newMemoria })
            } else if (typeof (valor) === 'number' && typeof (this.state.memoria[this.state.memoria.length - 1]) === 'number') {
                let numberAsString = `${this.state.memoria[this.state.memoria.length - 1]}${valor}`;
                let newMemoria = this.state.memoria;

                newMemoria[ultimoItem] = Number(numberAsString);
                this.setState({ memoria: newMemoria })
            } else {
                newMemoria.push(valor);
                this.setState({ memoria: newMemoria })
            }

        }

        console.log(this.state.memoria)

    }

    clean() {
        this.setState({ tela: '' })
        this.setState({ memoria: [] })
    }

    result() {

        let newMemoria = this.state.memoria.slice();
        let res = 0;

        if (typeof (this.state.memoria[this.state.memoria.length - 1]) == 'string') {
            this.state.memoria.pop()

        }

        for (let i = 0; i < this.state.memoria.length; i++) {
            if (typeof (this.state.memoria[i]) === 'string' && i === 1) {
                switch (this.state.memoria[i]) {
                    case '+':
                        res += this.state.memoria[i - 1] + this.state.memoria[i + 1]
                        break;
                    case '-':
                        res += this.state.memoria[i - 1] - this.state.memoria[i + 1]
                        break;
                    case '*':
                        res += this.state.memoria[i - 1] * this.state.memoria[i + 1]
                        break;
                    case '/':
                        res += this.state.memoria[i - 1] / this.state.memoria[i + 1]
                        break;
                    default:
                        window.alert('Erro')
                        break;
                }
            } else if (typeof (this.state.memoria[i]) === 'string' && i !== 1) {
                switch (this.state.memoria[i]) {
                    case '+':
                        res += this.state.memoria[i + 1]
                        break;
                    case '-':
                        res -= this.state.memoria[i + 1]
                        break;
                    case '*':
                        res *= this.state.memoria[i + 1]
                        break;
                    case '/':
                        res /= this.state.memoria[i + 1]
                        break;
                    default:
                        window.alert('Erro')
                        break;
                }
            }
        }

        newMemoria = [res];
        console.log(this.state.memoria);

        this.setState({ memoria: newMemoria });
        this.setState({ tela: newMemoria })
    }


    render() {
        return (
            <div className="container">

                <div className='content'>
                    <div className="title">
                        <h1>Calculadora</h1>
                    </div>

                    <div className="box">
                        <div className="calculadora">
                            <div className="display">
                                <Display tela={this.state.tela} />
                            </div>
                            <div className='all-buttons'>
                                <div className="buttons">
                                    <Buttons value={1} onClick={() => this.write(1)} />
                                    <Buttons value={2} onClick={() => this.write(2)} />
                                    <Buttons value={3} onClick={() => this.write(3)} />
                                    <Buttons value={"Limpar"} onClick={() => this.clean()} />
                                </div>
                                <div className="buttons">
                                    <Buttons value={4} onClick={() => this.write(4)} />
                                    <Buttons value={5} onClick={() => this.write(5)} />
                                    <Buttons value={6} onClick={() => this.write(6)} />
                                    <Buttons value={"+"} onClick={() => this.write('+')} />
                                </div>
                                <div className="buttons">
                                    <Buttons value={7} onClick={() => this.write(7)} />
                                    <Buttons value={8} onClick={() => this.write(8)} />
                                    <Buttons value={9} onClick={() => this.write(9)} />
                                    <Buttons value={"-"} onClick={() => this.write('-')} />
                                </div>
                                <div className="buttons">
                                    <Buttons value={0} onClick={() => this.write(0)} />
                                    <Buttons value={'/'} onClick={() => this.write('/')} />
                                    <Buttons value={'X'} onClick={() => this.write('x')} />
                                    <Buttons value={"="} onClick={() => this.result('=')} />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="footer">
                        <h2>&copy; Luis Gustavo</h2>
                    </div>

                </div>
            </div>
        );
    }
}


export default App;