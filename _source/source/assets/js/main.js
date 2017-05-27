import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/app';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import blog from './reducers';
let store = createStore(blog,
           window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
        );

let rootElement = document.getElementById('root');

ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    rootElement);
