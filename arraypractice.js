//#1) Forgotten that the brackets for arrays were called 'array literals'. Example of a simple array

const Leon = 'Leon is the absolute sickest RE character EVER!';

const superStars = [ 
    'Mario',
    'Link',
    'DonkeyKong',
    Leon,
    'Cloud'
];

console.log(superStars[3]);

//Just did a little experimentation with an array, having all the other array elements as strings, I called index 3 which was a variable I defined. Pretty cool

//#2) - Below making an array full of numbers and finding the total in a for loop

const howMany = [ 12, 2, 9 ];
let sum = 0;
for ( let i = 0; i < howMany.length; i++) {
    sum += howMany[i];
}

console.log(sum);

//#3) Get the sum of two arrays…actually the sum of all their elements.

// let arr_1 = [3, 5, 22, 5,  7,  2,  45, 75, 89, 21, 2]; // --> 276
// let arr_2 = [9, 2, 42, 55, 71, 22, 4,  5,  90, 25, 26]; // --> 351
// // Example output: 
// // 276 + 351 = 627