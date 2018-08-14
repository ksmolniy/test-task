import { getReducer, getStorage, setReducer } from './indexDBController';

export const getInitialIndexedDBState = (reducerName, initialState) => {
    return getReducer(reducerName).then(res => res === -1 ? { data: initialState} : res);
}

export const createIndexedDBMiddleWare = reducerName => store => next => action => {
    const result = next(action);

    if (action.type.startsWith(`${reducerName}/`)) { 
        setReducer({ reducer: reducerName, data: store.getState()[reducerName] });
    }

    return result;
}

export const createImmutableDBMiddleWare = reducerName => store => next => action => {
    const result = next(action);

    if (action.type.startsWith(`${reducerName}/`)) { 
        setReducer({ reducer: reducerName, data: store.getState()[reducerName].toJS() });
    }

    return result;
}