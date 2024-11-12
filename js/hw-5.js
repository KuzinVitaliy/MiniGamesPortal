
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

