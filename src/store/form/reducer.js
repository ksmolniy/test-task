import * as types from './types';

export default function formReducer(state = { step: 1, data: {} }, action) {
    switch (action.type){
        case types.UPDATE_FORM:
            return {
                data : { ...state.data ,...action.data },
                step: action.step,
            };
        case types.CLEAR_FORM:
            return {
                data : { ...action.data },
                step: action.step,
            };
        case types.DEFAULT_FORM:
            return {
                data : { ...action.data },
                step: state.step,
            };
        case types.USER_FORM:
            return {
                data : { ...action.data },
                step: state.step,
            };
        default: 
            return state;
    }
}