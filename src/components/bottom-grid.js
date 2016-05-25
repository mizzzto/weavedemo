import React, {Component} from 'react';
import Grid from '../grid';

class BottomGrid extends Component {
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
			<div className="bottom" style={mainDivStyle} id="bottom">
			  { cells }
			</div>
		);
	}
}

export default BottomGrid;
