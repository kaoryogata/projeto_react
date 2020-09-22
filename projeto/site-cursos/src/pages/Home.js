import React from 'react';
import { Cabecalho } from '../componentes/Cabecalho';
import { ListagemCurso} from '../componentes/curso/Listagem';
import axios from 'axios';

const URL = 'http://localhost:3200/api/cursos';

export class HomePage extends React.Component{

    state = {
        cursos : []
    }

    async componentDidMount(){
        try{
            const response = await axios.get(URL);
            this.setState({cursos : response.data});
        }catch(e){
            console.log(e)
        }
    }

    render(){

        return(
            <div className={"container"}>
                <Cabecalho titulo={"Bem vindo ao cursos ABC"} 
                    subtitulo={"a melhor escola de cursos online"}/>
                <ListagemCurso cursos={this.state.cursos} isPublic={true}/>
            </div>
        )
    }
}