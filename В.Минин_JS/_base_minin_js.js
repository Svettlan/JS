// ДОКУМЕНТАЦИЯ JS - MDN

// 1. ПЕРЕМЕННЫЕ
// Присвоить переменную
// var name ='Светлана'             //устарело  
// const lastName ='Tr'             //не изменная
// // let age = 45 

// // Типы данных
// let firstName ='Светлана'       // string - строка
// // let age = 45                 // number - число
// let     =true                   // boolean - true/false 

// const _='private'
// const $='some value'
// //const if ='mkef'              //err переменной if быть не может
// //const 5withNum = 5            //err переменная не может начинаться с цифры
// const withNum5 = 5              // цифра может быть в конце назв.переменной

// //2. МУТИРОВАНИЕ
// // console.log ('Имя человека: ' + firstName + ', а возраст человека:' + age)      //сконкотенировали строку с переменными, вывели в консоль
// // alert('Имя человека: ' + firstName + ', а возраст человека:' + age)             // вывели в всплывающем окне

// // const lastName = prompt (message: 'Введите фамилию')
// // alert (firstName + ' ' + lastName)

// // 3. ОПЕРАТОРЫ
// // const currentYear = 2023
// const birthYear = 1977
// const age = currentYear - birthYear
// console.log (age)

// const a = 10
// const b = 5

// console.log(a + b)
// console.log(a - b)
// console.log(a * b)
// console.log(a / b)
// let currentYear = 2023
// // console.log(currentYear++)        //выведет 2023, но к след прибавит 1
// console.log(++currentYear)           //выведет 2024 (прибавит к 2023)
// console.log(--currentYear)           // выведет 2023 (вычтет из предыдущего 1)

// let c = 32
// // c = c + a
// c+=a
// c-=a
// c*=a
// c/=a
// console.log(c)

// 4. ТИПЫ ДАННЫХ
// const isProgrammer = true
// const name = 'Svetlana'
// const age = 45
// let x
// null                              //null
// console.log(typeof isProgrammer)  // boolean
// console.log(typeof name)          // string
// console.log(typeof age)           // number
// console.log(typeof x)             // undefined

// 5. ПРИОРИТЕТ ОПЕРАТОРОВ
// const fullAge = 45
// const birthYear = 1977
// const currentYear = 2023
// const isFullAge = currentYear - birthYear >= fullAge   // 46 >= 45 true
// console.log (isFullAge)

// 6. УСЛОВНЫЕ ОПЕРАТОРЫ
// const courseStatus = 'pending'  //reade, fail, pending
// const courseStatus = 'reade'
// if (courseStatus === 'reade'){
//     console.log('Курс уже готов и его можно проходить')
// } else if (courseStatus === 'pending'){
//     console.log('Курс пока находится в процессе разработки')
// } else {console.log ('Курс не найден')
// }

// const isReady = true

// if (isReady === true){
//     console.log('Все готово!')             //Тоже самое, что и 
// }
// if (isReady){
//     console.log('Все готово!')
// }

// const isReady = false
// if (isReady){
//         console.log('Все готово!')
// }
// else {console.log ('Все не готово')
// }                                        //То же самое, что и 
// // Тернарное выражение
// isReady ? console.log('Все готово!') : console.log ('Все не готово')

// const num1 = 42   // number
// const num2 = '42' // string
// console.log (num1 == num2)               // приведение к одному типу данных
// console.log (num1 === num2)              // сравнение

// 7. БУЛЕВАЯ ЛОГИКА  ========================================================
// Логическое "И" (&&)
// true && true        // true
// true && false       // false
// false && true       // false
// false && false      // false
// // Логическое "ИЛИ"  (||)
// true || true     // true
// true || false    // true
// false || true    // true
// false || false   // false
// // Логическое "НЕ" (!)
// true         // true
// !true        // false
// !!true       // true  

//  8. ФУНКЦИИ ================================================================
// function calculateAge(year) {
//     return 2023 -year 
// }
// const myAge = calculateAge (1977)
// console.log(myAge)                           // то же самое
// console.log(calculateAge (1977))

// console.log(calculateAge (1993))
// console.log(calculateAge (1987))

// function logInfoAbout (name, year){
//     const age = calculateAge(year)
//     if (age > 0){ 
//         console.log ('Человек по имени ' + name + 'имеет возраст ' + age)
//     } else {
//         console.log ('неверные данные')
//     }
// }
// logInfoAbout (name = 'Светлана ', year = 1977)
// logInfoAbout (name = 'Елена ', year = 1993)
// logInfoAbout (name = 'Марфа ', year = 2024)

//  9.МАССИВЫ
// const cars=['мазда', 'форд', 'опель' ]
// console.log (cars)
// console.log (cars[1])                        // Смотреть какие индексы хранятся в массиве
// console.log (cars.length)                    // Узнать длину массива
// cars[1] = 'порш'                             // Заменить элемент в массиве
// console.log (cars)
// console.log (typeof cars)                    // Посмотреть тип данных
// cars[3] = ' форд'                            // Добавить элемент в массив
// console.log (cars)

// 10. ЦИКЛЫ
// const cars=['мазда', 'форд', 'опель' ]
// for (let i = 0; i < cars.length; i++){           // Для переменной i от нуля до длины массива прибавляем на 1
//     const cars = cars[i]
//     console.log (cars)
// }
// for (let car of cars){                              // упрощенный вариант в новых версиях
//     console.log (cars)
// }

// 11.ОБЪЕКТЫ
const person = {
    firstName : 'Светлана',
    lastName : 'Tr',
    age : 45,
    year : 1977,
    avto : ['Ford', 'Hyundai']
    hasMan : true
}
// console.log(person.firstName)                    // вывести что-то конкретное из массива
// console.log(person['lastName'])                  // то же самое, что и выше
const key = "avto"                                  // получить динамический ключ
console.log(person[key]) 
person.hasWife = false                              // изменть ключь в объекте
console.log(person)
person.isProgrammer = true                          // добавить новый ключ
person.greet()






