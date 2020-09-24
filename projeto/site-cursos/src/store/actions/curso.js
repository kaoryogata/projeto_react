import axios from 'axios';
const URL = 'http://localhost:3200/api/cursos';

export const SET_VALOR_CURSO_TYPE = 'SET_VALOR_CURSO_TYPE_';
export const SET_VALOR_CURSO_LISTA = 'SET_VALOR_CURSO_LISTA';
export const SET_VALOR_CURSO_MSG_SUCESSO = 'SET_VALOR_CURSO_MSG_SUCESSO';
export const SET_VALOR_CURSO_MSG_ERRO = 'SET_VALOR_CURSO_MSG_ERRO';
export const SELECIONAR_CURSO = 'SELECIONAR_CURSO';
export const LIMPAR_FORMULARIO_CURSO = 'LIMPAR_FORMULARIO_CURSO';

export const getCursosAPI = () => {
    return async dispatch => {
        try{
            const response = await axios.get(URL);
            dispatch({
                type : SET_VALOR_CURSO_LISTA,
                value : response.data
            });
        }catch(e){
            console.log(e);
            dispatch(setMensagemErro('Ocorreu erro ao listar cursos'));
        }
    }
}

export const excluirCurso = _id => {
    return async dispatch => {
        if(window.confirm('Confirma excluir o curso selecionado?')){
            try{
                await axios.delete(URL+'/'+_id);
                dispatch(setMensagemSucesso('Curso deletado com sucesso'));
                dispatch(getCursosAPI());
            }catch(e){
                console.log(e)
                dispatch(setMensagemErro('Ocorreu erro ao deletar curso'));
            }
        }
    }
}

export const selecionarCurso = (curso) => {
    return {
        type: SELECIONAR_CURSO,
        value : curso
    }
}

export const setValorCurso = (evento) => {
    const json =  {
        type: SET_VALOR_CURSO_TYPE + evento.target.id.toUpperCase(),
        value : evento.target.value 
    }

    return json;
}

export const limparFormularioCurso = (evento) => {
    if(evento){
        evento.preventDefault();
    }

    return {
        type : LIMPAR_FORMULARIO_CURSO
    }
}

export const salvarCursoAPI = (curso, evento) => {
    return async dispatch => {
        let isUpdate = false;
        try{
            if(evento){
                evento.preventDefault();
            }

            const {_id, codigo, descricao, cargaHoraria, preco, categoria} = curso;

            if(!codigo || !descricao || !cargaHoraria || !preco || !categoria){
                dispatch(setMensagemErro('favor preencher todos os dados'));
                return;
            }

            const body = {
                codigo,
                descricao,
                cargaHoraria,
                preco, 
                categoria
            };

            
            if(_id){
                await axios.put(URL+'/'+_id, body);
                isUpdate = true;
            }else{
                await axios.post(URL, body);
            }
            
            dispatch(getCursosAPI());
            dispatch(limparFormularioCurso());
            dispatch(setMensagemSucesso(`Curso ${isUpdate ? 'atualizado' : 'cadastrado'} com sucesso!`));
        }catch(e){
            console.log(e);
            dispatch(setMensagemErro(`Ocorreu erro ao ${isUpdate ? 'atualizar' : 'cadastrar'} curso`));
        }
    }
}

const setMensagemErro = erro => ({
    type: SET_VALOR_CURSO_MSG_ERRO,
    value : erro
});

const setMensagemSucesso = msg => ({
    type: SET_VALOR_CURSO_MSG_SUCESSO,
    value : msg
});

