// 1. Create a multidimensional array to hold quiz questions and answers
const quizTime = [
    ['What grade were you when you first played RE2?','4th'],
    ['Whats your favorite Dreamcast game?', 'MVC3'],
    ['What PS5 game first blew your mind?', 'Returnal'],
    ['What was your favorite Christmas surprise console from Dad?', 'SNES']
]

// 2. Store the number of questions answered correctly
const correct = [];
const incorrect = [];
let correctAnswers = 0;

/* 
  3. Use a loop to cycle through each question
      - Present each question to the user
      - Compare the user's response to answer in the array
      - If the response matches the answer, the number of correctly
        answered questions increments by 1
*/
for ( let x = 0; x < quizTime.length; x++) {
    let questions = quizTime[x][0];
    let answers = quizTime[x][1];
    let response = prompt(questions);

    if (response === answers) {
        correctAnswers++;
        correct.push(questions);
    } else {
        incorrect.push(questions);
    }
}

let results = correctAnswers;

// 4. Display which questions were correct and which incorrect
document.querySelector('main').innerHTML = `<h1>Awesome! You got ${results} correct! And here are the questions you got right and got wrong.</h1>
    <h2>Right Q's</h2>
    <ol>
        ${correct}
    </ol>
    <h2>Wrong Q's</h2>
    <ol>
        ${incorrect}
    </ol>
`;