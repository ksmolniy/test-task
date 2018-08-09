import * as types from './types';
import { handleActions } from 'redux-actions';

const initialState = {
    step: 1,
    data: {},
};

export default handleActions({
    [types.UPDATE_FORM]: (state, { payload }) => ({
            data : { ...state.data ,...payload.data },
            step: payload.step,
        }),
    [types.CLEAR_FORM]: (state, { payload }) => ({
            data : { ...payload.data },
            step: payload.step,
        }),
    [types.DEFAULT_FORM]: (state, { payload }) => ({
            data : { ...payload.data },
            step: state.step,
        }),
    [types.USER_FORM]: (state, { payload }) => ({
            data : { ...payload.data },
            step: state.step,
        })
}, initialState);