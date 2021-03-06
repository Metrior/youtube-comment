import { createStore } from 'redux';
import rootReducer from '../reducers/rootReducer';
import {loadState, saveState} from "../localStorage"
import throttle from 'lodash.throttle';

const persistedState = loadState();


const store = createStore(
    rootReducer,
    persistedState,
);


store.subscribe(throttle(() => {
    saveState({
        comment: store.getState().comment
    });
}, 1000));

export default store;