import React from 'react';
import {Lista} from './Lista';

export default class Componente1 extends React.Component {
    //Sobrescrever a funçao render que retorna um HTML

    state = {
        title: 'Meu Primeiro Componente do React',
        cursos: ['React', 'Kotlin', 'Angular']
    }

    render(){

        return (
            //React só aceita apenas UM elemento pai <>
            <>
                <h1 className= "fonte">{this.state.title}</h1>
                {this.state.cursos.map((curso, i) => (
                    <Lista key={i} info={curso}/>
                ))}
            </>
        );
    }
}