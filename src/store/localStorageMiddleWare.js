export const getInitialLocalStorageState = reducerName => JSON.parse(localStorage.getItem(`redux-saved-state/${reducerName}`));

export const createLocalStorageMiddleWare = reducerName => store => next => action => {
    const result = next(action);
    if (action.type.startsWith(`${reducerName}/`)) {
        localStorage.setItem(`redux-saved-state/${reducerName}`, JSON.stringify(store.getState()[reducerName]));
    }
    return result;
}