import React, {Component} from 'react';
import Grid from '../grid';

class MainRightGrid extends Component {
	constructor(props){
		super(props);

		this.grid = new Grid(props.width, props.height, props.cellWidth, props.cellHeight);
	}
	render(){
		const { grid } = this.grid;
		console.log(grid);
		const cells = this.grid.getCells();

		let mainDivStyle = {
			width: grid.style.width
		};
		return(
			<div className="main-right" style={mainDivStyle} id="main-right">
				{ cells }
			</div>
		);
	}
}

export default MainRightGrid;
