return 0;
//Task 01
let password = 'пароль';
let userPassword = prompt("Введите пароль");
if (password === userPassword) {
    alert("Пароль введен верно");
}
else {
    alert("Пароль введен неправильно");
}
//Task 02
let c = 4;
CheckValue(4);
CheckValue(-3);
CheckValue(10);
CheckValue(15);


function CheckValue(cv) {
    if ((cv > 0) && (cv < 10)) {
        console.log("T02 Верно")
    }
    else { console.log("T02 Неверно") }
}

//Task 03
let d = 56;
let e = 200;
if ((d > 100) || (e > 100))
    console.log("T03 Верно")
//Task 04

let a = '2';
let b = '3';
// Код выше изменять менять нельзя. Чтобы решить задачу исправьте код ниже:
alert(Number(a) + Number(b));

//Task 05
PeriodOfYear(1);
PeriodOfYear(2);
PeriodOfYear(3);
PeriodOfYear(4);
PeriodOfYear(5);
PeriodOfYear(6);
PeriodOfYear(9);
PeriodOfYear(12);
PeriodOfYear(13);
PeriodOfYear(-4);

function PeriodOfYear(monthNumber) {
    let PeriodOfYear;
    switch (monthNumber) {
        case 1:
        case 2:
        case 12:
            PeriodOfYear = "Зима";
            break;
        case 3:
        case 4:
        case 5:
            PeriodOfYear = "Весна";
            break;
        case 6:
        case 7:
        case 8:
            PeriodOfYear = "Лето";
            break;
        case 9:
        case 10:
        case 11:
            PeriodOfYear = "Осень";
            break;
        default:
            PeriodOfYear = "Ошибка";
    }
    console.log(PeriodOfYear);
}