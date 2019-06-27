import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Provider } from "react-redux";

// REDUX STORE
import store from './store/store';

// const history = syncHistoryWithStore(browserHistory, store)

window.mystore = store;

ReactDOM.render(
    <Provider store={store}>
            <App/>
    </Provider>
    ,
    document.getElementById('root'));

serviceWorker.unregister();
