import * as types from './types';
import store from '../index';
import * as helpers from './helpers';

export function updateFormState(step, data) {
    return {
        type: types.UPDATE_FORM,
        data: { ...data },
        step,
    };
}

export function clearForm(data) {
    return {
        type: types.CLEAR_FORM,
        data: {},
        step: 1,
    };
}

export function setDefaulFormValue() {
    return {
        type: types.DEFAULT_FORM,
        data: helpers.getDefaulFormValue(),
    };
}

export function getUserToForm(id) {
    const state = store.getState();

    const user = state.users.find(item => item.id === +id);

    return {
        type: types.USER_FORM,
        data: { ...user },
    };
}