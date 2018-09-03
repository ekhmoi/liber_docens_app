import { applyMiddleware, createStore } from 'redux';
import promise from 'redux-promise-middleware';
import reducers from './reducers';
import thunk from 'redux-thunk';

export class Action {
    constructor(type, payload) {
        this.type = type;
        this.payload = payload;
    }
}

const middlewares = applyMiddleware(promise(), thunk);

export default createStore(reducers, middlewares);
