import React from 'react';
import { observable, action, computed, configure } from 'mobx';
import { inject, observer } from 'mobx-react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

// config
configure({ enforceActions: 'always'});


function Index() {
  return <h2>Home</h2>;
}

function About() {
  return <h2>About</h2>;
}

function Users() {
  return <h2>Users</h2>;
}

@inject('routing')
export default class App extends React.Component {
  render() {
    const { location, push, goBack } = this.props.routing;

    return  (
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about/">About</Link>
              </li>
              <li>
                <Link to="/users/">Users</Link>
              </li>
            </ul>
          </nav>

          <div>
            <span>Current pathname: {location.pathname}</span>
            <button onClick={() => push('/about')}>Change url</button>
            <button onClick={() => goBack()}>Go back</button>
          </div>

          <Route path="/" exact component={Index} />
          <Route path="/about/" component={About} />
          <Route path="/users/" component={Users} />
        </div>
    );
  }
}
