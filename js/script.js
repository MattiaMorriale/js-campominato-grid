const grid = document.querySelector('.grid')


const easy = 49;

for (let i = 0; i < easy; i++) {

    const cell = document.createElement('div');
    cell.classList.add('cell','button-55');
    

    grid.appendChild(cell);

    cell.addEventListener('click', function () {
        // ! Controllo che la cella non sia stata già cliccata
        cell.classList.add('.cell-clicked')
    
        
        
      });

}

