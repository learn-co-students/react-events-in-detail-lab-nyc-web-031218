// Code CoordinatesButton Component Here
import React from 'react';

export default class CoordinatesButton extends React.Component {


  handleClick = (event) => {
    let x = event.clientX;
    let y = event.clientY;
    let xy = [x,y];
    this.props.onReceiveCoordinates(xy)
  }
  render() {
    debugger
    return (
      <button onClick={this.handleClick}>Click me!</button>
    );
  }
}
