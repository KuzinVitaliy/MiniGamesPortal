//return 0;
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
//Дата: [число][месяц на русском][год] — это[день недели на русском].
//Время: [часы]: [минуты]: [секунды]
function GetFormattedDate(date) {
    let res = FormatDateTime(date, 'Дата: dd MMMM yyyy - это день dddd. Время: hh:mm:ss');
    return res;
}

console.log(GetFormattedDate(new Date()));


function GetDigital(value, dig) {
    return value.toString().padStart(dig, '0');
}

function FormatDateTime(date, format, locale = 'ru-RU') {
    //#region Год
    if (format.indexOf('yyyyy') >= 0)
        format = format.replace('yyyyy', GetDigital(date.getFullYear(), 5));
    if (format.indexOf('yyyy') >= 0)
        format = format.replace('yyyy', GetDigital(date.getFullYear(), 4));
    if (format.indexOf('yy') >= 0)
        format = format.replace('yy', GetDigital(date.getFullYear() % 100, 2));
    //#endregion

    //#region День
    if (format.indexOf('dddd') >= 0) {
        const options = { weekday: 'long' };
        let mSts = date.toLocaleDateString(locale, options);
        format = format.replace('dddd', mSts);
    }
    if (format.indexOf('ddd') >= 0) {
        const options = { weekday: 'short' };
        let mSts = date.toLocaleDateString(locale, options);
        format = format.replace('ddd', mSts);
    }

    if (format.indexOf('dd') >= 0)
        format = format.replace('dd', GetDigital(date.getDay(), 2));

    if (format.indexOf('d') >= 0)
        format = format.replace('d', date.getDay());
    //#endregion

    //#region Месяц
    if (format.indexOf('MMMM') >= 0) {
        const options = { month: 'long' };
        let mSts = date.toLocaleDateString(locale, options);
        format = format.replace('MMMM', mSts);
    }
    if (format.indexOf('MMM') >= 0) {
        const options = { month: 'short' };
        let mSts = date.toLocaleDateString(locale, options);
        format = format.replace('MMM', mSts);
    }
    if (format.indexOf('MM') >= 0)
        format = format.replace('MM', GetDigital(date.getMonth(), 2));
    if (format.indexOf('M') >= 0)
        format = format.replace('M', date.getMonth());
    //#endregion

    //#region Часы
    if (format.indexOf('hh') >= 0)
        format = format.replace('hh', GetDigital(date.getHours(), 2));
    if (format.indexOf('h') >= 0)
        format = format.replace('h', date.getHours());
    //#endregion

    //#region Минуты
    if (format.indexOf('mm') >= 0)
        format = format.replace('mm', GetDigital(date.getMinutes(), 2));
    if (format.indexOf('m') >= 0)
        format = format.replace('m', date.getMinutes());
    //#endregion

    //#region Секунды
    if (format.indexOf('ss') >= 0)
        format = format.replace('ss', GetDigital(date.getSeconds(), 2));
    if (format.indexOf('s') >= 0)
        format = format.replace('s', date.getSeconds());
    //#endregion
    return format;
}

console.log(FormatDateTime(new Date(), 'dd/MM/yyyy hh:mm:ss ddd'));
console.log(FormatDateTime(new Date(), 'd/M/yyyy hh:mm:ss ddd'));
console.log(FormatDateTime(new Date(), 'dd-MMM-yyyy hh:mm:ss dddd'));
console.log(FormatDateTime(new Date(), 'd-MMMM-yyyy hh:mm:ss dddd'));
console.log(FormatDateTime(new Date(), 'd-MMMM-yy hh:mm:ss dddd'));