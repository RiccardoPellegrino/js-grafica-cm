
let playButton = document.getElementById('play');
let btnReset = document.getElementById("reset");

function play() {

    console.log("Inizio gioco");
    const NUM_BOMB = 16;
    const bombsPosition = [];
    let testo = document.getElementById("testo");
    testo.innerHTML = '';
    let numCell;
    const fieldGame = document.getElementById('field-game');
    fieldGame.innerHTML = '';
    const levelHtml = document.getElementById('livello');
    const level = levelHtml.value;

    switch (level) {
        case '1':
        default:
            numCell = 100;
            break;
        case '2':
            numCell = 81;
            break;
        case '3':
            numCell = 49;
            break;
    }
    while (bombsPosition.length < NUM_BOMB) {
        const bomb = getRandomNumber(1, numCell);
        if (!bombsPosition.includes(bomb)) {
            bombsPosition.push(bomb);
        }
    }
    console.log(bombsPosition);
    function creaCell(num) {
        const cellPerSide = Math.sqrt(numCell);
        const cell = document.createElement('div');
        cell.className = 'quadrato';
        cell.style.width = `calc(100% / ${cellPerSide})`;
        cell.style.height = `calc(100% / ${cellPerSide})`;
        cell.innerHTML = `<span>${num}</span>`;
        cell.addEventListener("click", function () {
            this.classList.add('selezionato');
        })
        return cell;
    }

    function creaGriglia() {
        const griglia = document.createElement('div');
        griglia.className = 'griglia';
        for (let i = 1; i <= numCell; i++) {
            const cell = creaCell(i);
            griglia.appendChild(cell);
        }
        fieldGame.appendChild(griglia);
    }
    creaGriglia();

}


playButton.addEventListener('click', play);


btnReset.addEventListener("click", function(){
    window.location.reload();
});