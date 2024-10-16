return 0;
//Задание 1
//Преобразовать строку в верхний регистр.
console.log("Задание №1");

let str = 'Однажды в суровую зимнюю';
let strUp = str.toUpperCase();
console.log(`Было ${str}`);
console.log(`Стало ${strUp}`);

//Задание 2
//Создать функцию, которая принимает массив строк и строку.
//Функция должна вернуть новый массив, содержащий только те
// элементы первого массива, которые начинаются со второй строки.
//Регистр символов не влияет на результат.
console.log("Задание №2");

function arrayStingFilter(arrayStr, filetStr) {

    filetStr = filetStr.toLocaleLowerCase();
    return arrayStr.filter((item) => { return item.toLocaleLowerCase().indexOf(filetStr) == 0; });
}

let arrStr = ['qwer', 'GWedRT', 'dfg', 'gfd'];
console.log(arrStr);
arrRes1 = arrayStingFilter(arrStr, 'Df');
console.log(arrRes1);

arrRes1 = arrayStingFilter(arrStr, 'gW');
console.log(arrRes1);



console.log("Задание №3");
let flo = 32.58884;
console.log(Math.round(flo));
console.log(Math.floor(flo));
console.log(Math.ceil(flo));

console.log("Задание №4");

console.log(`Минимальное значение : ${Math.min(52, 53, 49, 77, 21, 32)}`);
console.log(`Максимальное значение : ${Math.max(52, 53, 49, 77, 21, 32)}`);

console.log("Задание №5");
function WriteRound() {
    console.log(Math.ceil(Math.random() * 10));
}

for (let i = 0; i < 10; i++)
    WriteRound();

console.log("Задание №6");
function RandomArray(maxValue) {
    let result = [];
    for (let i = 0; i < maxValue / 2; i++)
        result[i] = Math.floor(Math.random() * (maxValue + 1));
    return result;
}
console.log(RandomArray(10));


console.log("Задание №7");
function WriteRound2(fromVal, toVal) {
    console.log(Math.floor(Math.random() * (toVal - fromVal + 1)) + fromVal);
}

for (let i = 0; i < 10; i++)
    WriteRound2(20, 40);

console.log("Задание №8");

const currentDate = new Date();
const options = {
    weekday: 'long', year: 'numeric', month: 'long',
    day: 'numeric'
};
console.log(currentDate.toLocaleDateString('ru-RU', options));

console.log("Задание №9");
currentDate.setDate(currentDate.getDay() + 73);

console.log(`Через 73 дня будет ${currentDate.toLocaleDateString('ru-RU', options)}`);

console.log("Задание №10");