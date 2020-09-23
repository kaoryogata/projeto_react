import moment from 'moment';
import {SET_VALOR_CONTATO_TYPE,
    LIMPAR_FORMULARIO_CONTATO} from '../actions/contato';

const INITIAL_STATE = {
    data : moment().format('YYYY-MM-DD'),
    nome : 'Kaory Ogata',
    email : 'kaory@eu.com',
    assunto : 'Olá, gostaria de saber mais sobre o curso de React Impacta'
}

export default (state = INITIAL_STATE, action) => {
    switch(action.type){
        //Spread operator para manter estados imutaveis (...)
        case SET_VALOR_CONTATO_TYPE + "DATA" :return {...state, data : action.value}
        case SET_VALOR_CONTATO_TYPE + "NOME" :return {...state, nome : action.value}
        case SET_VALOR_CONTATO_TYPE + "EMAIL" :return {...state, email : action.value}
        case SET_VALOR_CONTATO_TYPE + "ASSUNTO" :return {...state, assunto : action.value}
        case LIMPAR_FORMULARIO_CONTATO : return INITIAL_STATE;
        default: return state;
    }
}