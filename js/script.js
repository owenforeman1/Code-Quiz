// elements
var body = document.body;
var h1El = document.createElement("h1");
var infoEl = document.createElement("div");

var questionsEl = document.createElement("h2");
var answersEl = document.createElement("ul")

var li1 = document.createElement("li");
var li2 = document.createElement("li");
var li3 = document.createElement("li");
var li4 = document.createElement("li");
var introEl = document.createElement("p");


// text
h1El.textContent = "US-Citizenship-Quiz!";
questionsEl.textContent = "1. What is one right or freedom from the First Amendment?";
// answersEl.textContent = "";
// li1.textContent = "Apples 🍎 ";
// li2.textContent = "Pizza 🍕 ";
// li3.textContent = "Dumplings 🥟 ";
// li4.textContent = "Cupcakes 🧁 ";
introEl.textContent = "Try to answer the following questions within the time limit. Keep in mind wrong answers will deduct scoretime by ten seconds.";

var promptUser = function () {
    introEl.remove();
    btn.remove();
    questionsEl.textContent =
     "1. What is one right or freedom from the First Amendment?";
     li1.textContent = "Apples 🍎 ";
     li2.textContent = "Pizza 🍕 ";
     li3.textContent = "Dumplings 🥟 ";
     li4.textContent = "Cupcakes 🧁 ";
 body.appendChild(questionsEl);
    body.appendChild(answersEl);
    answersEl.appendChild(li1);
    answersEl.appendChild(li2);
    answersEl.appendChild(li3);
    answersEl.appendChild(li4);    
};

body.appendChild(h1El);
body.appendChild(introEl);

body.appendChild(infoEl);

h1El.setAttribute("style", "color:blue; text-align:center;");




// start quiz button
let btn = document.createElement("button");
btn.innerHTML = "Start Quiz";
btn.type = "Start Quiz";
btn.name = "formBtn";
document.body.appendChild(btn);

btn.addEventListener("click", promptUser);






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