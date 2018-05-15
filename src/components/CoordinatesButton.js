// Code CoordinatesButton Component Here
import React from 'react';

class CoordinatesButton extends React.Component {
  getCoordinates = (event) => {
    const x = event.clientX;
    const y = event.clientY;
    return this.props.onReceiveCoordinates([x, y])
  }

  render () {
    return (
      <button onClick={ this.getCoordinates }>Coordinates!</button>
    )
  }
}


export default CoordinatesButton;
