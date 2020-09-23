export const SET_VALOR_CONTATO_TYPE = 'SET_VALOR_CONTATO_TYPE_';
export const LIMPAR_FORMULARIO_CONTATO = 'LIMPAR_FORMULARIO_CONTATO';


export const setValorContato = (evento) => {
    return {
        type: SET_VALOR_CONTATO_TYPE + evento.target.id.toUpperCase(),
        value: evento.target.value
    }
}

export const limparFormularioContato = (evento) => {
    if(evento){
        evento.preventDefault();
    }
    return{ 
        type: LIMPAR_FORMULARIO_CONTATO
    }
}