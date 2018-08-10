import { createStore, combineReducers, applyMiddleware } from 'redux';
import usersReducer from './users/reducer';
import formReducer from './form/reducer';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createLocalStorageMiddleWare, getInitialLocalStorageState } from './localStorageMiddleWare';
import { createIndexedDBMiddleWare, getInitialIndexedDBState } from './indexedDBMiddleWare';
import { asyncInitialStateReducer, asyncInitialStateAction } from './loadAsyncInitailState';


const prevState = {
    form: getInitialLocalStorageState('form'),
    users: [],
};

const store = createStore(
    combineReducers({
            users : asyncInitialStateReducer(usersReducer, 'users'),
            form: formReducer,
        },
    ),
    prevState,
    composeWithDevTools(
        applyMiddleware(
            createLocalStorageMiddleWare('form'),
            createIndexedDBMiddleWare('users'),
        ),
    ),
);

getInitialIndexedDBState('users').then(res => asyncInitialStateAction('users', res.data, store.dispatch));

export default store;