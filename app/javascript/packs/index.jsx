import React from 'react';
import { render } from 'react-dom';
import { observable, action, computed, configure } from 'mobx';
import { Provider, observer } from 'mobx-react';
// import { createBrowserHistory } from 'history/createBrowserHistory';
import { createBrowserHistory } from 'history';
import { Router } from 'react-router';
import { RouterStore, syncHistoryWithStore } from 'mobx-react-router';
import App from './App.jsx';

configure({ enforceActions: 'always'});

const browserHistory = createBrowserHistory();
// var browserHistory = require('history').createBrowserHistory;
const routingStore = new RouterStore();

const stores = {
  routing: routingStore
};

const hitory = syncHistoryWithStore(browserHistory, routingStore);

render(
  <Provider {...stores}>
    <Router history={browserHistory}>
      <App />
    </Router>
  </Provider>,
  document.getElementById('spa')
);
