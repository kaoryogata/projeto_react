import React from 'react';

export class Componente2 extends React.Component {

    //Precisa atualizar o estado com a interação do usuário
    state = {
        nome : ''
    }

    render(){

        const curso = 'react'

        //Quando chega nas {} o processador lê em javascript
        return(
            <>
            <h1>{this.props.title}</h1>
            <span>Nome:</span>
            <input type="text" value={this.state.nome}
                onChange={e => this.setState({nome: e.target.value})}></input>
            <button type="reset" onClick={() => this.setState({nome: ''})}>LIMPAR</button>
            <h2>{curso && curso.toUpperCase() === 'REACT' ? 'React.js' : 'Outras linguagens'}</h2>
            </>
        );
    }
}