import moment from 'moment';
import { 
    SET_VALOR_CONTATO_TYPE,
    LIMPAR_FORMULARIO_CONTATO,
    SET_CONTATO_MSG_SUCESSO,
    SET_CONTATO_MSG_ERRO
} from '../actions/contato';

const INITIAL_STATE = {
    data : moment().format("YYYY-MM-DD"),
    nome : '',
    email : '',
    assunto : '',
    msgSucesso: '',
    msgErro: ''
}

export default (state = INITIAL_STATE, action) => {
    switch(action.type){
        case SET_VALOR_CONTATO_TYPE + "DATA" : return {...state, data : action.value}
        case SET_VALOR_CONTATO_TYPE + "NOME" : return {...state, nome : action.value}
        case SET_VALOR_CONTATO_TYPE + "EMAIL" : return {...state, email : action.value}
        case SET_VALOR_CONTATO_TYPE + "ASSUNTO" : return {...state, assunto : action.value}
        case SET_CONTATO_MSG_SUCESSO : return {...state, msgSucesso : action.value}
        case SET_CONTATO_MSG_ERRO : return {...state, msgErro : action.value}
        case LIMPAR_FORMULARIO_CONTATO : return INITIAL_STATE;
        default: return state;
    }
}
