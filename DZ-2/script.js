// Complete exercise
// NORMAL level
// Task 1 💻

// Написать перебор от 1 до 20, где выведутся все числа кратные трём.

//     Для вычисления кратности обратите внимание на оператор %

for (let i = 0; i < 20; i++) {
    if(i % 3 === 0 && i !== 0) console.log(i);  // кратен ли ноль? дискуссионный вопрос, ведь он кратен вообще всему
}

// Task 2 💻

// Нам надо идти на работу, но нужно проверить все ли мы взяли или нет? Нам точно нужны ключи документы и ручка, но из еды нам надо яблоко или апельсин. 
// Для решения этой задачи нам помогут логические операторы || &&.
//     Ответ поместите в переменную shouldGoToWork

    let key = true
    let documents = true
    let pen = true
    let apple = false
    let orange = true

    let shouldGoToWork = (key && documents && pen) && (apple || orange);

    console.log(shouldGoToWork)

// Task 3 (boolean operators, conditionals)

// Напишите программу, которая спрашивает у пользователя номер года, а затем выводит на экран, високосный ли это год.

    const KIND_OF_YEAR = (yearNumber) => {
        return (yearNumber % 4 === 0) ? "Високосный" : "Не високосный";
    }

    console.log(KIND_OF_YEAR(1024))

// Task 4 💻

// Запросить у пользователя число:

// 1. Если число делится без остатка на 5 выводим сообщение Fiz
// 2. Если число делится без остатка на 3 выводим сообшение Buz
// 3. Если число делится без остатка и на 3 и на 5 выводим сообшение FizBuz

const CHECK_MULTIPLICITY = (number) => {
    if ((number % 5 === 0) && (number % 3 !== 0)) {
        return 'Fiz';
    }
    if ((number % 3 === 0) && (number % 3 !== 0)) {
        return 'Buz';
    }         
    if ((number % 5 === 0) && (number % 3 === 0)) {
        return 'FizBuz';
    }       
    return 'NotFizNorBuz';
}

console.log(CHECK_MULTIPLICITY(15))

// Task 6 💻

// Используя конструкцию switch, напишите программу, которая спрашивает у пользователя номер месяца и года, а затем выводит на экран количество дней в этом месяце.

// Если номер месяца введён неверно - напишите об этом в консоль (можно использовать console.error())

// используйте метод для определения високосного года из задания 3


function CalculateNumOfDays(){
    let EnteredDate = prompt('Введите год и месяц через запятую').trim().split(',');
  
    if (!(EnteredDate[1] > 0 && EnteredDate[1] < 13) && ((EnteredDate[1] !== null ||  EnteredDate[1] !== undefined) || (EnteredDate[0] !== null ||  EnteredDate[0] !== undefined))){
        console.error('Month number is incorrect');
        return -1;
    }

    const Date = {  
        YearNumber: EnteredDate[0],
        MonthNumber:  EnteredDate[1],
    };

    /* 
        if ((Date.MonthNumber === 2)) {
            return KIND_OF_YEAR(Date.YearNumber) === 'Високосный' ? 28 : 29;
        } 
        
        if (Date.MonthNumber > 7) {
            return 30 + Date.MonthNumber + 1 % 2;
        }  else {
            return 30 + Date.MonthNumber % 2;
        }
    */ 

    // а потом я дочитал задание... 
    
    switch (Number(Date.MonthNumber)) {
        case 1:
        case 3:
        case 5:
        case 7:
        case 8:
        case 10:
        case 12:
            return 31;
        case 4:
        case 6:
        case 9:
        case 11:
            return 30;
        case 2:
            return KIND_OF_YEAR(Date.YearNumber) === 'Високосный' ? 28 : 29;
        default:
            console.error('MonthNumber is incorrect')
            return -1;
    } 
}

//console.log(CalculateNumOfDays());

// ADVANCED level
// Task 1 👨‍🏫

// Напишите программу, которая выполняет следующие операции:

//     Запрашивает у пользователя число.
//     Последовательно задает вопрос: cколько отнять / прибавить / умножить / разделить от предыдущего результата?
//     По окончании вывести пользователю alert, содержащий формулу и результат например:

//     ((((6 - 10) + 5) * 20) / 2 = 110)

// Task 2 👨‍🏫

function UpdateFormula(){
    let number = prompt('Please enter a number');
    let formulaArgs = prompt('Введите последовательно вычитаемое, слагаемое, множитель, делитель через запятую').trim().split(',');
    let subscription = formulaArgs[0];
    let addiction = formulaArgs[1];
    let multiplier = formulaArgs[2];
    let division = formulaArgs[3];

    alert( `((((${number} - ${subscription}) + ${addiction}) * ${multiplier}) / ${division}) = ${((((number - subscription) + addiction) * multiplier) / division)}` )
}

//console.log(UpdateFormula())


// Написать программу, которая будет выводить в консоль лесенку.

//     ######
//     #####
//     ####
//     ###
//     ##
//     #

/*let strSharp = '######'

for (let i = 0; i < 6; i++) {
    
    strSharp = strSharp.slice(0, -1)
    console.log(strSharp);
}

*/

//     #
//     ##
//     ###
//     ####
//     #####
//     ######

let strSharp = ''

for (let i = 0; i < 6; i++) {
    
    strSharp += '#'
    console.log(strSharp);
}


// Task 3 👨‍🏫

// Дополните результат задания 6 так, чтобы программа спрашивала пользователя до тех пор, пока он не введёт корректное значение или напишет в окошко prompt() специальное стоп-слово.

//     Вам понадобится бесконечный цикл

    // let i = 0;
    // function listener(){
    //     if (i < 8) {
    //         console.log(i++);
    //         setTimeout(() => {  
    //             listener();
    //         }, 1000);
    //     } 
    // }

    // listener();

function CalculateNumOfDaysImproved(){
    let EnteredDate = prompt('Введите год и месяц через запятую').trim().split(',');
  
    // while (
    //     !(EnteredDate[1] > 0 && EnteredDate[1] < 13) && 
    //     (
    //     (EnteredDate[1] !== null || EnteredDate[1] !== undefined) && 
    //     (EnteredDate[0] !== null  || EnteredDate[0] !== undefined)
    //     )
    // ){
    //     console.log('Month number is incorrect');
    //     EnteredDate = prompt('Введите год и месяц через запятую').trim().split(',');
    // }

    // или

    let listener = () => {
        if ((!(EnteredDate[1] > 0 && EnteredDate[1] < 13) && ((EnteredDate[1] !== null ||  EnteredDate[1] !== undefined) && (EnteredDate[0] !== null ||  EnteredDate[0] !== undefined)))) {
            console.log('Month number is incorrect');
            EnteredDate = prompt('Введите год и месяц через запятую').trim().split(',');
            setTimeout(() => {  
                listener();
            }, 500);
        } 
    }
    listener(); // смущает, что цикл бесконечный и по идее, страница должна зависнуть рано или поздно, ведь все это происходит в основном потоке

    const Date = {  
        YearNumber: EnteredDate[0],
        MonthNumber:  EnteredDate[1],
    };

    switch (Number(Date.MonthNumber)) {
        case 1:
        case 3:
        case 5:
        case 7:
        case 8:
        case 10:
        case 12:
            return 31;
        case 4:
        case 6:
        case 9:
        case 11:
            return 30;
        case 2:
            return KIND_OF_YEAR(Date.YearNumber) === 'Високосный' ? 28 : 29;
        default:
            console.error('MonthNumber is incorrect')
            return -1;
    } 
}

console.log(CalculateNumOfDaysImproved());