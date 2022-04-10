// 1. Create a multidimensional array to hold quiz questions and answers
const quizQs = [
    ['What is you favorite Stephen Book?', 'Salems Lot'],
    ['What is your favorite short story of his?', 'The Raft'],
    ['Who is your favorite Resident Evil character of all time?', 'Leon'],
    ['Who is the love of your life?', 'Stone Cold Fox'],
    ['What is your favorite verse?', 'Proverbs 3:5-6']
]

// 2. Store the number of questions answered correctly
let correct = 0;

/* 
  3. Use a loop to cycle through each question
      - Present each question to the user
      - Compare the user's response to answer in the array
      - If the response matches the answer, the number of correctly
        answered questions increments by 1
*/

//I feel like below (commented out) is a way to do it but they way the video does it is different. I'm curious if there is a way to do it below
// let questions = ``;
// for ( let x = 0; x < quizQs.length; x++) {
//     questions += prompt(`${quizQs[x][0]}`);
//     if (questions === quizQs[x][1]) {
//         correct++;
//     }
// }

for ( let x = 0; x < quizQs.length; x++) {
    let questions = quizQs[x][0];
    let answers = quizQs[x][1];
    let response = prompt(questions);

    if (answers === response) {
        correct++;
    }
}

let results = `<h1>Congrats! You got ${correct} answers right!</h1>`;

// 4. Display the number of correct answers to the user
document.querySelector('main').innerHTML = results;