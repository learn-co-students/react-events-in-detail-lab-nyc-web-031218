// Code CoordinatesButton Component Here

import React from 'react'

class CoordinatesButton extends React.Component{
  constructor(props){
    super(props)
  }

  handleClick = (event) => {
    // debugger
    this.props.onReceiveCoordinates([event.clientX, event.clientY]);

    // console.log(event)
  }

  render(){
    return(
      <button onClick = {this.handleClick}> button </button>

    )
  }
}
// this.props.onReceiveCoordinates <- this is a function
export default CoordinatesButton

// // COORDINATESBUTTON
// // In the components/CoordinatesButton.js file, create a CoordinatesButton React component.
// // This component takes in one prop: onReceiveCoordinates. This prop is a function. (This props is only passed in the test suite, you will have errors in the browser)
// // When the button is clicked, create an array with two elements: the X and Y coordinates of the mouse. Find these using the event data.
// The onReceiveCoordinates callback prop is then called with these coordinates.


// class CoordinatesButton extends React.Component {
//   handleClick = (event) => {
//     this.props.onReceiveCoordinates([event.clientX, event.clientY]);
//   }
//
//   render() {
//     return (
//       <button onClick={this.handleClick}>Coords</button>
//     );
//   }
// }
//
// export default CoordinatesButton
