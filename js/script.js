const grid = document.querySelector('.grid')
const playButton = document.querySelector('#play');
const endGameScreen = document.querySelector('.end-game-screen');
const endGameText = document.querySelector('.end-game-text');
const playAgainButton = document.querySelector('.play-again');
const boomElement = document.querySelector('#boom');
const winElement = document.querySelector('#you-win');

const totalBombs = 16;
const bombsList = [];
const elementClicked = [];
let score = 0;
let numberCell = 0

playButton.addEventListener('click',
function () {
    
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

    while (bombsList.length <= totalBombs) {
        const number = Math.floor(Math.random() * numberCell) + 1;
        if (!bombsList.includes(number)) bombsList.push(number);
    }

    console.log(bombsList);

    for (let i = 1; i <= numberCell; i++) {

        
        const cell = document.createElement('div');
        cell.classList.add('cell','button-55');
        cell.classList.add(classed);

        cell.innerHTML = i;
        
        
    
        grid.appendChild(cell);
    
        cell.addEventListener('click', function () {
            // ! Controllo che la cella non sia stata già cliccata
            if (elementClicked.includes(i)) {

            } else {
                elementClicked.push(i);
            }

            console.log(elementClicked);
            
            if (cell.classList.add('cell-clicked')) return;

            if (bombsList.includes(i)) {
                // Se è una bomba....
                cell.classList.add('cell-bomb');
                endGame(false);
            } else {
                // Se non lo è...
                cell.classList.add('cell-clicked');
                updateScore();
            }
            
        });
    
    }

  
})

// # BONUS
// Funzione che rivela tutte le bombe
function revealAllBombs() {
    const cells = document.querySelectorAll('.cell');
    for (let i = 1; i <= cells.length; i++) {
      // controllo se la cella è una bomba
      if (bombsList.includes(i)) {
        const cellToReveal = cells[i - 1];
        cellToReveal.classList.add('cell-bomb');
      }
    }
}
  

function endGame(isVictory) {
    if (isVictory === true) {
      // Coloriamo di verde e cambiamo il messaggio
      endGameScreen.classList.add('win');
      boomElement.classList.add('hidden');
      winElement.classList.remove('hidden');
      
    } else {
      // Riveliamo tutte le bombe
      revealAllBombs();
    }
  
    // Mostriamo la schermata rimuovendo la classe
    endGameScreen.classList.remove('hidden');
}

// Funzione per aggiornare il punteggio
function updateScore() {
    const scoreCounter = document.querySelector('.score-counter');
    // Lo inserisco nel contatore
    scoreCounter.innerText = elementClicked.length;
    // Controlliamo se l'utente ha vinto
    if (elementClicked.length == (numberCell - totalBombs)) endGame(true);
}

// Funzione per ricaricare la pagina
function playAgain() {
    location.reload();
  }

// Gestiamo il click sul tasto rigioca
playAgainButton.addEventListener('click', playAgain);