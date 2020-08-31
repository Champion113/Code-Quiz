var questions = [
    {
        question: "What method changes the HTML content in Javascript?",
        choices: ["getElementById()", "function()", "Alert(Change HTML)","None of above"],
        answer: "getElemenyById()"
    }, 
    {
        question: "Define Event.prevent",
        choices: ["To prevent event element", "Stop the brower from reloading the page upon a form submission", "Start brower to reload","None of above"],
        answer: "Stop the brower from reloading the page upon a form submission"
    }, 
    {
        question: "Which of the following can be used to make the console display data as a Javascript object?",
        choices: ["Console.dir[]", "Console.dir = ", "Console.dir()","None of above"],
        answer: "Console.dir()"
    }, 
    {
        question: "How can you comment in Javascript?",
        choices: ["<!--Comment-->", "'Comment", "//Comment","None of above"],
        answer: "//Comment"
    }, 
    {
        question: "Which operator is used to assign a value to a variable?",
        choices: ["=", "*", "-","None of above"],
        answer: "=)"
    }
]

index = 0;
	

var startBtn = document.getElementById("start");
var startscreen = document.getElementById("startscreen");
var quizscreen = document.getElementById ("quizscreen");







startBtn.addEventListener("click", function(){
 
    startscreen.setAttribute("class", "hide");
    //quizscreen.removeAttribute("class","hide");
//    buildCard()
})


function questionClick() {
    var currentQuestion = questions[index]
    console.log(question);
    if (question.correct === this.textContent){

    }else {

    }
    currentQuestion++
    if (currentQuestion === questions.length) {

    }
getQuestion();

    // var questionTitle = document.getElementById("question-title");
    // var choiceButtons = document.getElementById("choice-buttons");


    // questionTitle.textContent = currentQuestion.question;


    // currentQuestion.choices.forEach(function(choice){
    //     var choiceBtn = document.createElement("button");
    //     choiceBtn.setAttribute("value", choice);


    //     choiceBtn.textContent = choice;
    //     choiceBtn.onclick = questionClick;


    //     choiceButtons.appendChild(choiceBtn)




    }




 //   console.log(this.value);
    //evaluate with an if statement if the click is right or wrong
    //add one to our index++
    //call buildcard()


var timerEl = document.getElementById('countdown');
var mainEl = document.getElementById('main');
var startBtn = document.getElementById('start');

//var Score = 
//var words = score.split(' ');

// Timer Start at 40 sec
function countdown() {
  var timeLeft = 40;

  //Function called every 1000 milliseconds
  var timeInterval = setInterval(function() {
      console.log("testing")
    if (timeLeft > 1) {
      timerEl.textContent = timeLeft + ' seconds remaining';
      timeLeft--;
    } else if (timeLeft === 1) {
      timerEl.textContent = timeLeft + ' second remaining';
      timeLeft--;
    } else {
      timerEl.textContent = '';
      clearInterval(timeInterval);
      displayScore();
    }
  }, 1000);
}

// Displays Score end quiz
function displayScore() {
  var wordCount = 0;

  // Uses the `setInterval()` method to call a function to be executed every 300 milliseconds
//   var scoreInterval = setInterval(function() {
//     if (words[wordCount] === undefined) {
//       clearInterval(scoreInterval);
//     } else {
//       mainEl.textContent = words[wordCount];
//       wordCount++;
//     }
//   }, 300);
}



startBtn.onclick = countdown;
