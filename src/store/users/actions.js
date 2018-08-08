import * as types from './types';

export function createUser(data) {
    return {
        type: types.CREATE_USER,
        data: {
            ...data,
            id: Date.now(),
        },
    }
}

export function updateUser(data) {
    return {
        type: types.UPDATE_USER,
        data: {
            ...data,
        },
    }
}