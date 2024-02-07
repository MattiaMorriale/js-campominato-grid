const grid = document.querySelector('.grid')
const playButton = document.querySelector('#play');

const easy = 49;

playButton.addEventListener('click',
function () {

    grid.innerHTML = '';

    for (let i = 0; i < easy; i++) {
    
        const cell = document.createElement('div');
        cell.classList.add('cell','button-55');
        
    
        grid.appendChild(cell);
    
        cell.addEventListener('click', function () {
            // ! Controllo che la cella non sia stata già cliccata
            cell.classList.toggle('cell-clicked');
        
            
            
          });
    
    }

    
})


