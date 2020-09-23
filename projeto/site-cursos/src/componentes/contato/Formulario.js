import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { setValorContato, limparFormularioContato } from '../../store/actions/contato';

const FormularioContato = props => {

    const {data, nome, email, assunto, setValorContato, limparFormularioContato} = props;
    return(
    <div>
        <h3 className="border-bottom">Formulário</h3> 
        <form>
            <div className="form-group row"> 
                <label htmlFor="data" className="col-sm-3 col-form-label">Data:</label> 
                <div className="col-sm-5 col-6">
                    <input type="date" className="form-control" id="data"
                       value={data} 
                       onChange={setValorContato}/> 
                </div>
            </div>
            <div className="form-group row"> 
                <label htmlFor="nome" className="col-sm-3 col-form-label">Nome:</label> 
                <div className="col-sm-9">
                    <input type="text" className="form-control" id="nome"
                        value={nome}
                        onChange={setValorContato}/> 
                </div>
            </div>
            <div className="form-group row"> 
                <label htmlFor="email" className="col-sm-3 col-form-label">Email:</label> 
                <div className="col-sm-9">
                    <input type="email" className="form-control" id="email"
                        value={email}
                        onChange={setValorContato}/> 
                </div>
            </div>
            <div className="form-group row"> 
                <label htmlFor="assunto" className="col-sm-3 col-form-label">Assunto:</label> 
                <div className="col-sm-9">
                    <textarea className="form-control" id="assunto" rows="5"
                        value={assunto}
                        onChange={setValorContato}/> 
                </div>
            </div>
            <div className="form-group row">
                <button className="btn btn-primary ml-3 mb-3">
                    Adicionar
                </button>
                <button className="btn btn-secondary ml-3 mb-3" onClick = {limparFormularioContato}>
                    Limpar
                </button>
            </div>
        </form>
    </div>
)};

//Mapeou os contatos da store pra props
const mapStoreToProps = store => ({
    //criou as props interessantes
    data : store.contato.data,
    nome : store.contato.nome,
    email : store.contato.email,
    assunto : store.contato.assunto
});

const mapActionsToProps = dispatch => bindActionCreators ({
    setValorContato,
    limparFormularioContato
}, dispatch);

//funçao para conectar as props ao formulario
const conectado = connect(mapStoreToProps, mapActionsToProps)(FormularioContato);

export {conectado as FormularioContato};