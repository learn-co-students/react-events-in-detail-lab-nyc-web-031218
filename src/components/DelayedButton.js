import React, { Component } from 'react';


class DelayedButton extends Component{
  onClick = (e) => {
    e.persist()
    setTimeout(()=>{this.props.onDelayedClick(e)}, this.props.delay)
  }

  render(){
    return(
      <button onClick={this.onClick}></button>
    )
  }
}
export default DelayedButton;
