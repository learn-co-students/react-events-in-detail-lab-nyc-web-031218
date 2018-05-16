// Code CoordinatesButton Component Here
import React from 'react';

class CoordinatesButton extends React.Component {

  coords = (e) => {
    // console.log("sup");
    // console.log(e);
    // console.log(e.target);
    // console.log(e.screenX, e.screenY);
    this.props.onReceiveCoordinates([e.screenX, e.screenY])
  }

  render() {
    return (
      <button onClick={(e) => this.coords(e) } >Click Me</button>
    )
  }
}

export default CoordinatesButton
