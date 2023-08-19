// Complete exercise
// NORMAL level
// Disclaimer

// Важно: циклы for, for in, for of под запретом! Исключение составляют задачи, где использование явно требуется по условию.
// Task 1 🖥

// Выведите в консоль длину массива.

const colors = ['red', 'green', 'blue']
console.log(colors.length)

// Task 2 🖥

// Дан массив:

const animals = ['monkey', 'dog', 'cat']

// Выведите в консоль его последний элемент вне зависимости от его длинны.

console.log(animals[animals.length-1])

// Task 3 🖥

// Удалите все элементы в массиве numbers = [5, 43, 63, 23, 90] двумя способами - через метод массива и через свойство, выведите в консоль полученный результат. 


const numbers = [5, 43, 63, 23, 90];

numbers.length = 0;

// numbers = [];                     // не отработает из-за const

// numbers.splice(0,numbers.length)

// while(numbers.length > 0){
//     numbers.pop();
// };


console.log(numbers.length);


// Task 4 🖥

// Дан массив:

    const students = ['Polina', 'Dasha', 'Masha']

// Используя только методы массива, сделайте следующее:

//     Удалите последний элемент массива, затем вместо него добавьте в массив студента Borya.
students[students.length - 1] = 'Borya' // лайфхак
students.pop();
students.push('Borya')

//     Удалите первый элемент массива, затем вместо него добавьте в массив студента Andrey.
students.shift();
students.unshift('Borya')

console.log(students)

//     Полученный результат не забудьте вывести в консоль.

// Task 5 🖥

// Дан массив:

    const cats = ['Gachito', 'Tom', 'Batman']

// Выведите в консоль все элементы массива. Сначала через цикл for, затем for of, а затем через forEach()

for (let i = 0; i < cats.length; i++) {
    console.log(cats[i])
}

for (const cat of cats) {
    console.log(cat)
}

cats.forEach(cat =>  console.log(cat))

// Task 6 🖥

    const evenNumbers = [2, 4, 6, 8, 10]
    const oddNumbers = [1, 3, 5, 7, 9]

//     Соедините два массива чисел в один.
//     Соедините массив двумя способами - через метод и через spread

const allNums = evenNumbers.concat(oddNumbers);
const allNumsSpread = [...evenNumbers, ...oddNumbers];


console.log(allNumsSpread)

//     В полученном массиве попробуйте найти индекс числа 8

console.log(allNumsSpread.findIndex((num => num === 8)))   // O(n), судя по всему

// кастомный бинарный поиск

function binarySearch(sortedArray, key){
    let firstPos = 0;
    let endPos = sortedArray.length - 1;

    while (firstPos <= endPos) {
        let middle = Math.floor((firstPos + endPos) / 2); // находим ключевую для поиска точку в массиве, а именно - середину

        if (sortedArray[middle] === key) {    // если она совпала с искомым - выводим
            return middle;
        } else if (sortedArray[middle] < key) {   // а дальше в зависимости от условия проверяем либо левую, либо правую часть отсортированного массива по тому же принципу
            firstPos = middle + 1; 
        } else {
            endPos = middle - 1;
        }
    }
    // а тут печалька - искомого попросту нет
    return -1;
}

let sortedArray = allNumsSpread.sort((a, b) => a > b)

console.log(sortedArray)

console.log(binarySearch(sortedArray, 8)); // O(log n), что гораздо лучше, если искомое не в самом начале списка, а массив большой

// Task 7 🖥

// Дан массив:

// Превратите данный массив в строку.

//     [0, 0, 0, 0] -> '0101010'


const binary = [0, 0, 0, 0]

const str = binary.join('1')

console.log(str)


// Task 8 🖥

// Есть массив профилей:

const profiles = [
  {
    name: 'John',
    data: {
      friends: {
        count: 25,
        list: []
      },
    }
  },
  {
    name: 'Mariam',
    data: {
      friends: {
        count: 1,
        list: []
      },
    }
  },
  {
    name: 'Boris',
    data: {
      friends: {
        count: 5,
        list: []
      }
    },
    blocked: true,
  },
  
  {
    name: 'Alice',
    data: null,
  },
]

// Создайте новый массив, в котором будут только незаблокированные профили в которых есть данные (data), профили должны быть отсортированы по убыванию лайков.

let arr = profiles.filter(profile => profile.blocked === false || profile.blocked === undefined || profile.blocked === null);

arr.sort((profileA, profileB) => profileA.name < profileB.name)

console.log(arr)

// Task 9 🖥

// Реализуйте функцию которая будет проверять, является ли слово палиндромом.

function isPalindrome(str) {
    
    let arr = str.split('');
    arr.reverse();
    let newStr = arr.join('');
    
    return newStr === str;
}

console.log(isPalindrome('топот'))


// Task 10 🖥

//     Выведите в консоль среднее значение чисел в многомерном массиве.

const matrix = [
    [12, 98, 78, 65, 23],
    [54, 76, 98, 43, 65],
    [13, 324, 65, 312],
    [9092, 22, 45, 90000],
]

function findAverage(matrix) {
    const newArr = matrix.reduce((acc, elem) => [...acc, ...elem])
    const arrLength = newArr.length
    return newArr.reduce((acc,elem) => acc + elem) / arrLength   // наверняка есть вариант оптимальнее... может быть с двумя циклами for, а может сначала найти средние для каждого элемента, а потом их сумму уже разделить...
}

console.log(findAverage(matrix));


// Task 11 🖥

// Дан массив:

   const mixedNumbers = [-14, 24, -89, 43, 0 , -1, 412, 4];

// За один проход, создайте два массива. 
// В один поместите все положительные числа включая 0, в другой все отрицательные. 
// Оба массива затем выведите в консоль. 
// Ожидается решение через reduce().


// ожидался, конечно, редус...но это пришло в голову сходу
function getSplitMapped(arr = []) {
    let arrNegative = [];
    let arrPositive = [];
    arr.map((elem) => elem >= 0 ? arrNegative.push(elem) : arrPositive.push(elem)) 

    return [arrNegative, arrPositive]
}

// допер с подсказками, потому что забыл про то, что reduce возвращает массив, который и можно в деконструктор запихать
function getSplitReduced(arr = []) {
    return arr.reduce((acc, elem) => {
        elem >= 0 ? acc[0].push(elem) : acc[1].push(elem); 
        return acc;
    },  [[], []]);
}

   const [positive, negative] = getSplitReduced(mixedNumbers); 

   console.log(positive); // [24, 43, 0, 412, 4]
   console.log(negative); // [-14, -89, -1]

// Task 12 🖥

// Создайте функцию fromKebabToCamelCase(val):

// fromKebabToCamelCase("kebab-case") == 'kebabCase';
// fromKebabToCamelCase("-webkit-appearance") == 'WebkitAppearance';
// fromKebabToCamelCase("use-style-decorator") == 'useStyleDecorator';


function fromKebabToCamelCase(val) {
    const words = val.split('-');
    return words[0] + words.slice(1).map(word => word.charAt(0).toUpperCase() + word.slice(1)).join('');
}

console.log(fromKebabToCamelCase("-webkit-appearance"));
