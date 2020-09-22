import React from 'react';
import { Cabecalho } from '../componentes/Cabecalho';
import { AgrupamentoCurso } from '../componentes/curso/Agrupamento';

export class CursoPage extends React.Component {
    render() {
        return (
            <div className={"container"}>
                <Cabecalho titulo={"Cursos"} 
                    subtitulo={"cadastro de cursos"} />
                <AgrupamentoCurso/>
            </div>
        )
    }
}