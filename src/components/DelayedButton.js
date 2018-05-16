// Code DelayedButton Component Here
import React from 'react';
export default class DelayedButton extends React.Component {
  constructor(props) {
    super(props)
  }

  handleClick = (e) => {
    console.log(this)
    console.log(e)
    e.persist()
    setTimeout(() => this.props.onDelayedClick(e)
    , this.props.delay)
  }

  render() {
    return (
      <div>
      <button onClick={this.handleClick}></button>
      </div>
    )
  }
}
