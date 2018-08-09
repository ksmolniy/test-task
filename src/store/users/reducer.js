import * as types from './types';
import { handleActions } from 'redux-actions';

const initialState = [];

export default handleActions({
    [types.CREATE_USER]: (state, action) => ([...state, action.payload]),
    [types.UPDATE_USER]: (state, action) => ([...state.filter(item => item.id !== action.payload.id), action.payload]),
}, initialState);