import React from 'react';
import { CursoPage } from './Curso';
import { ContatoPage } from './Contato';

export class IndexPages extends React.Component {
    render(){
        return(
            <>
                <CursoPage/>
                <ContatoPage/>
            </>
        )
    }
}