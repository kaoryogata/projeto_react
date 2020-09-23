import moment from 'moment';

const INITIAL_STATE = {
    data : moment().format('YYYY-MM-DD'),
    nome : 'Kaory Ogata',
    email : 'kaory@eu.com',
    assunto : 'Olá, gostaria de saber mais sobre o curso de React Impacta'
}

export default (state = INITIAL_STATE, action) => {
    switch(action.type){
        default: return state;
    }
}