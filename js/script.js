// elements
var body = document.body;
var h1El = document.createElement("h1");
var infoEl = document.createElement("div");

var questionsEl = document.createElement("h2");
var answersEl = document.createElement("ul");
var currentQuestion = 0;
var currentTime = 75;
var timerEl = document.createElement("p");
var timeInterval;
var highScoreScores = JSON.parse(localStorage.getItem("finalFinalScore"));
if (highScoreScores === null) {
   highScoreScores = [];
}
var scoreInput = document.querySelector("score");

var buttonOne = document.createElement("button");
var buttonTwo = document.createElement("button");
var buttonThree = document.createElement("button");
var buttonFour = document.createElement("button");
var introEl = document.createElement("p");

// text
h1El.textContent = "US-Citizenship-Quiz!";
questionsEl.textContent =
    "1. What is one right or freedom from the First Amendment?";
introEl.textContent =
    "Try to answer the following questions within the time limit. Keep in mind wrong answers will deduct scoretime by ten seconds.";

introEl.setAttribute("style", "text-align:center");
body.appendChild(h1El);
body.appendChild(introEl);
body.appendChild(infoEl);
h1El.setAttribute("style", "color:blue; text-align:center;");
timerEl.setAttribute("style","height:50px");
questionsEl.setAttribute("style", "text-align:center" )
answersEl.setAttribute("style","text-align:center")


var startQuiz = function () {
    var titleRemove = document.querySelector("h1");
    titleRemove.remove();
    introEl.remove();
    btn.remove();
    body.appendChild(questionsEl);
    body.appendChild(answersEl);
    answersEl.appendChild(buttonOne);
    answersEl.appendChild(buttonTwo);
    answersEl.appendChild(buttonThree);
    answersEl.appendChild(buttonFour);
    nextQuestion(questionsArr[currentQuestion]);
    body.appendChild(timerEl);
    countdown();
    document.getElementById("timerEl").style.animationFillMode
};

function countdown() {
    timerEl.textContent = currentTime + " seconds remaining";
    // Use the `setInterval()` method to call a function to be executed every 1000 milliseconds
    timeInterval = setInterval(function () {
        // As long as the `currentTime` is greater than 1
        if (currentTime > 1) {
            // Set the `textContent` of `timerEl` to show the remaining seconds
            timerEl.textContent = currentTime + " seconds remaining";
            // Decrement `currentTime` by 1
            currentTime--;
        } else if (currentTime === 1) {
            // When `currentTime` is equal to 1, rename to 'second' instead of 'seconds'
            timerEl.textContent = currentTime + " second remaining";
            currentTime--;
        } else {
            // Once `currentTime` gets to 0, set `timerEl` to an empty string
            timerEl.textContent = "";
            // Use `clearInterval()` to stop the timer
            clearInterval(timeInterval);
            // Call the `displayMessage()` function
           finishQuiz();
        }
    }, 1000);
}



let questionOne = {
    title: "1. What is one right or freedom from the First Amendment?",
    questions: ["Free pizza", "free soda", "Speech", "Free dogs"],
    correctAnswer: 2,
};

let questionTwo = {
    title: "2. Name one branch or part of the government?",
    questions: ["Legislative", "New York", "Abe Lincoln", "Military"],
    correctAnswer: 0,
};

let questionThree = {
    title: "3. If the President can no longer serve, who becomes President?",
    questions: [
        "The People",
        "The Vice-President",
        "The Biggest Company",
        "The First Lady",
    ],
    correctAnswer: 1,
};

let questionFour = {
    title: "4. Under our Constitution, some powers belong to the federal government. What is one power of the federal government?",
    questions: [
        "To declare war",
        "Time Travel",
        "Ban Elections",
        "Ban Religions",
    ],
    correctAnswer: 0,
};

let questionFive = {
    title: "5. What is one reason colonists came to America?",
    questions: [
        "Free pizza",
        "Wanted Marshal law established",
        "Wanted different dog breeds",
        "Freedom",
    ],
    correctAnswer: 3,
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
    // remove existing
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
            console.log("Button CLicKed");
            if (question.correctAnswer == index) {
                correctAnswer();
            } else {
                wrongAnswer();
            }
        });
    });

   
    // make page pretty
    // go back to start button
    // clear highscore history button
    // line 55 fix?
  

};

var finishQuiz = function () {
    var oldTitle = document.querySelector("h2");
    oldTitle.remove();
    var oldButtonsArray = document.querySelectorAll("button");
    oldButtonsArray.forEach(function (element, index) {
        element.remove();
    });
    clearInterval(timeInterval);
    //   needs done and initail screen with score
    var endScreen = document.createElement("h2");
    body.appendChild(endScreen);
    endScreen.textContent = "All Done!";

    var input = document.createElement("input");
    input.type = "text";
    body.appendChild(input);

    var inputButton = document.createElement("button");
    inputButton.type = "button";
    body.appendChild(inputButton);
    inputButton.textContent = "Submit";

    inputButton.addEventListener("click", highScore);
};

var highScore = function () {
    var oldTitle = document.querySelector("h2");
    oldTitle.remove();
    var oldButton = document.querySelector("button");
    oldButton.remove();
    var finalInitials = document.querySelector("input").value;
    let finalScore = {
        initals: finalInitials,
        time: currentTime,
    }
    highScoreScores.push(finalScore);
    var oldInputBox = document.querySelector("input");
    oldInputBox.remove();
    var highScorePage = document.createElement("h2");
    body.appendChild(highScorePage);
    highScorePage.textContent = "Highscores";
    var highScoreS = document.createElement("ol");
    body.appendChild(highScoreS);
    var sortedHighScores = highScoreScores.sort((a, b) => b.time - a.time);
    sortedHighScores.forEach(function (element, index) {
     var finalScores = document.createElement("li"); 
     finalScores.textContent = element.initals +" - "+ element.time;
     highScoreS.appendChild(finalScores);

      var inputButton = document.createElement("button");
      inputButton.type = "button";
      body.appendChild(inputButton);
      inputButton.textContent = "Submit";
      inputButton.onclick="history-back"();

      inputButton.addEventListener("click", highScoreScores);
    });
    localStorage.setItem("finalFinalScore", JSON.stringify(sortedHighScores));

       

    // itterate highscores array and make li inside of ol 
};

// function scoreInput() {
//     var listOfScores = [];
//     localStorage.setItem("listOfScores", JSON.stringify(listOfScores));
// }

// var user = {
//     initials: initials.value.trim(),
//     score: currentTime.value.trim(),
// }

var correctAnswer = function () {
    if (currentQuestion === 4) {
        finishQuiz();
    } else {
        console.log("Correct");
        currentQuestion++;
        nextQuestion(questionsArr[currentQuestion]);
    }
};

var wrongAnswer = function () {
    if (currentQuestion === 4) {
        finishQuiz();
    } else {
        console.log("Wrong");
        currentQuestion++;
        nextQuestion(questionsArr[currentQuestion]);
    }
    console.log(currentTime -= 10);
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
