function GetQuiz() {

    const quiz = [
        {
            question: "Какой цвет небо?",
            options: ["1. Красный", "2. Синий", "3. Зеленый"],
            correctAnswer: 2 // номер правильного ответа
        },
        {
            question: "Сколько дней в неделе?",
            options: ["1. Шесть", "2. Семь", "3. Восемь"],
            correctAnswer: 2
        },
        {
            question: "Сколько у человека пальцев на одной руке?",
            options: ["1. Четыре", "2. Пять", "3. Шесть"],
            correctAnswer: 2
        }
    ];
    return quiz;
}

function AddNewQuestion(newQuestion, queryNumber) {
    let res = `<div class="question">
            <div class="question-text">${newQuestion.question}</div>
            <div class="answers" id="answers${queryNumber}" Варианты ответов>`


    for (let i = 0; i < newQuestion.options.length; i++) {
        let rightAnswer = i == (newQuestion.correctAnswer - 1);
        let answ = `<div class="answer"><input type="radio" value="${rightAnswer}" name="Q${queryNumber}" id="Q${queryNumber}_A${i}"><label for="Q${queryNumber}_A${i}">${newQuestion.options[i]}</label></div>`;
        res += answ;
    }
    res += `     
            </div>
        </div>`;

    return res;
}

function AddAllQuestions() {
    let questions = GetQuiz();
    let res = '';
    for (let i = 0; i < questions.length; i++) {
        res += AddNewQuestion(questions[i], i);
    }

    const qeries = document.getElementById("questions");

    var div = document.createElement('div');
    div.innerHTML = res;
    div.id = "queryblock";
    qeries.appendChild(div);
}

function CheckResults() {
    let questions = GetQuiz();
    let rightAnswers = 0;
    for (let i = 0; i < questions.length; i++) {
        let id = `Q${i}_A${questions[i].correctAnswer - 1}`;
        let check = document.getElementById(id);
        if (check.checked)
            rightAnswers++;
    }

    let resTxt = `Вы ответили правильно на ${rightAnswers} вопрос из ${questions.length}`
    const resDiv = document.getElementById("resTxt");
    resDiv.innerText = resTxt;
}