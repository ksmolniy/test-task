import * as types from './types';

export function createUser(data) {
    return {
        type: types.CREATE_USER,
        data: {
            id: Date.now(),
            ...data,
        },
    }
}