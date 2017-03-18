import React, { Component, PropTypes } from 'react';
import _ from "underscore";
import classNames from "classnames";
import Vector from "./Vector";
import "./Board.css";


export default class Board extends Component {
  // React checks that the required properties are declared in DOM
  static propTypes = {
    size: PropTypes.instanceOf(Vector),
    snakePositions: PropTypes.arrayOf(PropTypes.instanceOf(Vector)),
    fruitPosition: PropTypes.instanceOf(Vector)
  };

  render() {
    const rows = _.range(this.props.size.y).map(y => {
      const cells = _.range(this.props.size.x).map(x => {
        const pos = new Vector(x, y);
        const maybeSnakeStyle = {
          "snake": this.props.snakePositions.find(s => s.equals(pos))
        };
        const maybeFruitStyle = {
          "fruit": this.props.fruitPosition.equals(pos)
        }
        return <div className={classNames("cell", maybeSnakeStyle, maybeFruitStyle)} />;
      });
      return <div className="row">{cells}</div>;
    });
    return <div className="Board">{rows}</div>;
  }
}
