import * as types from './types';
import { createAction } from 'redux-actions';

export const createUser = createAction(types.CREATE_USER, (data) => ({
        ...data,
        id: Date.now(),
    })
);

export const updateUser = createAction(types.UPDATE_USER, (data) => ({ ...data }) );