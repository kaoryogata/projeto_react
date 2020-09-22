import React from 'react';
import { FormularioCurso } from './Formulario';
import { ListagemCurso } from './Listagem';

const mockCursos = [
    {codigo: 9999, descricao: 'Curso 9999', categoria: 'REDES', cargaHoraria: 20, preco: 150.9},
    {codigo: 9999, descricao: 'Curso 9999', categoria: 'REDES', cargaHoraria: 20, preco: 150.9},
    {codigo: 9999, descricao: 'Curso 9999', categoria: 'REDES', cargaHoraria: 20, preco: 150.9},
    {codigo: 9999, descricao: 'Curso 9999', categoria: 'REDES', cargaHoraria: 20, preco: 150.9},
]

export class AgrupamentoCurso extends React.Component {
    render() {
        return (
            <div className="row border-bottom">
                <div className="col-md-6"> 
                    <FormularioCurso />
                </div>
                <div className="col-md-6">
                    <ListagemCurso cursos={mockCursos} />
                </div>
            </div>
        );
    }
}