import React from 'react';
import { CursoPage } from './Curso';
import { ContatoPage } from './Contato';
import { HomePage } from './Home'
import { Menu } from '../componentes/Menu';
import { Switch, Route } from 'react-router-dom'

export class IndexPages extends React.Component {
    render(){
        return(
            <>
                <Menu/>
                <Switch>
                    <Route path="/cursos" component={CursoPage}/>
                    <Route path="/contato" component={ContatoPage}/>
                    <Route path="*" component={HomePage}/>
                </Switch>
            </>
        )
    }
}