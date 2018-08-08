import { createStore, combineReducers, applyMiddleware } from 'redux';
import usersReducer from './users/reducer';
import formReducer from './form/reducer';
import { composeWithDevTools } from 'redux-devtools-extension';
import localStorageMiddleWare from './localStorageMiddleWare';

const prevState = JSON.parse(localStorage.getItem('redux-saved-state')) || {};

const store = createStore(
    combineReducers({
            users : usersReducer,
            form: formReducer,
        },
    ),
    prevState,
    composeWithDevTools(
        applyMiddleware(localStorageMiddleWare,),
    ),
);




export default store;