// L'utente indica un livello di difficoltà
//  in base al quale viene generata una griglia di gioco
//  quadrata, in cui ogni cella contiene un numero tra quelli
//  compresi in un range:
// con difficoltà 1 => tra 1 e 100
// con difficoltà 2 => tra 1 e 81
// con difficoltà 3 => tra 1 e 49
// Quando l'utente clicca su ogni cella,
//  la cella cliccata si colora di azzurro.

// Primo aproccio
// L' utente quando clicka su play fa apparire la griglia

let playBtn = document.getElementById('play_btn');
playBtn.addEventListener('click', startGame);

function startGame() {
    // Scompare la scritta
    const introText = document.getElementById('intro_text')
    introText.classList.add('hidden');

    // Faccio comparire la griglia al click
    const gridGame = document.getElementById('grid');
    gridGame.classList.remove('hidden');
    gridGame.innerHTML = ''

    // Leggo il valore della Select
    let selectedLevel = document.getElementById('select_level').value;

    // Variabile numero griglie in base alla difficoltà
    let gridNumbersLevel;
    // Variabile Setto la dimensione in base alla difficoltà
    let gridDimensionLevel;

    if ( selectedLevel === 'easy' ) {
        gridNumbersLevel = 100;
        gridDimensionLevel = 10;
    } else if ( selectedLevel === 'hard' ) {
        gridNumbersLevel = 81;
        gridDimensionLevel = 9;
    } else if ( selectedLevel === 'crazy' ) {
        gridNumbersLevel = 49;
        gridDimensionLevel = 7;
    }

    console.log(gridDimensionLevel);
    for (let i = 1; i <= gridNumbersLevel ; i++) {
        const gridCompleted = gridGeneratorLevel( i, gridDimensionLevel );
        
        gridGame.appendChild(gridCompleted);
    }
}

function gridGeneratorLevel( numbersGrids, DimesionGrids ) {
    // Creare un div
    const newDiv = document.createElement('div');

    // Dare una classe sqaure ai div
    newDiv.classList.add('square');
    // Creare i span numerati
    newDiv.innerHTML = `<span>${numbersGrids}</span>`
    // Setto la width e la height
    newDiv.style.width = `calc(100% / ${DimesionGrids})`
    newDiv.style.height = `calc(100% / ${DimesionGrids})`
    console.log(DimesionGrids);
    console.log(newDiv);
    // Il Return
    return newDiv;
}

// in base alla difficolta scielta dall'utente la griglia cambia
// dimensione e numeri.