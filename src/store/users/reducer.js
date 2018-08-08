import * as types from './types';

export default function userReducer(state = [], action) {
    switch (action.type){
        case types.CREATE_USER:
            return [...state, action.data];
        default: 
            return state;
    }
}