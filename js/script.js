const scoreCounter = document.querySelector('.score-counter');
const grid = document.querySelector('.grid')
const playButton = document.querySelector('#play');
const endGameScreen = document.querySelector('.end-game-screen');
const endGameText = document.querySelector('.end-game-text');
const playAgainButton = document.querySelector('.play-again')

const totalBombs = 16;
const bombsList = [];
let score = 0;



function endGame(isVictory) {
    if (isVictory === true) {
      // Coloriamo di verde e cambiamo il messaggio
      endGameScreen.classList.add('win');
      endGameText.innerHTML = 'YOU<br>WIN';
    } else {
      // Riveliamo tutte le bombe
      revealAllBombs();
    }
  
    // Mostriamo la schermata rimuovendo la classe
    endGameScreen.classList.remove('hidden');
}

// Funzione per aggiornare il punteggio
function updateScore() {
    if (cell.classList.contain('cell-clicked')) {
    } else {
        // Incremento lo score
        score++;
    }
    
    // Lo inserisco nel contatore
    scoreCounter.innerText = String(score).padStart(3, 0);
    // Controlliamo se l'utente ha vinto
    if (score === maxScore) endGame(true);
}
  

playButton.addEventListener('click',
function () {

    // Generare TOT bombe casuali
    
    let numberCell = 0

    const maxScore = numberCell - totalBombs;
    
    

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

    while (bombsList.length < totalBombs) {
        const number = Math.floor(Math.random() * numberCell) + 1;
        if (!bombsList.includes(number)) bombsList.push(number);
    }

    console.log(bombsList);

    for (let i = 1; i <= numberCell; i++) {

        
        const cell = document.createElement('div');
        cell.classList.add('cell','button-55');
        cell.classList.add(classed);
        
        
    
        grid.appendChild(cell);
    
        cell.addEventListener('click', function () {
            // ! Controllo che la cella non sia stata già cliccata
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
// Gestiamo il click sul tasto rigioca
playAgainButton.addEventListener('click', playAgain);


