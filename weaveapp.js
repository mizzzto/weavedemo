
const WIDTH = 15;
const HEIGHT = 15;
const PEDAL_WIDTH = 4;
const PEDAL_HEIGHT = 4;

const CELL_WIDTH = 19;
const CELL_HEIGHT = 19;

function initGrid(rowWidth, colHeight, div){
   let grid = document.getElementById(div);
    grid.style.width = rowWidth * CELL_WIDTH + 'px';
    for (let i = 0; i < colHeight; i++) {
        for (let j = 0; j < rowWidth; j++) {
            let cell = document.createElement('div');
            cell.className = 'cell';
            cell.dataset.grid = div;
            cell.dataset.coords = i + '_' + j;
			cell.dataset.selected = "0";
            if(div !== 'main'){
                cell.addEventListener('click', function(e) {
                    var message = 'cell: ' + e.target.dataset.coords;
                    this.className = e.target.className == "cell" ? "cell isSelected" : "cell";
					this.dataset.selected = e.target.dataset.selected === "0" ? "1" : "0";
                    reRender();
                    console.log(this);
                }, false);
            }
            
            grid.appendChild(cell);
        }
    } 
}

function reRender(){
	let selectedCells = [].slice.call(document.getElementById('bottom-right').children).filter(function(item,index,array){
		return item.dataset.selected == "1";
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
		for(let i = 0; i < bottomGridCells.length; i++){
			let gridX = bottomGridCells[i].dataset.coords.split('_')[0];
			
			if(gridX === c.dataset.coords.split('_')[0]){
				console.log('is selected bottom -> ' + bottomGridCells[i].dataset.coords);
			}
				
		}
	}
    
	
    
	for(let j = 0; j < selectedCells.length; j++){
		let c = selectedCells[j];
		for(let i = 0; i < mainRightGridCells.length; i++){
			let gridY = mainRightGridCells[i].dataset.coords.split('_')[1];
			if(gridY == c.dataset.coords.split('_')[1]){
				console.log('is selected main right -> ' + mainRightGridCells[i].dataset.coords);
			}
		}
	}
    
}

function init(){
    initGrid(WIDTH, HEIGHT, 'main');
    initGrid(PEDAL_WIDTH, HEIGHT, 'main-right');
    initGrid(WIDTH, PEDAL_HEIGHT, 'bottom');
    initGrid(PEDAL_WIDTH, PEDAL_HEIGHT, 'bottom-right');

}