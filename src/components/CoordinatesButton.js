import React from 'react';

export default class CoordinatesButton extends React.Component {
  constructor(props){
    super(props);

    this.state = {}
  }

  coordinate = (event) => {
    const coordinateArray = []
    coordinateArray.push(event.clientX, event.clientY)
    this.props.onReceiveCoordinates(coordinateArray)
  }

  render(){
    return(
      <button onClick={this.coordinate}> click me!</button>
    )
  }

}
