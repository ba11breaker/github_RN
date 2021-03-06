import {
    applyMiddleware,
    createStore
} from 'redux';
import thunk from 'redux-thunk';
import reducers from '../reducer';

const logger = store => next => action => {
    if (typeof action === 'function') {
        console.log('dispatching a function');
    } else {
        console.log('dispatch', action);
    }
    const result = next(action);
    console.log('nextState', result);
    return result;
};

const middlewares = [
    logger,
    thunk,
];

/**
 * Create store
 */
export default createStore(reducers, applyMiddleware(...middlewares));