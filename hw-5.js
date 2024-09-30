const maxDemand = 10;
var demand = maxDemand;
var intendedNumber = 0;

function Init() {
    demand = maxDemand;
    intendedNumber = Math.round(Math.random() * 99 + 1);
    console.log(`Инициализация. Загадали ${intendedNumber}`);

    const elm = document.getElementById("totalDemand");
    elm.innerText = maxDemand;

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

//Обработка нажатия кнопки проверить
function checkResult() {
    const userNumber = document.getElementById("userNumber");
    var mainInfo = document.getElementById("mainInfo");
    var cnt = document.getElementById("countValue");

    var checkResult = Check(userNumber.value);
    console.log(`Результат проверки ${checkResult}`)
    switch (checkResult) {
        case -5:
            mainInfo.innerText = "Все попытки закончились! Вы проиграли";
            mainInfo.className = "noMoreDemand";
            break;
        case -4:
            mainInfo.innerText = "Это число больше 100";
            mainInfo.className = "badValue";
            break;
        case -3: mainInfo.innerText = "Это число меньше или рамное 0 ";
            //mainInfo.classList.toggle("badValue");

            mainInfo.className = "badValue";
            break;
        case -2: mainInfo.innerText = "Это не число";
            mainInfo.className = "badValue";
            break;
        case -1:
            mainInfo.innerText = "Задуманное число больше";
            mainInfo.className = "greaterNumber";
            break;
        case 0: mainInfo.innerText = "Поздравляю!! ";
            mainInfo.className = "victory";
            break;
        case 1:
            mainInfo.innerText = "Задуманное число меньше";
            mainInfo.className = "lessNumber";
            break;
    }
    cnt.innerText = demand;
}