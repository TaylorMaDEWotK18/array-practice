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

let set1 = [17, 34, 2, 9, 84];
let set2 = [18, 92, 4, 56, 3];
let sum1 = 0;


// // Example output: 
// // 276 + 351 = 627