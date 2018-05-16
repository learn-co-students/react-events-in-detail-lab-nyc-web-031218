import React from 'react'

class DelayedButton extends React.Component{
  dBClicked = (event) => {
    event.persist()
    console.log("hi")
    // console.log(this.props.onDelayedClick)
    setTimeout(()=>{this.props.onDelayedClick(event)}, this.props.delay)
  }
  render(){
    return(
      <button onClick= {this.dBClicked}>derp</button>
    )
  }
}

export default DelayedButton
