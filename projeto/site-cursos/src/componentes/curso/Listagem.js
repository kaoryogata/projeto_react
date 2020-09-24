import React, {useEffect} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { 
    getCursosAPI, 
    excluirCurso,
    selecionarCurso
} from '../../store/actions/curso';

const ListagemCursos = props => {
    const isPublic = props.isPublic || false;

    const {getCursosAPI} = props;

    useEffect(()=>{
        getCursosAPI();    
    }, [getCursosAPI]);

    const exibirLinhas = () => {
        const cursos = props.cursos || [];
        return cursos.map(curso => (
            <tr key={curso._id}>
                <td className="align-middle">{curso.codigo}</td>
                <td className="align-middle">{curso.descricao}</td>

                {isPublic ?
                    <>
                        <td className="align-middle">{curso.cargaHoraria}</td>
                        <td className="align-middle">{curso.preco}</td>
                        <td className="align-middle">{curso.categoria}</td>
                    </>
                    :
                    <td className="align-middle">
                        <button className="btn btn-success mr-2" onClick={() => props.selecionarCurso(curso)}>
                            <i className="fa fa-check"></i>
                        </button>
                        <button className="btn btn-danger" onClick={() => props.excluirCurso(curso._id)}>
                            <i className="fa fa-trash-o"></i>
                        </button>
                    </td>
                }
            </tr>
        ));
    }
    return (
        <div>
            <h3>Lista de Cursos</h3>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>Código</th>
                        <th>Descrição</th>
                        {isPublic ?
                            <>
                                <th>Carga Horária</th>
                                <th>Preço</th>
                                <th>Categoria</th>
                            </>
                            :
                            <th>Ações</th>
                        }

                    </tr>
                </thead>
                <tbody>
                    {exibirLinhas()}
                </tbody>
            </table>
        </div>
    );
}

const mapStoreToProps = store => ({
    cursos : store.curso.lista
});

const mapActionToProps = dispatch => bindActionCreators({
    getCursosAPI,
    excluirCurso,
    selecionarCurso
}, dispatch);

const conectado = connect(mapStoreToProps, mapActionToProps)(ListagemCursos);
export { conectado as ListagemCursos};
