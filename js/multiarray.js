const games = [
    ['Super Metroid', 'Super Mario World', 'X-Men'],
    ['Sonic', 'Streets of Rage', 'Vector Man'],
    ['Super Smash', ' Mario 64', 'Shadows of the Empire']
]

const systems = [ 'SNES', 'Sega', 'N64']

let message;

// for (let x = 0; x < games.length; x++) {
//     console.log(games[x]);
// }

for (let x = 0; x < games.length; x++) {
    message += `<h2>All the games we have for ${systems[x]} available are ${games[x].join(', ')}!</h2>`;
}

document.querySelector('main').innerHTML = message;
