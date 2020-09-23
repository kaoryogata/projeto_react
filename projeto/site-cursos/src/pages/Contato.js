import React from 'react';
import { Cabecalho } from '../componentes/Cabecalho';
import { FormularioContato } from '../componentes/contato/Formulario';

export class ContatoPage extends React.Component {
    render(){
        return(
            <div className={"container"}>
                <Cabecalho titulo={"Contato"} 
                    subtitulo={"Entre em contato conosco"} />
                <FormularioContato/>
            </div>
        )
    }
}