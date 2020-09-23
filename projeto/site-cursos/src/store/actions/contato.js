import axios from 'axios';
const URL = 'http://localhost:3200/api/contatos'

export const SET_VALOR_CONTATO_TYPE = 'SET_VALOR_CONTATO_TYPE_';
export const SET_CONTATO_MSG_SUCESSO = 'SET_CONTATO_MSG_SUCESSO';
export const SET_CONTATO_MSG_ERRO = 'SET_CONTATO_MSG_ERRO';
export const LIMPAR_FORMULARIO_CONTATO = 'LIMPAR_FORMULARIO_CONTATO';

export const setValorContato = (evento) => {
    const json =  {
        type: SET_VALOR_CONTATO_TYPE + evento.target.id.toUpperCase(),
        value : evento.target.value 
    }

    return json;
}

export const limparFormularioContato = evento => {
    if(evento){
        evento.preventDefault();
    }

    return {
        type : LIMPAR_FORMULARIO_CONTATO
    }
}

export const adicionarContato = (contato, evento) => {
    return async dispatch => {
        try{
            if(evento){
                evento.preventDefault();
            }

            if(!contato || !contato.data || !contato.nome
                || !contato.email || !contato.assunto){
                dispatch(setMensagemErro('Favor informar todos os campos'));
                return;
            }
            await axios.post(URL, contato);
            dispatch(limparFormularioContato());
            dispatch(setMensagemSucesso('Contato enviado com sucesso'));
        }catch(e){
            console.log(e);
            dispatch(setMensagemErro('Ocorreu erro ao enviar contato'));
        }
    }
}

const setMensagemSucesso = mensagem => ({
    type: SET_CONTATO_MSG_SUCESSO,
    value : mensagem
});

const setMensagemErro = mensagem => ({
    type: SET_CONTATO_MSG_ERRO,
    value : mensagem
});