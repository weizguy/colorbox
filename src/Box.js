import React, { Component } from 'react';
import './Box.css';

class Box extends Component {
  constructor(props) {
    super(props);
    let newColor = '#' + Math.random().toString(16).substr(-6);
    this.state = { randColor: newColor };
    this.colorPicker = this.colorPicker.bind(this);
  }
  colorPicker() {
    let newColor = '#' + Math.random().toString(16).substr(-6);
    this.setState({randColor: newColor});
  }
  render() {
    return (
      <div className="Container">
        <div 
          className="Box" 
          style={{ backgroundColor: this.state.randColor }}  
          onClick={this.colorPicker} >{this.state.randColor}</div>
      </div>
    )
  }
}

export default Box;