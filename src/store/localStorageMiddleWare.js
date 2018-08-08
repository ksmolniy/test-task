export default store => next => action => {

    //Do we really need stringify + store data EVERY action? Even if action doesn't change "data" itself
        const result = next(action);
        localStorage.setItem('redux-saved-state', JSON.stringify(store.getState()));
    return result;
}