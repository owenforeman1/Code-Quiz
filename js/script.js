// elements
var body = document.body;
var h1El = document.createElement("h1");
var infoEl = document.createElement("div");

var questionsEl = document.createElement("h2");
var answersEl = document.createElement("ul")
var currentQuestion = 0;

var buttonOne = document.createElement("button");
var buttonTwo = document.createElement("button");
var buttonThree = document.createElement("button");
var buttonFour = document.createElement("button");
var introEl = document.createElement("p");


// text
h1El.textContent = "US-Citizenship-Quiz!";
questionsEl.textContent = "1. What is one right or freedom from the First Amendment?";
introEl.textContent = "Try to answer the following questions within the time limit. Keep in mind wrong answers will deduct scoretime by ten seconds.";

body.appendChild(h1El);
body.appendChild(introEl);
body.appendChild(infoEl);
h1El.setAttribute("style", "color:blue; text-align:center;");

var startQuiz = function () {
    introEl.remove();
    btn.remove();
    body.appendChild(questionsEl);
    body.appendChild(answersEl);
    answersEl.appendChild(buttonOne);
    answersEl.appendChild(buttonTwo);
    answersEl.appendChild(buttonThree);
    answersEl.appendChild(buttonFour);   
    nextQuestion(questionsArr[currentQuestion]);
};

let questionOne = {
    title: "1. What is one right or freedom from the First Amendment?",
    questions: ["Free pizza", "Speech", "free Coca Cola", "Free dogs"],
    correctAnswer: 1,
};

let questionTwo = {
    title: "2. Name one branch or part of the government?",
    questions: ["Legislative", "New York", "Abe Lincoln", "Banana"],
    correctAnswer: 0,
};

let questionThree = {
    title: "3. What is one right or freedom from the First Amendment?",
    questions: ["Free pizza", "Speech", "free Coca Cola", "Free dogs"],
    correctAnswer: 1,
};

let questionFour = {
    title: "3. What is one right or freedom from the First Amendment?",
    questions: ["Free pizza", "Speech", "free Coca Cola", "Free dogs"],
    correctAnswer: 1,
};

let questionFive = {
    title: "3. What is one right or freedom from the First Amendment?",
    questions: ["Free pizza", "Speech", "free Coca Cola", "Free dogs"],
    correctAnswer: 1,
};

let questionsArr = [
    questionOne,
    questionTwo,
    questionThree,
    questionFour,
    questionFive,
];


var nextQuestion = function (question) {
// new title
questionsEl.textContent = question.title;
// remove excitstinbg button
var oldButtonsArray = document.querySelectorAll("button");
oldButtonsArray.forEach(function (element, index) {
    element.remove();
});
// creating new btn
var buttonOne = document.createElement("button");
var buttonTwo = document.createElement("button");
var buttonThree = document.createElement("button");
var buttonFour = document.createElement("button");
answersEl.appendChild(buttonOne);
answersEl.appendChild(buttonTwo);
answersEl.appendChild(buttonThree);
answersEl.appendChild(buttonFour);   
// append new button

// change buttons
var buttonsArray = document.querySelectorAll("button");

buttonsArray.forEach(function (element, index) {
    element.textContent = question.questions[index];
    element.addEventListener("click", function () {
        console.log("BUtton CLicKED");
        if (question.correctAnswer == index) {
            correctAnswer();
        } else {
            wrongAnswer();
        }
    });
});









};

var correctAnswer = function () {
    console.log("Correct");
    currentQuestion++;
    nextQuestion(questionsArr[currentQuestion]);
};

var wrongAnswer = function () {
    console.log("wrong");
    currentQuestion++;
    nextQuestion(questionsArr[currentQuestion]);
};


// start quiz button
let btn = document.createElement("button");
btn.innerHTML = "Start Quiz";
btn.type = "Start Quiz";
btn.name = "formBtn";
document.body.appendChild(btn);

btn.addEventListener("click", startQuiz);




//timer
// var secondsLeft = 10;

// function setTime() {
//     // Sets interval in variable
//     var timerInterval = setInterval(function () {
//         secondsLeft--;
//         timeEl.textContent = secondsLeft + " seconds left till colorsplosion.";

//         if (secondsLeft === 0) {
//             // Stops execution of action at set interval
//             clearInterval(timerInterval);
//             // Calls function to create and append image
//             sendMessage();
//         }
//     }, 1000);
// }
// function sendMessage() {
//     timeEl.textContent = " ";
//     var imgEl = document.createElement("img");
//     imgEl.setAttribute("src", "images/image_1.jpg");
//     mainEl.appendChild(imgEl);
// }







// GIVEN I am taking a code quiz
// WHEN I click the start button
// THEN a timer starts and I am presented with a question
// WHEN I answer a question
// THEN I am presented with another question
// WHEN I answer a question incorrectly
// THEN time is subtracted from the clock
// WHEN all questions are answered or the timer reaches 0
// THEN the game is over
// WHEN the game is over
// THEN I can save my initials and my score