import { createStore, combineReducers, applyMiddleware } from 'redux';
import usersReducer from './users/reducer';
import formReducer from './form/reducer';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createLocalStorageMiddleWare, getInitialLocalStorageState } from './localStorageMiddleWare';
import { createIndexedDBMiddleWare, getInitialIndexedDBState } from './indexedDBMiddleWare';
import { asyncInitialStateReducer, asyncInitialStateAction } from './loadAsyncInitailState';

import { PREFIX as USERS_PREFIX } from './users/types';
import { PREFIX as FORM_PREFIX } from './form/types';

import { List } from 'immutable';

const prevState = {
    [FORM_PREFIX]: getInitialLocalStorageState(FORM_PREFIX),
    [USERS_PREFIX]: List(),
};

const store = createStore(
    combineReducers({
            [USERS_PREFIX] : asyncInitialStateReducer(usersReducer, USERS_PREFIX),
            [FORM_PREFIX]: formReducer,
        },
    ),
    prevState,
    composeWithDevTools(
        applyMiddleware(
            createLocalStorageMiddleWare(FORM_PREFIX),
            createIndexedDBMiddleWare(USERS_PREFIX),
        ),
    ),
);

getInitialIndexedDBState(USERS_PREFIX, []).then(res => asyncInitialStateAction(USERS_PREFIX, List(res.data), store.dispatch));

export default store;