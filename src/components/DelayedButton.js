import React from 'react';

export default class DelayedButton extends React.Component {
  constructor(props){
    super();
    this.state = {}
  }

  timing = (event) => {
    event.persist()
    const blah = () => {this.props.onDelayedClick(event)}
    setTimeout(blah, this.props.delay)
  }

  render(){
    return(
      <button onClick={this.timing}> </button>
    )
  }

}
