import React from 'react'



export default class DelayedButton extends React.Component{
	constructor(props){
	super(props);
	this.state = {}


	}



	buttonFunc = (e) => {
		e.persist()
		const whatever = () =>{this.props.onDelayedClick(e)}
		setTimeout(whatever, this.props.delay); 
	}



	render(){
      return(
      	<button onClick={this.buttonFunc}> Button </button>

      	)
	}

}