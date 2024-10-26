const maxDemand = 10;
let demand = maxDemand;
let intendedNumber = 0;

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


//Task 01
function minValue2(a, b) {
    if (a > b)
        return b;
    return a;
}

function minValue(a, b) { return a > b ? b : a }

console.log(isNaN(234));
console.log(isNaN('234'));
console.log(isNaN('sdsd'));

let r = 45.6789;
console.log(`${r}`);

console.log(minValue(2, 5));
console.log(minValue(6, 5));
console.log(minValue(5, 5));

//Task 02
function isEven(a) {
    if (a % 2)
        return 'Число четное';
    return 'Число нечетное';
}

//Task 03
function squareConsole(a) {
    console.log(`Квадрат числа ${a} = ${a ** 2}`);
}

function squareConsole(a) {
    return a ** 2;
}

//Task 04
function hello() {
    do {
        let year = Number(prompt("Введите ваш возраст"));
        if (year < 0)
            alert('Вы ввели неправильное значение');
        else
            if (year >= 13)
                alert('Добро пожаловать!');
            else
                alert('Привет, друг!');
    }
    while (year < 0)

}

//Task 05
function mult(a, b) {
    if (isNaN(a) || isNaN(a))
        return 'Одно или оба значения не являются числом';
    return a * b;

}

//Task 06
function task06(n) {

    if (isNaN(n))
        alert('Переданный параметр не является числом');
    else alert(`${n} в кубе равняется ${n ** 3}`);
}

//Task07

function getArea() {
    return this.radius ** 2 * Math.PI;
};

function getPerimeter() {
    return this.radius * 2 * Math.PI;
};

let circle1 = {
    radius: 10,
    Area: getArea,
    Perimeter: getPerimeter
}

let circle2 = {
    radius: 20,
    Area: getArea,
    Perimeter: getPerimeter
}

function TestTask07() {
    console.log(`Aria 1 ${circle1.Area()}`);
    console.log(`Perimeter 1 ${circle1.Perimeter()}`);
    console.log(`Aria 2 ${circle1.Area()}`);
    console.log(`Perimeter 2 ${circle1.Perimeter()}`);
}

let circleBase = {
    radius: 0,
    Area: getArea,
    Perimeter: getPerimeter
}

function TestTask07_Inh() {
    let circle01 = Object.create(circleBase);
    circle01.radius = 5;
    let circle02 = Object.create(circleBase);
    circle02.radius = 8;
    console.log(`Aria 1 ${circle01.Area()}`);
    console.log(`Perimeter 1 ${circle01.Perimeter()}`);
    console.log(`Aria 2 ${circle02.Area()}`);
    console.log(`Perimeter 2 ${circle02.Perimeter()}`);
}

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