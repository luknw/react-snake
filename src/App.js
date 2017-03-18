import React, { Component } from 'react';
import _ from 'underscore';
import Bacon from 'baconjs'
import Vector from './Vector';
import Board from './Board';


export default class App extends Component {
  state = {
    snakePositions: []
  };

  // component rendered, we add reactive stuff
  componentDidMount() {
    const ticks = Bacon.interval(100);
    // log from Bacon with <3
    // ticks.log();

    const keys = Bacon.fromEvent(document.body, "keyup");
    const lefts = keys.filter(key => key.keyCode === 37);
    const rights = keys.filter(key => key.keyCode === 39);
    const leftRotations = lefts.map(() => Vector.rotateLeft);
    const rightRotations = rights.map(() => Vector.rotateRight);
    const actions = leftRotations.merge(rightRotations);
    actions.log();
    const directions = actions.scan(new Vector(0, 1), (dir, f) => f(dir));

    const snakeHeadPositions = directions
      .sampledBy(ticks)
      .scan(new Vector(0, 0), (pos, dir) =>
        pos.add(dir).mod(new Vector(20, 20)));
    snakeHeadPositions.onValue(head =>
       this.setState({ snakePositions: [head] }))
  }

  render() {
    return ( <Board
       size={new Vector(20, 20)}
       snakePositions={this.state.snakePositions}
       fruitPosition={new Vector(5, 5)} /> );
  }
}
