// Task 01

console.log('Задача №1')
const arr = [1, 5, 4, 10, 0, 3];

for (let item of arr) {
    console.log(item);
    if (item === 10) break;
}

// Task 02
console.log('Задача №2')

const arr2 = [1, 5, 4, 10, 0, 3];
//Вариант 1
let index = arr2.findIndex((item) => item == 4);
console.log(`4 находится по индексу ${index}`);
//Вариант 2
for (let index = 0; index < arr.length; index++)
    if (arr2[index] === 4) break;
console.log(`4 находится по индексу ${index}`);


//Task 03
console.log('Задача №3')
const arr3 = [1, 3, 5, 10, 20]
console.log(arr3.join(' '));

//Task 04
console.log('Задание 4');
let res = [];

for (let i = 0; i < 3; i++) {
    let subArr = [];
    for (let j = 0; j < 3; j++)
        subArr[j] = 1;
    res[i] = subArr;
}
console.log(res);

//Task 05
console.log('Задание 5');
let arr5 = [1, 1, 1];
arr5.push(...[2, 2, 2]);
console.log(arr5);

//Task 06
console.log('Задание 6');
let arr6 = [9, 8, 7, 'a', 6, 5];
arr6 = arr6.sort().filter((item) => !isNaN(item));
console.log(arr6);

//Task 07
console.log('Задание 7');
let arr7 = [9, 8, 7, 6, 5];
let userNum = Number(prompt("Угадайте число"));
if (arr7.includes(userNum))
    alert("Угадали");
else alert("Не угадали");

//Task 08
console.log('Задание 8');
let str07 = 'abcdef';
console.log(str07);
console.log(str07.split('').reverse().join(''));

//Task 09
console.log('Задание 9');
const arr9 = [[1, 2, 3], [4, 5, 6]];
let arr9_1 = arr9[0].concat(arr9[1]);
console.log(arr9_1);

//Task 10
console.log('Задание 10');
const arr10 = []
for (let i = 10 + Math.round(Math.random() * 10); i >= 0; i--)
    arr10[i] = Math.round(Math.random() * 10) + 1;
console.log(arr10);

for (let i = 0; i < arr10.length - 1; i++)
    console.log(arr10[i] + arr10[i + 1]);


//Task 11
console.log('Задание 11');

function ArraySquare(arr) {
    //Два варианта, очень похожие, не забывать return во втором
    let result = arr.map(item => item ** 2);
    let result2 = arr.map((item) => { return item ** 2 });
    return result;
}

console.log(ArraySquare([2, 4, 6, 8, 10]));

//Task 12
console.log('Задание 12');

function stringLength(words) {
    return words.map(item => item.length());
}

console.log(ArraySquare(["Q", "QW", "QWE", "QWER", "QWERT", "QWERTY"]));

//Task 13
console.log('Задание 13');

function ArrayFilterLess(arr, value) {
    return arr.filter(item => item < value);
}

console.log(ArrayFilterLess([1, 2, 3, -4, -5, 6, 7, -8, -9], 0));

//Task 13
console.log('Задание 13');

function ArrayFilterLess(arr, value) {
    return arr.filter(item => item < value);
}

console.log(ArrayFilterLess([1, 2, 3, -4, -5, 6, 7, -8, -9], 0));


//Task 14
console.log('Задание 14');
const arr14 = [];
for (let i = 0; i < 10; i++)
    arr14[i] = Math.round(Math.random() * 10);
console.log(arr14);

console.log(arr14.filter(item => item % 2 == 0));


//Task 15
console.log('Задание 15');

const arr15 = [];
for (let i = 0; i < 6; i++)
    arr15[i] = Math.round(Math.random() * 10);
//let sum = arr15.reduce((total, item) => total + item, 0);
const sum = arr15.reduce((total, number) => total + number, 0);
console.log(arr15);
console.log(`Среднее арифметическое равно ${sum / arr15.length}`);




///Spread test
console.log('Интересно, что будет передаваться в функцию ')

const sumArray = (a, b, c, ...er) => {
    console.log(a, b, c);
    console.log(er)
    return a + b + c;
}



//Task game #2
function Game02() {
    while (true) {
        let exp = GetNextExpression();
        let userAnswer = prompt(`Чему равен результат  выражение ${exp.expression} `);
        if (isNaN(userAnswer) || userAnswer == null)
            break;
        if (exp.result === Number(userAnswer))
            alert("Верно")
        else alert("Не верно")
    }
}

console.log(sumArray(...arr));
console.log(Math.max(...arr));

console.log(GetNextExpression());
console.log(GetNextExpression());
console.log(GetNextExpression());
console.log(GetNextExpression());
console.log(GetNextExpression());
console.log(GetNextExpression());

function GetNextExpression() {
    let a = Math.round(Math.random() * 30);
    let b = Math.round(Math.random() * 30);
    let oper = Math.round(Math.random() * 4) - 1;
    let result = 0;
    let expression = "";

    switch (oper) {
        case 0:
            result = a + b;
            expression = `${a} + ${b}`;
            break;
        case 1:
            result = a - b;
            expression = `${a} - ${b}`;
            break;
        case 2:
            result = a * b;
            expression = `${a} * ${b}`;
            break;
        case 3:
            result = a;
            expression = `${a * b} / ${b}`;
            break;
    }

    let res = { expression: expression, result: result };
    return res;
}
