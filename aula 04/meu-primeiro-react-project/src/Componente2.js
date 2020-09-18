import React from 'react';

export class Componente2 extends React.Component {
    render(){

        const curso = 'react'

        //Quando chega nas {} o processador lê em javascript
        return(
            <>
            <h1>{this.props.title}</h1>
            <h2>{curso && curso.toUpperCase() === 'REACT' ? 'React.js' : 'Outras linguagens'}</h2>
            </>
        );
    }
}