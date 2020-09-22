import React from 'react';
import { Cabecalho } from '../componentes/Cabecalho';

export class ContatoPage extends React.Component {
    render(){
        return(
            <div className={"container"}>
                <Cabecalho titulo={"Contato"} 
                    subtitulo={"Entre em contato conosco"} />
            </div>
        )
    }
}