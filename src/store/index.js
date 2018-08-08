import { createStore, combineReducers, applyMiddleware } from 'redux';
import usersReducer from './users/reducer';
import formReducer from './form/reducer';
import { composeWithDevTools } from 'redux-devtools-extension';

const store = createStore(
    combineReducers({
            users : usersReducer,
            form: formReducer,
        },
    ),
    composeWithDevTools(
        applyMiddleware(),
    ),
);

export default store;