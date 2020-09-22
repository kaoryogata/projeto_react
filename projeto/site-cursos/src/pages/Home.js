import React from 'react';
import { Cabecalho } from '../componentes/Cabecalho';

export class HomePage extends React.Component {
    render(){
        return(
            <div className={"container"}>
                <Cabecalho titulo={"Cursos ABC"} 
                    subtitulo={"Bem vindos ao Cursos ABC"} />
            </div>
        )
    }
}