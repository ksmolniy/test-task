export function asyncInitialStateReducer(reducer, reducerName) {
    return function(state, action, ...args) {
        if (action.type === `asyncInitialState/${reducerName}`) {
            return action.data;
        }
        return reducer(state, action, ...args);
    }
}

export function asyncInitialStateAction(reducerName, data, dispatch) {
    dispatch({ type: `asyncInitialState/${reducerName}`, data });
}