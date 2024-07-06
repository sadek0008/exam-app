const question = [
{
    question:"Choose the correct sentence.",
    answers:[
        { text:"It is I who is to blame.",correct: false},
        { text:"It is I who am to blame.",correct: true},
        { text:"It is I who are to blame.",correct: false},
        { text:"It is me who are to blame.",correct: false},
    ]
},
{
    question:"Everyone should do ____ duty.",
    answers: [
        { text:"their",correct: false},
        { text:"yours",correct: false},
        { text:"one's",correct: true},
        { text:"his",correct: false},
    ]
},
{
    question:"youth , I do adore thee.’ What is the meaning of the word ‘thee’ int this line?",
    answers:[
        { text:"you",correct: true},
        { text:"yours",correct: false},
        { text:"them",correct: false},
        { text:"your",correct: false},
    ]
},
{
    question:"choose the correct sentence.",
    answers:[
        { text:"The presents are for you and me.",correct: true},
        { text:"The presents are for me and you.",correct: false},
        { text:"The presents are for I and we .",correct: false},
        { text:"The presents are for you and I.",correct: false},
    ]
},
{
    question:"Modern farms are much larger than ___ of former times.",
    answers:[
        { text:"that",correct: false},
        { text:"those",correct: true},
        { text:"this",correct: false},
        { text:"these",correct: false},
    ]
},
];
const questionElement = document.getElementById("Question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentquestonIndex = 0;
let score = 0;

function startQuiz()
{
    currentquestonIndex =0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}
function showQuestion(){
    resetState();
    let currentQueston = question[currentquestonIndex];
    let questionNo = currentquestonIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQueston.question;

currentQueston.answers.forEach(answer =>{
    const button = document.createElement("button");
    button.innerHTML = answer.text;
    button.classList.add("btn");
    answerButtons.appendChild(button);
    if(answer.correct){
        button.dataset.correct = answer.correct;
    }
    button.addEventListener("click",selectAnswer);
});
}

function resetState(){
    nextButton.style.display = "none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
}
function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    }else{
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button =>{
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";
}
function  showscore(){
    resetState();
    questionElement.innerHTML = `You scoed ${score} out of ${question.length}!`;
    nextButton.innerHTML = "play again";
    nextButton.style.display = "block";
}

function handleNExtButton(){
    currentquestonIndex++;
    if(currentquestonIndex < question.length){
        showQuestion();
    }else{
        showscore();
    }
}

nextButton.addEventListener("click",()=>{
    if(currentquestonIndex < question.length){
        handleNExtButton();
    }else{
        startQuiz();
    }
}) ;
startQuiz();
