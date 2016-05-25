import React, {Component} from 'react';
import Grid from '../grid';

class BottomRightGrid extends Component {
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
			<div className="bottom-right" style={mainDivStyle} id="bottom-right">
			  { cells }
			</div>
		);
	}
}

export default BottomRightGrid;
