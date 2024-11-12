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
