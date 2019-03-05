
const WIDTH = 45;
const HEIGHT = 45;
const PEDAL_WIDTH = 10;
const PEDAL_HEIGHT = 8;

const CELL_WIDTH = 15;
const CELL_HEIGHT = 15;

function init(){
  initGrid(WIDTH, HEIGHT, 'main');
  initGrid(PEDAL_WIDTH, HEIGHT, 'main-right');
  initGrid(WIDTH, PEDAL_HEIGHT, 'bottom');
  initGrid(PEDAL_WIDTH, PEDAL_HEIGHT, 'bottom-right');
}

function initGrid(rowWidth, colHeight, div){
  let grid = document.getElementById(div);
  grid.style.width = rowWidth * (CELL_WIDTH + 1) + 'px';
  for (let i = 0; i < colHeight; i++) {
    for (let j = 0; j < rowWidth; j++) {
      let cell = document.createElement('div');
      cell.className = 'cell';
      cell.dataset.grid = div;
      cell.dataset.coords = i + '_' + j;
      cell.dataset.selected = "0";
      if(div !== 'main'){
        cell.addEventListener('click', function(e) {
          this.className = e.target.className == "cell" ? "cell isSelected" : "cell";
          this.dataset.selected = e.target.dataset.selected === "0" ? "1" : "0";
          reRender();
        }, false);
      }
      cell.style.width = CELL_WIDTH + 'px';
      cell.style.height = CELL_HEIGHT + 'px'
      grid.appendChild(cell);
    }
  }
}

function reRender(){
	let selectedCells = [].slice.call(document.getElementById('bottom-right').children).filter(function(item,index,array){
		return item.dataset.selected === "1";
	});
	let bottomGridCells = Array.prototype.slice.call(document.getElementById('bottom').children).filter(function(item,index,array){
		return item.dataset.selected === "1";
	});
	let mainRightGridCells = Array.prototype.slice.call(document.getElementById('main-right').children).filter(function(item,index,array){
		return item.dataset.selected === "1";
	});
	//console.log('Start to iterate through selected cells');
	let selectedCellsAndGrids = [];
	for (let j = 0; j < selectedCells.length; j++){
		let c = selectedCells[j];
		//selectedCellsAndGrids.push({coords: c.dataset.coords, x: [], y : []});
		let tempC = {coords: c.dataset.coords, x: [], y : []};
		for(let i = 0; i < bottomGridCells.length; i++){
			let [gridX, gridY] = bottomGridCells[i].dataset.coords.split('_');

			if(gridX === c.dataset.coords.split('_')[0]){
				//console.log('is selected bottom -> ' + bottomGridCells[i].dataset.coords);
				tempC.x.push(gridY);
			}
		}
		for(let i = 0; i < mainRightGridCells.length; i++){
			let [gridX, gridY] = mainRightGridCells[i].dataset.coords.split('_');
			if(gridY == c.dataset.coords.split('_')[1]){
				//console.log('is selected main right -> ' + mainRightGridCells[i].dataset.coords);
				tempC.y.push(gridX);
			}
		}
		selectedCellsAndGrids.push(tempC);
		//console.log(selectedCellsAndGrids);
	}

  let mainGrid = document.getElementById('main');
  let mainGridCells = [].slice.call(mainGrid.children);
  setAll(mainGridCells, "cell");
	for(let i = 0; i < selectedCellsAndGrids.length; i++){
    let row = selectedCellsAndGrids[i];
    for(let j = 0; j < row.x.length; j++){
      for(let k = 0; k < row.y.length; k++){
        //console.log('it x: ' + row.x[j] + ', y: ' + row.y[k]);
        let cells = mainGridCells.filter(function(item,index,array){
            return item.dataset.coords === row.y[k] + '_' + row.x[j];
        });
        //console.log('found: ');
        //console.log(cells[0]);
        if(cells[0] !== null){
            cells[0].className = "cell isSelected";
        }
      }
    }
	}
}
function setAll(a, v) {
  var i, n = a.length;
  for (i = 0; i < n; ++i) {
    a[i].className = v;
  }
}

