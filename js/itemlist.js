// const retroSystems = ['N64', 'NES', 'SNES', 'PlayStation', 'Sega', 'GameBoy', 'Game Gear', 'Gamecube', 'Dreamcast']
// const search = prompt('What system are you looking for?');
// let message;

// // So the goal here is to search whether the system is in stock and have the page display the answer and what we searched for. We'll use the 'includes' method and a conditional statement

// // Changing up the original if cond. and a making it an 'if else' cond and a Logical NOT Operator so that if null is entered it wil display specific message
// if ( !search) {
//     message = `Sorry, please enter an actual console. The ones we have in stock are ${retroSystems.join(', ')}`;
// } else if (retroSystems.includes(search.toLocaleLowerCase())) {
//     message = `Yes! Get ready to game cuz we have the <strong>${search}</strong> in stock! It's row ${retroSystems.indexOf(search) + 1} in the back`;
// } else {
//     message = `No I'm sorry, we're fresh out of ${search}`;
// }

// document.querySelector('main').innerHTML = `<p>${message}</p>`;

//Awesome exercise below, created practice array with awesome King novels and did some experimentation and was happy with the results! Had it spit out a specific message based on element index and WORKED! Really gettin the feel of it!

const kingBooks = ['Carrie', 'Salems Lot', 'Cujo', 'Pet Semetary', 'The Shining', 'The Stand']
let message;
let searcch = prompt(`What's your favorite Stephen King book you've read?`);

if (!kingBooks[1].includes(searcch)) {
    message = `<h1> Sick! ${searcch} is one of King's best`;
} else if (kingBooks[1] === searcch) {
    message = `<h1>Sick! ${searcch} is absolutely AMAZING! Such a sick vampire novel!</h1>`;
} else {
    message = `<h1>Oh dang! Never read ${searcch}, gonna have to give that one a shot.</h1>`;
}

document.querySelector('main').innerHTML = message;