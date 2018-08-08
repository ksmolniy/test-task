//just for example
//using redux-actions
import * as types from './types';
import { handleActions } from 'redux-actions';

const initialState = [];

export default handleActions({
    [types.CREATE_USER]: (state, action) => ([...state, action.data]),
    [types.UPDATE_USER]: (state, action) => ([...state.filter(item => item.id !== action.data.id), action.data])
}, initialState);
