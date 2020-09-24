import React from 'react';
import { FormularioCurso } from './Formulario';
import { ListagemCursos } from './Listagem';
import { connect } from 'react-redux';

class AgrupamentoCurso extends React.Component {
    render() {
        const {msgErro, msgSucesso} = this.props

        return (
            <>
                {!msgErro && msgSucesso ?
                    <div className="alert alert-success" role="alert">
                        <strong>Parabéns</strong> {msgSucesso}
                    </div>
                    : null
                }

                {msgErro ?
                    <div className="alert alert-danger" role="alert">
                        <strong>Ops!</strong> {msgErro}
                    </div>
                    : null
                }
                <div className="row border-bottom">
                    <div className="col-md-6">
                        <FormularioCurso />
                    </div>
                    <div className="col-md-6">
                        <ListagemCursos />
                    </div>
                </div>
            </>
        );
    }
}

const mapStoreToProps = store => ({
    msgSucesso : store.curso.msgSucesso,
    msgErro : store.curso.msgErro
});

const conectado = connect(mapStoreToProps, null)(AgrupamentoCurso);
export { conectado as AgrupamentoCurso}
