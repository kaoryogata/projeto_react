export const SET_VALOR_CONTATO_TYPE = 'SET_VALOR_CONTATO_TYPE_';


export const setValorContato = (evento) => {
    return {
        type: SET_VALOR_CONTATO_TYPE + evento.target.id.toUpperCase(),
        value: evento.target.value
    }
}