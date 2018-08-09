import * as types from './types';

const initialState = {
    step: 1,
    data: {},
};

export default function formReducer(state = initialState, action) {
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