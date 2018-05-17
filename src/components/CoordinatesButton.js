// Code CoordinatesButton Component Here
import React from 'react'

export default class CoordinatesButton extends React.Component {
  coordinateClick = (e) => {
    console.log(e.clientX, e.clientY);
    this.props.onReceiveCoordinates([e.clientX, e.clientY]);
  }
  render() {
    return(
      <button onClick={this.coordinateClick}>Coordinates</button>
    )
  }
}
