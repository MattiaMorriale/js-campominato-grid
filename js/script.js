const grid = document.querySelector('.grid')
const playButton = document.querySelector('#play');

playButton.addEventListener('click',
function () {

    let numberCell = 0

    const selMode = document.getElementById('mode');

    let mode = selMode.value;

    let classed = "a"

    if (mode == 1) {

        numberCell = 49;

    } 

    if (mode == 2) {

        classed = 'cell-81'; numberCell = 81;

    } 

    if (mode == 3) {

        classed = 'cell-100'; numberCell = 100;

    }

    grid.innerHTML = '';

    for (let i = 1; i <= numberCell; i++) {

        
        const cell = document.createElement('div');
        cell.classList.add('cell','button-55');
        cell.classList.add(classed);

        cell.innerHTML = i;
        
        
    
        grid.appendChild(cell);
    
        cell.addEventListener('click', function () {
            // ! Controllo che la cella non sia stata già cliccata
            cell.classList.toggle('cell-clicked');

        
            console.log(this);
            
          });
    
    }

    
})


