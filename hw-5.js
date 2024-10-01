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


//Task 01
function max(a, b) {
    if (a > b)
        return b;
    return a;
}

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
        var year = Number(prompt("Введите ваш возраст"));
        if (year < 0)
            alert('Вы ввели неправильное значение');
        else
            if (year > 13)
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

var circle1 = {
    radius: 10,
    Area: getArea,
    Perimeter: getPerimeter
}

var circle2 = {
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