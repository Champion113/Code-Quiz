var questions = [
    {
        question: "What method changes the HTML content in Javascript?",
        choices: ["getElementById()", "function()", "Alert(Change HTML)","None of above"],
        answer: "getElemenyById()"
    }, {
        question: "Define Event.preventDefault",
        choices: ["The function to add an event", "To stop the browser from reloading the page upon a form submission", "To prevent the default event to load","None of above"],
        answer: "To stop the browser from reloading the page upon a form submission"
    }, {
        question: "Which of the following can be used to make the console display data as a javascript object?",
        choices: ["Console.var", "Console.display", "Console.dir()","None of above"],
        answer: "Console.dir()"
    }, {
        question: "Which operator is used to assign a value to a variable?",
        choices: ["+", "=", "-","None of above"],
        answer: "="
    }, {
        question: "How to write an IF statement in Javascript?",
        choices: ["if (i == 5)", "if i = 5", "if {i == 5}","None of above"],
        answer: "if (i == 5)"
    }
]
index = 0;

// //var sec = 40;
// var time = setInterval(myTimer, 1000);

// function myTimer() {
//     document.getElementById('timer').innerHTML = sec + "sec left";
//     sec--;
//     if (sec == -1) {
//         clearInterval(time);
//         alert("Time out!! :(");
//     }

var startBtn = document.getElementById("start");
var startscreen = document.getElementById("startscreen");
var quizscreen = document.getElementById ("quizscreen");
//var timerE1 = document.getElementById("timer")//
startBtn.addEventListener("click", function(){
 
    startscreen.setAttribute("class", "hide");
    quizscreen.removeAttribute("class","hide");
    buildCard()
})

function buildCard() {
    var currentQuestion = questions[index]
    var questionTitle = document.getElementById("question-title");
    var choiceButtons = document.getElementById("choice-buttons");

    questionTitle.textContent = currentQuestion.question;

    currentQuestion.choices.forEach(function(choice){
        var choiceBtn = document.createElement("button");
        choiceBtn.setAttribute("value", choice);

        choiceBtn.textContent = choice;
        choiceBtn.onclick = questionClick;

        choiceButtons.appendChild(choiceBtn)


    })
}

// //function questionClick() {
//     var choiceBtnLeft = 40;

//     var choiceBtnInterval = setInterval(function () {
//         //console.log('this test');//
//         if (choiceBtnLeft >= 0) {
//             choiceBtnInterval.textContent = choiceBtnLeft;
//             choiceBtnLeft--;
            
//         } else {
//             choiceBtnInterval.textContent = "";   
//             clearInterval(choiceBtnInterval)
//             buildCard();
            
//         }

//     }, 1000);
// }



startBtn.onclick = choiceBtn;
    //console.log(this.value);
    //evaluate with an if statement if the click is right or wrong
    //add one to our index++
    //call buildcard()

//////function choiceBtn() {
//     var choiceBtnLeft = 40;

//     var choiceBtnInterval = setInterval(function () {
//         //console.log('this test');//
//         if (choiceBtnLeft >= 0) {
//             choiceBtnInterval.textContent = choiceBtnLeft;
//             choiceBtnLeft--;
            
//         } else {
//             choiceBtnInterval.textContent = "";   
//             clearInterval(choiceBtnInterval)
//             buildCard();
            
//         }

//     }, 1000);
// }
// startBtn.onclick = choiceBtn;
function localStorage(){

}