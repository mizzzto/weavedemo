
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
            if(div !== 'main'){
                cell.addEventListener('click', function(e) {
                    console.log(e.target.className);
                    var message = 'cell: ' + e.target.dataset.coords;
                    this.className = e.target.className == "cell" ? "cell isSelected" : "cell";
                    populateAll(e.target.dataset.grid, e.target.dataset.coords);
                    console.log(this);
                }, false);
            }
            
            grid.appendChild(cell);
        }
    } 
}

function populateAll(source, coords){
    switch(source){
        case 'bottom-right':
            console.log('bottom right clicked: ' + coords);
            let [x,y] = coords.split('_');
            console.log('x: ' + x + ', y: ' + y);
            reRenderPedal(x,y);
            break;
        case 'bottom':
            console.log('bottom clicked: ' + coords);
            break;
        case 'main-right':
            console.log('main right clicked: ' + coords);
            break;
        default:
            console.log('hit and miss');
    }
}

function reRenderPedal(x,y){
    let bottomGrid = document.getElementById('bottom');
    let bottomGridCells = bottomGrid.children;
    for(let i = 0; i < bottomGridCells.length; i++){
        if(bottomGridCells[i].className == "cell isSelected"){
            let gridX = bottomGridCells[i].dataset.coords.split('_')[0];
            if(gridX == x)
                console.log('is selected bottom -> ' + bottomGridCells[i].dataset.coords);
        }
    }
    let mainRightGrid = document.getElementById('main-right');
    let mainRightGridCells = mainRightGrid.children;
    for(let i = 0; i < mainRightGridCells.length; i++){
        if(mainRightGridCells[i].className == "cell isSelected"){
            let gridY = mainRightGridCells[i].dataset.coords.split('_')[1];
            if(gridY == y){
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