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