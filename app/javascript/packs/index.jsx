// React
import React from 'react';
import { render } from 'react-dom';
// MobX
import { observable, action, computed, configure } from 'mobx';
import { Provider, observer } from 'mobx-react';
// Router
import { createBrowserHistory } from 'history';
import { Router } from 'react-router';
import { RouterStore, syncHistoryWithStore } from 'mobx-react-router';
// App
import App from './App.jsx';

// config
configure({ enforceActions: 'always'});

// ----------

const routingStore = new RouterStore();
const stores = {
  routing: routingStore
};

const browserHistory = createBrowserHistory();
const history = syncHistoryWithStore(browserHistory, routingStore);

render(
  <Provider {...stores}>
    <Router history={history}>
      <App />
    </Router>
  </Provider>,
  document.getElementById('spa')
);
