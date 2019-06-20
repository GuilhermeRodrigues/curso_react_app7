import React, { Component } from 'react';

import { View } from 'react-native';

import Entrada from './Entrada';
import Operacao from './Operacao';
import Comando from './Comando';

class Painel extends Component {
    constructor(props) {
        super(props);

        this.state = { num1: '1', num2: '2', operacao: 'subtracao' };

        this.calcular = this.calcular.bind(this);
        this.atualizaValor = this.atualizaValor.bind(this);
        this.atualizaOperacao = this.atualizaOperacao.bind(this);
    }

    calcular() {
        let resultado = 0;
        
        switch (this.state.operacao) {
            case 'soma':
                resultado = parseFloat(this.state.num1) + parseFloat(this.state.num2);
                break;
            case 'subtracao':
                resultado = parseFloat(this.state.num1) - parseFloat(this.state.num2);
                break;
            default: 
                resultado = 0;
        }

        console.log(resultado);
    }

    atualizaOperacao(operacao) {
        this.setState({ operacao });
    }

    atualizaValor(nomeCampo, numero) {        
        const obj = {};
        obj[nomeCampo] = numero;

        this.setState(obj);
    }

    render() {
        return (
            <View>
                <Entrada 
                    num1={this.state.num1} 
                    num2={this.state.num2} 
                    atualizaValor={this.atualizaValor}
                />
                <Operacao operacao={this.state.operacao} atualizaOperacao={this.atualizaOperacao} />
                <Comando acao={this.calcular} />
            </View>
        );
    }    
}

export { Painel };
