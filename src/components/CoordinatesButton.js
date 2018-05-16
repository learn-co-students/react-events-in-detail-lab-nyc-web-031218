import React from 'react'



export default class CoordinatesButton extends React.Component{
	constructor(props){
	super(props);
	this.state = {}


	}




	coordinates = (e) => {
		const array = []
		array.push(e.clientX, e.clientY);
		this.props.onReceiveCoordinates(array);

  }




	render(){
      return(
      	<button onClick={this.coordinates}> Button </button>

      	)
	}

}