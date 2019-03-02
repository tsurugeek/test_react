import React from 'react'
import { render } from 'react-dom'
import { observable, action, computed, configure } from 'mobx'
import { observer } from 'mobx-react'
configure({
    enforceActions: 'always'
});

//import './style.scss'

class CounterStore {
  @observable counter = 0;

  // @computed
  // get counter() {
  //   return this.counter;
  // }

  @action
  increment() {
    console.log("increment " + this.counter);
    this.counter++;
    // this.counter = 10;
  }

  @action
  decrement() {
    console.log("decrement " + this.counter);
    this.counter--;
  }
}


@observer
class App extends React.Component {
  render() {
    return (
      <div className="wrapper">
        <button onClick={() => this.props.data.increment()}>+1</button>
        <span>{this.props.data.counter}</span>
        <button onClick={() => this.props.data.decrement()}>-1</button>
      </div>
    )
  };
}

const counterStore = new CounterStore()
render(<App data={counterStore} />, document.getElementById('mobx_root'))
