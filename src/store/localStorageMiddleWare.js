export const getInitialLocalStorageState = (reducerName, initialState) => JSON.parse(localStorage.getItem(`redux-saved-state/${reducerName}`)) || initialState;

export const createLocalStorageMiddleWare = reducerName => store => next => action => {
    const result = next(action);
    if (action.type.startsWith(`${reducerName}/`)) {
        localStorage.setItem(`redux-saved-state/${reducerName}`, JSON.stringify(store.getState()[reducerName]));
    }
    return result;
}