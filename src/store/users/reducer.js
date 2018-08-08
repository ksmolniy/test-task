import * as types from './types';

export default function userReducer(state = [], action) {
    switch (action.type){
        case types.CREATE_USER:
            return [...state, action.data];
        case types.UPDATE_USER:
            return [...state.filter(item => item.id !== action.data.id), action.data];
        default: 
            return state;
    }
}