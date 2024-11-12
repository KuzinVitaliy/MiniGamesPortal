const maxDemand = 10;
let demand = maxDemand;
let intendedNumber = 0;

function guessNumber() {
    intendedNumber = Math.round(Math.random() * 99 + 1);
    let userNumber = 0;
    let prevResult = "";
    checkRes = -100;
    do {
        let userNumber = prompt(`${prevResult}. Введите число от 1 до 100`);
        if (userNumber == null) {
            prevResult = 'Вы прервали игру';
            break;
        }
        checkRes = Check(userNumber);
        prevResult = getResultMessage(checkRes);
    }
    //while (!(checkRes in [-5, 0]));
    while (checkRes != -5 && checkRes != 0);
    alert(prevResult);
}

function getResultMessage(resultCode) {
    switch (resultCode) {
        case -5:
            return "Все попытки закончились! Вы проиграли";
        case -4:
            return "Это число больше 100";
        case -3:
            return "Это число меньше или рамное 0 ";
        case -2:
            return "Это не число";
        case -1:
            return "Задуманное число больше";
        case 0:
            return "Поздравляю!! ";
        case 1:
            return "Задуманное число меньше";
    }
}



//Проверяем введенное число и сравниваем с задуманным
function Check(userNumber) {
    console.log(`Проверяем значение ${userNumber}`)
    if (intendedNumber === 0) Init(); //Инициализируем при первой проверке
    if (isNaN(userNumber)) return -2; //Это не число
    userNumber = Number(userNumber);
    if (userNumber <= 0) return -3;
    if (userNumber > 100) return -4;
    demand--; //Это число от 1 до 100. Уменьшаем кол-во попыток
    if (userNumber === intendedNumber) return 0;  //Угадали
    if (demand === 0) { intendedNumber == 0; return -5 }; //КОл-во попыток кончилось
    if (intendedNumber < userNumber) return 1; //ЗАдуманное число меньше
    return -1; //ЗАдуманное число больше
}

function Init() {
    demand = maxDemand;
    intendedNumber = Math.round(Math.random() * 99 + 1);
    console.log(`Инициализация. Загадали ${intendedNumber}`);

    const elm = document.getElementById("totalDemand");
    elm.innerText = maxDemand;

}

//Обработка нажатия кнопки проверить
function checkResult() {
    const userNumber = document.getElementById("userNumber");
    let mainInfo = document.getElementById("mainInfo");
    let cnt = document.getElementById("countValue");

    let checkResult = Check(userNumber.value);
    console.log(`Результат проверки ${checkResult}`)
    mainInfo.innerText = getResultMessage(checkResult);
    switch (checkResult) {
        case -5:
            mainInfo.className = "noMoreDemand";
            break;
        case -4:
            mainInfo.className = "badValue";
            break;
        case -3:
            mainInfo.className = "badValue";
            break;
        case -2:
            mainInfo.className = "badValue";
            break;
        case -1:
            mainInfo.className = "greaterNumber";
            break;
        case 0:
            Init();
            mainInfo.className = "victory";
            break;
        case 1:
            mainInfo.className = "lessNumber";
            break;
    }
    cnt.innerText = demand;
    if (demand < 3)
        cnt.className = "fewDemand";
    else
        cnt.className = "manyDemand";
}

