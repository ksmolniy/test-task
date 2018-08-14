import * as types from './types';
import { handleActions } from 'redux-actions';
import { List } from 'immutable';

const initialState = List();

export default handleActions({
    [types.CREATE_USER]: (state, action) => state.push(action.payload),
    [types.UPDATE_USER]: (state, action) => state.map(item => item.id !== action.payload.id ? item : action.payload),
}, initialState);