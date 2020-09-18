import React from 'react';

export default class Componente1 extends React.Component {
    //Sobrescrever a funçao render que retorna um HTML
    render(){
        return (
            //React só aceita apenas UM elemento pai
            <>
                <h1>MEU PRIMEIRO COMPONENTE DO REACT</h1>
                <h2>MEU PRIMEIRO COMPONENTE DO REACT</h2>
                <h3>MEU PRIMEIRO COMPONENTE DO REACT</h3>
            </>
        );
    }
}