import React from 'react';
import { FormularioCurso } from './Formulario';
import { ListagemCurso } from './Listagem';

export class AgrupamentoCurso extends React.Component {
    render() {
        return (
            <div className="row border-bottom">
                <div className="col-md-6"> 
                    <FormularioCurso />
                </div>
                <div className="col-md-6">
                    <ListagemCurso />
                </div>
            </div>
        );
    }
}