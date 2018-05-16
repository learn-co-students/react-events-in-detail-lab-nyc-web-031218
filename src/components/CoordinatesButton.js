// Code CoordinatesButton Component Here
import React from 'react';
export default class CoordinatesButton extends React.Component {
  constructor(props) {
    super(props)
  }
  onClick = (e) => {
    const arr = [e.clientX, e.clientY]
    this.props.onReceiveCoordinates(arr)
  }

  render() {
    return (
      <div>
      <button onClick={this.onClick}/>
      </div>
    )
  }
}
