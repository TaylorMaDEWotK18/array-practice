const retroList = [
    ['Zelda: Ocarina of Time', 'N64', '1998'],
    ['Resident Evil 2', 'PS1', '1998'],
    ['Super Mario World', 'SNES', '1990'],
    ['Final Fantasy 9', 'PS1', '2000'],
    ['Metal Gear Solid 3', 'PS2', '2004']
]

function createRetroList( arr ) {
    games = ``;
    for ( let x = 0; x < arr.length; x++) {
        games += `<li>${arr[x][0]} was for the ${arr[x][1]} developed in the year ${arr[x][2]}</li>`
    }
}