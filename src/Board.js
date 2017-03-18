import React, { Component } from 'react';

export default class Board extends Component {
  render() {
    return ( <div>x: {this.props.size.x}, y:{this.props.size.y}</div> );
  }
}
