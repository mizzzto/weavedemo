import React, {Component} from 'react';
import Grid from '../grid';

class MainGrid extends Component {
	constructor(props){
		super(props);

		this.grid = new Grid(props.width, props.height, props.cellWidth, props.cellHeight);
	}
	render(){
		const { grid } = this.grid;
		const cells = this.grid.getCells();

		let mainDivStyle = {
			width: grid.style.width
		};
		return(
			<div className="main" style={mainDivStyle} id="main">
				{ cells }
			</div>
		);
	}
}

export default MainGrid;
