import { getReducer, getStorage, setReducer } from './indexDBController';

export const getInitialIndexedDBState = reducerName => {
    return getReducer(reducerName);
}

export const createIndexedDBMiddleWare = reducerName => store => next => action => {
    const result = next(action);

    if (action.type.startsWith(`${reducerName}/`)) { 
        setReducer({ reducer: reducerName, data: store.getState()[reducerName] });
    }

    return result;
}