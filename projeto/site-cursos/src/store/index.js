import {combineReducers} from 'redux';
import contatoReducer from './reducers/contato';

//Cria os reducers

const reducers = combineReducers({
    contato : contatoReducer
});

export default reducers;