// Forgotten that the brackets for arrays were called 'array literals'

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

//Below making an array full of numbers and finding the total in a for loop

const howMany = [ 12, 2, 9 ];
let sum = 0;
for ( let i = 0; i < howMany.length; i++) {
    sum += howMany[i];
}

console.log(sum);
