
import React from 'react';
import ReactDOM from 'react-dom';
import { createHashHistory } from 'history';

import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';
import store from './store';
import App from './App.jsx';

require('./style/style.scss');


const history = createHashHistory();

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <App />
    </Router>
  </Provider>, document.getElementById('app'),
);
