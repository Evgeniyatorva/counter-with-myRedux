import React, { Component } from 'react';
import './counter.css';

import myStore from './myStore';

let actionUp = {type: 'UP', amount: 1};
let actionDown = {type: 'DOWN', amount: 1};
let actionReset = {type: 'RESET'};

class Counter extends Component {
  constructor () {
    super()
    this.up = this.up.bind(this);
    this.down = this.down.bind(this);
  }

  componentDidMount() {
    myStore.subscribe(() => this.forceUpdate()); /* sorry react */
  }

  up() {
    myStore.update(actionUp);
  }

  down() {
    myStore.update(actionDown);
  }

  reset() {
    myStore.update(actionReset);
  }

  render() {
    
    return (
      <div className="container">
        <span className="number" >{myStore.state}</span>
        <div className="btn_center">
          <button className="btn" onClick={this.up}>+</button>
          <button className="btn" onClick={this.down}>-</button>
          <button className="btn" onClick={this.reset}>reset</button>
        </div>
        
      </div>
    )
  }
}

export default Counter;
