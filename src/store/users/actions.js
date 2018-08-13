import * as types from './types';
import { createAction } from 'redux-actions';
import { User } from '../../data/User';

export const createUser = createAction(types.CREATE_USER, (data) => (new User({
    ...data,
    id: Date.now(),
}))
);

export const updateUser = createAction(types.UPDATE_USER, (data) => (new User({ ...data })) );