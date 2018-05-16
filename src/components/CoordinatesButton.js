import React from 'react'



export default class CoordinatesButton extends React.Component{
	constructor(props){
	super(props);
	this.state = {}


	}




	coordinates = (e) => {
		this.props.onReceiveCoordinates([e.clientX, e.clientY]);

  }




	render(){
      return(
      	<button onClick={this.coordinates}> Button </button>

      	)
	}

}