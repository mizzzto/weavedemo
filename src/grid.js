import React from 'react';

class Grid {
  constructor(width, height, cellWidth, cellHeight){
    let cwFix = 1;
    this.grid = {
      style: {
        width: ''
      },
      cells: []
    };
    this.grid.style.width = width * (Number(cellWidth)+cwFix) + 'px';
    for (let i = 0; i < height; i++) {
      for (let j = 0; j < width; j++) {
        let cell = {
          className: 'cell',
          style: {
            width: cellWidth + 'px',
            height: cellHeight + 'px',
            borderStyle: 'solid',
            borderWidth: '1px 0px 0px 1px',
            display: 'inline-block'
          },
          dataset:{
            coords: i + '_' + j,
            selected: '0'
          }
        };

        this.grid.cells.push(cell);
      }
    }
  }
  getCells(){
    return this.grid.cells.map((cell) => {
			let divStyle = {
				width: cell.style.width,
				height: cell.style.height,
				borderStyle: cell.style.borderStyle,
				borderWidth: cell.style.borderWidth,
				display: cell.style.display
			};
			return(
				<div style={divStyle} key={cell.dataset.coords}>
				</div>
			)
		});
  }
}

export default Grid;
