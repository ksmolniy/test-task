export default store => next => action => {
    const result = next(action);
    localStorage.setItem('redux-saved-state', JSON.stringify(store.getState()));
    return result;
}