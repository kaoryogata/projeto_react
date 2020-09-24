import {
    SET_VALOR_CURSO_TYPE,
    SET_VALOR_CURSO_LISTA,
    SET_VALOR_CURSO_MSG_SUCESSO,
    SET_VALOR_CURSO_MSG_ERRO,
    SELECIONAR_CURSO,
    LIMPAR_FORMULARIO_CURSO
} from '../actions/curso';

const INITIAL_STATE = {
    _id: 0,
    codigo: 0,
    descricao: '',
    cargaHoraria: 0,
    preco: 0,
    categoria: 'INFORMATICA',
    lista: [],
    msgSucesso : '',
    msgErro : ''
}

export default (state = INITIAL_STATE, action) => {
    switch(action.type){
        case SET_VALOR_CURSO_LISTA : return {...state, lista : action.value};
        case SET_VALOR_CURSO_MSG_SUCESSO : return {...state, msgSucesso : action.value};
        case SET_VALOR_CURSO_MSG_ERRO : return {...state, msgErro : action.value};
        case SELECIONAR_CURSO : return {...state, 
            _id : action.value._id,
            codigo : action.value.codigo,
            descricao : action.value.descricao,
            cargaHoraria : action.value.cargaHoraria,
            preco : action.value.preco,
            categoria : action.value.categoria,
        };
        case SET_VALOR_CURSO_TYPE+"CODIGO" : return {...state, codigo : action.value};
        case SET_VALOR_CURSO_TYPE+"DESCRICAO" : return {...state, descricao : action.value};
        case SET_VALOR_CURSO_TYPE+"CARGAHORARIA" : return {...state, cargaHoraria : action.value};
        case SET_VALOR_CURSO_TYPE+"PRECO" : return {...state, preco : action.value};
        case SET_VALOR_CURSO_TYPE+"CATEGORIA" : return {...state, categoria : action.value};
        case LIMPAR_FORMULARIO_CURSO : return {...INITIAL_STATE, lista : state.lista};
        default: return state;
    }
}
