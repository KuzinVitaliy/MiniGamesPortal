let userSelect = 0;
let currentCounter = 0;
let compSelect = 0;
const counterText = ['Камень', 'Ножницы', 'Бумага', 'Раз!', 'Два!!', 'Три!!!', "ВЫБИРАЙ!!"];
const selectText = ['Ничего', 'Камень', 'Ножницы', 'Бумага']
let counterInterval;


function start() {
    userSelect = 0
    currentCounter = 0;
    counterInterval = setInterval(() => nextCounter(), 1 * 1000);

}

function userSelectClick(us) {
    userSelect = us;
}

function nextCounter() {
    const cntTxt = document.getElementById("counterText");
    cntTxt.innerText = counterText[currentCounter];
    currentCounter++;
    if (currentCounter === 7) {
        clearInterval(counterInterval);

        compSelect = Math.ceil(Math.random() * 3);
        let buttons = document.querySelectorAll('.button');
        for (btn of buttons)
            btn.disabled = false;
        progress();

        //for (btn of buttons)            btn.disabled = true;
    }
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function progress() {
    var elem = document.getElementsByClassName("progress-bar")[0];
    var width = 1;
    var id = setInterval(progress, 10);

    function progress() {
        if (width >= 100) {
            clearInterval(id);
        } else {
            width++;
            elem.style.width = width + "%";
            elem.innerHTML = 'Выбирай';//width * 1 + "%";
        }
    }
    sleep(2000).then(() => { CheckResult(); });
}


function CheckResult() {
    let rc = CompareResult(userSelect, compSelect);
    let resTxt = `Вы выбрали ${selectText[userSelect]} Я выбрала ${selectText[compSelect]}`;

    switch (rc) {
        case 0:
            resTxt += " Вы проиграли!";
            break;
        case 1:
            resTxt += " Ничья!";
            break;
        case 2:
            resTxt += " Вы выиграли!!";
            break;
    }

    const resultText = document.getElementById("resultText");
    resultText.innerText = resTxt;
}

//Возвращает результат игры КНБ
//  0- игрок 1 проиграл
//  1 - Ничья
//  2-  игрок 1 выиграл
function CompareResult(gamer1, gamer2) {

    if (gamer1 === gamer2) return 1; //Ничья
    if (gamer1 === 0)
        return 0; //Игрок 1  ничего не выбрал.
    if (gamer2 === 0)
        return 2; //Игрок 2  ничего не выбрал.

    if (gamer1 === 1) // G1- Камень
        if (gamer2 === 2) return 2; // G2- ножницы
        else return 0;
    else
        if (gamer1 === 2) // G1- ножницы
            if (gamer2 === 3) return 2; // G2- бумага
            else return 0;
        else
            if (gamer1 === 3) // G1- бумага
                if (gamer2 === 0) return 2; // G2- камень
                else return 0;
}