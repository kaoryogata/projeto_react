import React from 'react';

const titulo = 'Meu Segundo Componente React';

export class Componente2 extends React.Component {
    render(){

        const curso = 'react'

        return(
            <>
            <h1>{titulo}</h1>
            <h2>{curso && curso.toUpperCase() === 'REACT' ? 'React.js' : 'Outras linguagens'}</h2>
            </>
        );
    }
}