export default store => next => action => {
    next(action);
    localStorage.setItem('redux-saved-state', JSON.stringify(store.getState()));
}