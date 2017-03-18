import React, { Component, PropTypes } from 'react';
import _ from "underscore";
import classNames from "classnames";
import Vector from "./Vector";
import "./Board.css";

export default class Board extends Component {
  // React checks that the required property is declared in DOM
  static propTypes = {
    size: PropTypes.instanceOf(Vector)
  };

  render() {
    return ( <div>x: {this.props.size.x}, y:{this.props.size.y}</div> );
  }
}
