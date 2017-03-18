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
    const rows = _.range(this.props.size.y).map(y => {
      const cells = _.range(this.props.size.x).map(x => {
        return <div className="cell" />;
      });
      return <div className="row">{cells}</div>;
    });

    return <div className="Board">{rows}</div>;
  }
}
