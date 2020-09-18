import React from 'react';

export default class Componente1 extends React.Component {
    //Sobrescrever a funçao render que retorna um HTML
    render(){

        const estilo = {
            fontFamily: "Segoe UI, Tahoma, Geneva, Verdana, sans-serif",
            color: 'green'
        }

        return (
            //React só aceita apenas UM elemento pai <>
            <>
                <h1 className= "fonte">MEU PRIMEIRO COMPONENTE DO REACT</h1>
                <h2 style={estilo}>MEU PRIMEIRO COMPONENTE DO REACT</h2>
                <h3>MEU PRIMEIRO COMPONENTE DO REACT</h3>
            </>
        );
    }
}