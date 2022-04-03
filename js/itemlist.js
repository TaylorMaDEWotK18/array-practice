const retroSystems = ['N64', 'NES', 'SNES', 'PlayStation', 'Sega', 'GameBoy', 'Game Gear']
const search = prompt('What system are you looking for?');
let message

// So the goal here is to search whether the system is in stock and have the page display the answer and what we searched for. We'll use the 'includes' method and a conditional statement
if (retroSystems.includes === search) {
    message = `Yes! Get ready to game cuz we have the ${seach} in stock!`;
} else {
    message = `No I'm sorry, we're fresh out of ${search}`;
}
