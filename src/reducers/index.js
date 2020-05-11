/**
 * emgloba todos os reducers em uma unica variavel
 */
import { combineReducers } from 'redux'
import todos from './todos'

export default combineReducers({
    todos,
});