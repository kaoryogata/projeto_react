import React from 'react';
import { Cabecalho } from '../componentes/Cabecalho';
import { ListagemCursos} from '../componentes/curso/Listagem';

export class HomePage extends React.Component{
    render(){
        return(
            <div className={"container"}>
                <Cabecalho titulo={"Bem vindo ao cursos ABC"} 
                    subtitulo={"a melhor escola de cursos online"}/>
                <ListagemCursos isPublic={true}/>
            </div>
        )
    }
}