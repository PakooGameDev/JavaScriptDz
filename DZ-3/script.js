// Task 1 💻

const getSum = (lastIndex = 100) => {
    let sum = 0;
    for (let i = 0; i <= lastIndex; i++) {
        sum += i;
    }
    return sum;
}

console.log(getSum());


// Task 2 💻

const getAccruedAmount = (initialAmount) => {
    const percent = 17 / 100;
    const years = 5;
    return initialAmount * (1 + percent * years);  // наращение по методу простых процентов
}

console.log(getAccruedAmount(10000));


// Task 3 💻

const getSumThree = (a, b) => {
    let sum = 0;
    if (a > b) {
        let temp = a;
        a = b;
        b = temp;
    }
    for (let i = a; i <= b; i++) {
        sum += i 
    }
    return sum;
}

//     getSum(1, 0) == 1   // 1 + 0 = 1
//     getSum(1, 2) == 3   // 1 + 2 = 3
//     getSum(0, 1) == 1   // 0 + 1 = 1
//     getSum(1, 1) == 1   // 1 Since both are same
//     getSum(-1, 0) == -1 // -1 + 0 = -1
//     getSum(-1, 2) == 2  // -1 + 0 + 1 + 2 = 2

console.log(getSumThree(-1, 2));

// Task 4 💻

const fooboo = (bool, foo, boo) => {
    if (bool) {
        foo();
    } else {
        boo();
    }
}

function foo() {
    console.log('foo');
}

function boo() {
    console.log('boo');
}

fooboo(false, foo, boo);


// Task 5 💻

const withNumberArgs = (func) => {
    return (a, b) => {                     
        if (typeof a !== 'number' || typeof b !== 'number') {
            console.error('Types of arguments must be numbers');
            return 0;
        }
        return func(a, b);
    }
}

const mul = (a, b) => a * b;

const safeMul = withNumberArgs(mul);

console.log(safeMul(5, 5));
console.log(safeMul(5, "5"));


//ADVANCED
// Task 1 👨‍🏫

const checkTriangle = (a, b, c) => {
    if (a + b <= c || a + c <= b || b + c <= a) {
        return false;
    }
    return true;
}

console.log(checkTriangle(3, 4, 5));


// Task 2 👨‍🏫

// задаем константы и переменные

const TAX = 0.2; // НДС 
const PHONE_COST = 415.12 || Number(prompt('Введите стоимость телефона'));
const ADDON_COST = 32.1 || Number(prompt('Введите стоимость аддонов'));

let balance = 1200 || Number(prompt('Введите свой баланс'));

console.log(`Баланс: ${balance}`);

// рассчитываем корзину

function getCost(...args) {
    let itemsCost = 0;
    for (let i = 0; i < args.length; i++) {
        itemsCost += args[i];
    }
    return itemsCost;
}

// Гуляем на все! Рассчитываем стоимост ьмаксимально допустимого числа товаров

function getFinalCost(card, callback) {
    let total = 0;
    while (total + card < balance) {
        total += card;
    }
    console.log(`Общая сумма: ${total}`);;
    return callback(total); // рассчитываем налог или сразу выводим результат с помощью колбэков
}

// колбэк-функция для расчета налогов

function calculateTax(sum){
    return sum += (sum * TAX);
}

// выводим форматированный результат

function showReslut(result) {
    console.log(`Итого к оплате с НДС 20%: ${finFormat(result)}`);
}

// функция для форматирования числа

function finFormat(number){
    return `${Math.round(number * 100) / 100}$`;
}

// проверяем

const CARD_COST = getCost(PHONE_COST, ADDON_COST); 
let res = getFinalCost(CARD_COST, calculateTax);

showReslut(res);

if (balance < res) {
    console.log(`Недостаточно средств: ${finFormat(res - balance)}`);
} else {
    console.log(`Товары оплачены. Остаток на счете: ${finFormat(balance - res)}`);
}


// Task 3 👨‍🏫 - дополнительно
/*
    Ваша задача - разбить плитку шоколада заданного размера n x m на маленькие квадраты. Каждый квадрат имеет размер 1x1 и не может быть разбит. 
    Реализуйте функцию, которая будет возвращать минимальное количество необходимых надломов.
    Например, если вам дается плитка шоколада размером 2 x 1, вы можете разделить ее на отдельные квадраты всего за один надлом, 
    но для размера 3 x 1 вы должны сделать два надлома.
    Если входные данные недействительны, вы должны вернуть 0 (поскольку надломы не требуются, если у нас нет шоколада для разделения). 
    Ввод всегда будет неотрицательным целым числом.
*/

// Это задание чем-то похоже на реализацию алгоритма quadtree

const getSquare = (n, m) => {   
    //или так
    if (n > 0 && m > 0) {
        let square = [n, m];
        let piece = 0;
    
        for (let i = 0; i < square.length; i++) {
            piece += square[i] - 1;
        }
        return piece;
    }
    return 0;
}

console.log(getSquare(-2, 1)); // o
console.log(getSquare(1, 1)); // 0
console.log(getSquare(2, 1)); // 1
console.log(getSquare(2, 2)); // 2
console.log(getSquare(3, 2)); // 3