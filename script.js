var questions = [
    {
        question: "What method changes the HTML content in Javascript?",
        choices: ["getElementById()", "function()", "Alert(Change HTML)","None of above"],
        answer: "getElemenyById()"
    }, {
        question: "Event.prevent",
        choices: ["getElementById()", "function()", "Alert(Change HTML)","None of above"],
        answer: "getElemenyById()"
    }, {
        question: "What method changes the HTML content in Javascript?",
        choices: ["getElementById()", "function()", "Alert(Change HTML)","None of above"],
        answer: "getElemenyById()"
    }, {
        question: "What method changes the HTML content in Javascript?",
        choices: ["getElementById()", "function()", "Alert(Change HTML)","None of above"],
        answer: "getElemenyById()"
    }, {
        question: "What method changes the HTML content in Javascript?",
        choices: ["getElementById()", "function()", "Alert(Change HTML)","None of above"],
        answer: "getElemenyById()"
    }
]


index = 0;

var startBtn = document.getElementById("start");
var startscreen = document.getElementById("startscreen");
var quizscreen = document.getElementById ("quizscreen");

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

function questionClick() {
    console.log(this.value);
    //evaluate with an if statement if the click is right or wrong
    //add one to our index++
    //call buildcard()
}