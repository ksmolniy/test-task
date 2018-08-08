import * as types from './types';
import store from '../index';

//seems it is not related to actions
//may be better to move it to helper?
    function pad2(number) {
        return ( number < 10 ? '0' : '') + number;
    }

    function formatDateToInput(date) {
        const formatedDay = pad2(date.getDate());
        const formatedMonth = pad2(date.getMonth()+1);
        return `${date.getFullYear()}-${formatedMonth}-${formatedDay}`;
    }

    function getDefaulFormValue() {
        return {
        firstName: '',
        lastName: '',
        surname: '',
        gender: 'm',
        age: 18,
        prefer: 'bike',
        date: formatDateToInput(new Date()),
        country: 'USA',
        policy: true,
        multiSelect: [],
        rating: 3,
        happiness: 50,
        about: '',
        };
    }

export function updateFormState(step, data) {
    return {
        type: types.UPDATE_FORM,
        data: { ...data },
        step,
    }; // ; !
}

export function clearForm(data) {
    return {
        type: types.CLEAR_FORM,
        data: {},
        step: 1,
    }; // ; !
}

export function setDefaulFormValue() {
    return {
        type: types.DEFAULT_FORM,
        data: getDefaulFormValue(),
    }; // ; !
}

export function getUserToForm(id) {
    const state = store.getState();

    const user = state.users.find(item => item.id === +id);

    return {
        type: types.USER_FORM,
        data: { ...user },
    }; // ; !
}