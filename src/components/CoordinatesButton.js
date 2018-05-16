import React from 'react'

class CoordinatesButton extends React.Component{
  coordinatesClicked = (event) => {
    this.props.onReceiveCoordinates([event.clientX, event.clientY])
  }
  render(){
    return(
      <button onClick={this.coordinatesClicked}>coordinates</button>
    )
  }
}

export default CoordinatesButton
