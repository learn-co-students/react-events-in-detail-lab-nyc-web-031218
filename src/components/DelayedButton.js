// Code DelayedButton Component Here
import React from 'react';

export default class DelayedButton extends React.Component {

  handleClick = (event) => {
    event.persist()
    setTimeout(() => {this.props.onDelayedClick(event)}, this.props.delay)
    // setTimeout(function() { this.setState({position: 1}); }.bind(this), 3000);;
     // prints 'click'
  }

  render() {
    return (
      <button onClick={this.handleClick}>Click me!</button>
    );
  }
}
