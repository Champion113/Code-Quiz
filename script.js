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
    if(currentquestion[currentQuestion]){
    var currentQuestion = questions[index];
    document.getElementById("question").textContent= question.question;
    answer.innerHTML ="";
    for (var i = 0; 1 < question.choices.length); 1++; {
         var newItem = document.createElement("li");
         newItem.textContent = question.choices[1];
         answer.appendChild(newItem);
         newItem.addEventListener("click", choiceBtn)
    // }    var questionTitle = document.getElementById("question-title");
    // var choiceButtons = document.getElementById("choice-buttons");

    // questionTitle.textContent = currentQuestion.question;

    // currentQuestion.choices.forEach(function(choice){
    //     var choiceBtn = document.createElement("button");
    //     choiceBtn.setAttribute("value", choice);

    //     choiceBtn.textContent = choice;
    //     choiceBtn.onclick = questionClick;

    //     choiceButtons.appendChild(choiceBtn)


    }
}

function questionClick() {
    answer.innerHtml ="";
    var question = question[currentQuestion];
    var lastQuestion = questions[4]
    if (questions[currentQuestion]){
        var response = document.createElement("");
    }
    if (question.answer === this.textContent) {
        response.textContent = "Correct";
    } else {
        response.textContent = "Wrong";
        timeLeft =timeLeft - 10;
    }
    SpeechRecognitionResult.appendChild(resonse);
    currentQuestion++;
}
    buildCard();
    //console.log(this.value);//
    //evaluate with an if statement if the click is right or wrong
    //add one to our index++
    //call buildcard()
}

