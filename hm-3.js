
//Task03/01

let k = 100;
iterations = 0;

while (k >= 0) {
    k -= 7;
    iterations++;
}
console.log(k, iterations);

//Task 03/02
for (let i = 1; i < 6; i++) {
    console.log(i);
}

//Task 03/03
for (let i = 7; i <= 22; i++) {
    console.log(i);
}
//Task 03/04
let sel = {
    "Коля": 200,
    "Вася": 300,
    "Петя": 400,
}

let totalSel = 0;
for (let i in sel) {
    console.log(`Сотрудник ${i} - зарплата ${sel[i]}`)
    totalSel += sel[i];
}
console.log(`Всего ${totalSel}`);

//Task 03/05
let n = 1000; num = 0;
while (n >= 50) {
    n /= 2;
    num++;
}
console.log(n, num);

//Task 03/06
let firstFriday = 3;
do {
    console.log(`Сегодня пятница, ${firstFriday}-e число`);
    firstFriday += 7;
} while (firstFriday <= 31)

let months = ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август'];
//Task 03/07
let i = 1;
for (let month in months) {
    console.log(`${months[month]} - ${i}`);
    i++;
}
//Task 03/08
let ints = [3, 6, 8, 1, -23, 4, 56, 34, 54, 62, 2, -7, 4];

let min = Number.MAX_VALUE;
let max = Number.MIN_VALUE;
for (let i in ints) {
    if (ints[i] < min)
        min = ints[i];
    if (ints[i] > max)
        max = ints[i];
}
console.log(`Min = ${min} Max = ${max}`);





