import React, { Component } from 'react';
import _ from 'underscore';
import Bacon from 'baconjs'
import Vector from './Vector';
import Board from './Board';


export default class App extends Component {
  // component rendered, we add reactive stuff
  componentDidMount() {
    const ticks = Bacon.interval(100);
    // log from Bacon with <3
    const directions = ticks.map(() => new Vector(0, 1));
    directions.log();
  }

  render() {
    return ( <Board
       size={new Vector(20, 20)}
       snakePositions={[new Vector(1,2)]}
       fruitPosition={new Vector(5, 5)} /> );
  }
}
