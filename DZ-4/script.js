// Objects
// Complete exercise
// NORMAL level
// Task 1 💻

// Выполните каждый из следующих пунктов отдельной строкой:

//     Создайте пустой объект profile (используйте const);
//     Добавьте в него свойство name со значением John;
//     Добавьте в него свойство #lib_internal_isAdmin со значением true;
//     Измените значение name с John на Фёдор;
//     Удалите свойство #lib_internal_isAdmin;


const profile = {}

profile.name = 'John'

profile['#lib_internal_isAdmin'] = true

profile.name = 'Фёдор'

delete profile['#lib_internal_isAdmin']

console.log(profile)

// Task 2 🖥

// Дан обьект:

const colors = {
    'ru pum pu ru rum': {
        red: 'красный',
        green: 'зеленый',
        blue: 'синий'
    },
};

// Вывести в консоль слово красный

console.log(colors['ru pum pu ru rum'].red)

// Task 3 🖥

// Дан обьект:

    const student = {
        name: 'John',
        age: 19,
        isHappy: true
    }

// C помощью цикла for in вывести в консоль сначала все пары ключ-значение в объекте.

//     name - John age - 19 isHappy - true

for (let key in student) {
    console.log(`${key} - ${student[key]}`)
}

// Task 4 🖥

// Дан обьект:

    let salaries = {
        andrey: 500,
        sveta: 413,
        anton: 987,
        alex: 664,
        alexandra: 199
    }

// Вычислите среднюю зарплату сотрудников

    let sum = 0

    for (let key in salaries) {
        sum += salaries[key]
    }

    console.log(sum)

// Task 5 🖥

// Напишите функцию isEmpty(), которая вернёт true, если переданный в неё объект пуст (не содержит свойств).

function isEmpty(obj) {
    for (let key in obj) {
        return false
    }
    return true
}

console.log(isEmpty({})); // true
console.log(isEmpty({ lol: "kek" })); // false

// Task 6 🖥

// У нас есть обьект с животными. Наша задача узнать имя птицы и вывести его в консоль. 
// Но произошла ошибка и в этом обьекте нету птицы. Если попробуем узнать имя мы получим ОШИБКУ. 
// Задача придумать как обратиться к несуществующему обьекту и не получить ошибку чтобы наша программа работала дальше.

const animals = {
   cat: {
      name: 'Енчик',
      age: 3,
   },
   dog: {
      name: 'Орео',
      age: 2,
   },
}

console.log(animals && animals.bird && animals.bird.name);


// Task 7 🖥

// Опишите по пунктам, как отработает этот код? Важно ответить на вопрос, что будет записано в this и почему?

function makeProfile() {
  return {
    name: "John",
    self: this
  };
}

let user = makeProfile();

console.log(user.self.name); // Каким будет результат?

// 1) Функция создается, но не вызывается
// 2) переменная user записывает результат вызова функции
// 3) функция возвращает name и self, self в свою очередь хранит значение this из контекста вызова
// 4) функцию вызываем вне объекта, а внутри глобальной области, где свойства name попросту нет
// 5) Будет выведено undefined или... <empty string> ??


// Task 8 🖥

// Создайте объект счётчик counter, в котором будет записано значение изначально равное 0. В counter должен быть метод showCurrent(), который будет выводить в консоль текущее значение. Также в объекте должно быть два метода для уменьшения и увеличения значения:

const counter = {
    value: 0,
    showCurrent() {
        console.log(this.value);
    },
    increment() {
        this.value++;
    },
    decrement() {
        this.value--;
    }
}

counter.showCurrent(); // 0 - вывод в консоль
counter.increment();
counter.increment();
counter.showCurrent(); // 2
counter.decrement();
counter.showCurrent(); // 1


// Task 9 🖥

// Дополните код так, чтобы можно было составить цепочку вызовов: counter.showCurrent().increment().increment().showCurrent().decrement().showCurrent();


const counterB = {
    value: 0,
    showCurrent() {
        console.log(this.value);
        return this;
    },
    increment() {
        this.value++;
        return this;
    },
    decrement() {
        this.value--;
        return this;
    }
}

counterB.showCurrent().increment().increment().showCurrent().decrement().showCurrent();


// Task 10 🖥

// Сделайте функцию-конструктор Counter(), которая сможет создавать счётчики из заданий 8-9:


function Counter() {
    this.value = 0;

    this.showCurrent = function() {
        console.log(this.value);
        return this;
    };

    this.increment = function() {
        this.value++;
        return this;
    };

    this.decrement = function() {
        this.value--;
        return this;
    };
}


const counter1 = new Counter();
const counter2 = new Counter();

counter2.increment();
counter2.showCurrent(); // 1
counter1.showCurrent(); // 0


