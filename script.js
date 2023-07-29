// NORMAL level
// Task 1 💻

// Создайте переменные, затем сложите их и выведите результат в консоль разработчика.

const X = 20;
const Y = 58;
const Z = 42;

//База
console.log(X + Y + Z);

//Рубрика "ЭКСПЕРИМЕНТЫ"

function sum(...args) {
    return args.reduce((sum, current) => sum + current);
}

console.log(sum(X, Y, Z));


// Task 2 💻
// Создайте константы:
// - количество секунд в минуте
// - количество минут в часу
// - количество часов в сутках
// - количество суток в году 

// Посчитайте ваш возраст в секундах и поместите результат в переменную myAgeInSeconds
const SEC_IN_MIN = 60;
const MIN_IN_HOUR = 60;
const HOURS_IN_DAY = 24;
const DAYS_IN_YEAR = 365;

let myAgeInSeconds =  CalculateAgeInSec(21);
console.log(myAgeInSeconds);

  function CalculateAgeInSec(age) {
    if (age !== undefined && age !== NaN && age !== null && age > 0) {
        return age * DAYS_IN_YEAR * HOURS_IN_DAY * MIN_IN_HOUR * SEC_IN_MIN;
    } else {
        console.log("smth went wrong")
    }
    return age;
  }
  

// Task 3 💻
// Создайте две переменные. Поместите в них переменную count и превратите в строку, а userName наоборот в число. Попробуйте реализовать задачу двумя разными способами.
    let count = 42
    let userName = '42'

    // 1 способ
    console.log(typeof(String(count)));
    console.log(typeof(Number(userName)));
    // 2 способ
    console.log(typeof(count + "")); 
    console.log(typeof(userName * 1));



// Task 4 💻
// Создать 3 переменные разных типов и вывести в консоль для каждой из них строку следующего вида:
// `Variable value: %variable value% has type: %type variable%`

const STRING_VAR = 'Some string';
const INTEGER_VAR = 21;
const BOOL_VAR = false;


console.log(`Variable value: ${STRING_VAR} has type: ${typeof(STRING_VAR)}`);
console.log(`Variable value: ${INTEGER_VAR} has type: ${typeof(INTEGER_VAR)}`);
console.log(`Variable value: ${BOOL_VAR} has type: ${typeof(BOOL_VAR)}`);

// Task 5 💻
// Запросить у пользователя имя и возраст и вывести их в консоль.

let USER = {  // если сделать объект константой, то его тоже можно изменить - прикольно
    Name: '',
    Age: 1,
};

function GetUserData(){
    let data = prompt('Введите имя и возраст через запятую, пожалуйста').replace(/ /g, '').split(',');
    USER.Name = data[0];
    USER.Age = data[1];
    return USER;
}

console.log(GetUserData());



// ADVANCED level
// Task 1 👨‍🏫

// Поменяйте значение переменных местами не создавая дополнительной переменной:

// МОЙ ВАРИАНТ
    // let a = 4
    // let b = 3

    // a = a+b;
    // b = a-b;
    // a = a-b;

    // console.log(a, b)


//МАГИЯ ВНЕ ХОГВОРТСА
    let a = 4;
    let b = 3;
    
    [a,b] = [b,a];
    
    console.log(a,b);