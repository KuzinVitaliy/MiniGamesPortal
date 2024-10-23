//goto label;


console.log("Задание №1");
const people = [
    { name: 'Глеб', age: 29 },
    { name: 'Анна', age: 17 },
    { name: 'Олег', age: 7 },
    { name: 'Оксана', age: 47 }
];

console.log(people.sort((item1, item2) => { return item1.age < item2.age ? (item1.age == item2.age ? 0 : -1) : 1; }));

console.log("Задание №2");

function isPositive(a) {
    return a > 0;
}

function isMale(people) {
    return people.gender == 'male';
}

function filter(arr, rule) {
    result = [];
    for (item of arr)
        if (rule(item))
            result.push(item);
    return result;
}

console.log(filter([3, -4, 1, 9], isPositive));

const people2 = [
    { name: 'Глеб', gender: 'male' },
    { name: 'Анна', gender: 'female' },
    { name: 'Олег', gender: 'male' },
    { name: 'Оксана', gender: 'female' }
];

console.log(filter(people2, isMale));

console.log("Задание №3");

const interval = setInterval((deadline) => { console.log(new Date()); }, 3 * 1000);

setTimeout(() => { clearInterval(interval); }, 30 * 1000);

console.log("Задание №4");
function delayForSecond(callback) {
    setTimeout(() => { callback(); }, 5 * 1000);

}

delayForSecond(function () {
    console.log('Привет, Глеб!');
})


console.log("Задание №5");
// Функция delayForSecond через 1 секунду пишет в консоль 
// «Прошла одна секунда», а затем вызывает переданный колбэк
function delayForSecond(cb) {
    setTimeout(() => {
        console.log('Прошла одна секунда');
        if (cb) { cb(); }
    }, 1000)
}

// Функция sayHi выводит в консоль приветствие для указанного имени
function sayHi(name) {
    console.log(`Привет, ${name}!`);
}

// Код выше менять нельзя

// Нужно изменить код ниже:
delayForSecond(() => sayHi('Глеб'));