import React, { Component } from 'react';
import Boxes from './Boxes';

class ColorBox extends Component {
  render() {
    return (
      <div>
        <h2>Color Boxes</h2>
        <Boxes />
        <Boxes />
        <Boxes />
      </div>
    )
  }
}

export default ColorBox;