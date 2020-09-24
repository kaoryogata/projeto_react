import {combineReducers } from 'redux';
import contatoReducer from './reducers/contato';
import cursoReducer from './reducers/curso';

const reducers = combineReducers({
    contato : contatoReducer,
    curso : cursoReducer
});

export default reducers;
