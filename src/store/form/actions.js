import * as types from './types';
import store from '../index';
import * as helpers from './helpers';
import { createAction } from 'redux-actions';

export const updateFormState = createAction(types.UPDATE_FORM, (step, data) => ({
        data: { ...data },
        step,
    }),
);

export const clearForm =  createAction(types.CLEAR_FORM, data => ({
        data: {},
        step: 1,
    }),
);

export const setDefaulFormValue = createAction(types.DEFAULT_FORM, data => ({
        data: helpers.getDefaulFormValue(),
    }),
);

export const getUserToForm = createAction(types.USER_FORM, id => {
        const state = store.getState();
    
        const user = state.users.find(item => item.id === +id);
    
        return {
            data: { ...user },
        }
    },
);