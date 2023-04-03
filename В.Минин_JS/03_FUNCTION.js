// =========================================== ФУНКЦИИ ========================================
// ------------------ Function Declaration ----------------
//  Можно декларировать функцию в любом месте
// function greet1(name1){
//     console.log ('Привет - ', name1 )
// }
// //  ------------------- Function Expression ----------------
// const greet2 = function greet2(name1){
//     console.log ('Привет 2 - ', name1 )
// }
// greet1('Лена')
// greet2('Лена')

// -------------------------------------------------------------
// console.log(typeof greet)             // Посмотреть тип данных функции greet
// console.dir(greet)                    // Посмотреть, что из себя представляет функция - объект

// ------------------------------- Анонимные функции -------------------------------  
// Данный пример выводит числа от 1 до 5 через каждую секунду
// let counter = 0
// const interval =  setInterval(function(){
//     if (counter === 5){
//         clearInterval(interval)
//     } else{
//         console.log(++counter)
//     }   
//  }, 1000)

// ------------------------------ Стрелочные функции ------------------------------
// function greet1(name1){
//   console.log ('Привет - ', name1 )                          // 1 вариант
// }
// const arrow = (name1) => {
//     console.log ('Привет - ', name1 )                        // 2 вариант
// }
// const arrow2 = name1 => console.log ('Привет - ', name1)        // 3 вариант
// arrow2 ('Svetlan')
 
// // ------------------------------ Параметры по умолчанию ---------------------------
// // const sum = (a, b) => a + b
// const sum1 = (a = 41, b = 23) => a + b    // Если в console.log не прописана цифра, то она берется по умолчанию из const sum 
// console.log (sum1(41, 23))
// // -----------------------------------
// const sum = (a = 40, b = a * 2) => a + b
// console.log(sum(41, 4))
// console.log(sum())
// //------------------------------------
// function sumAll(...all) {
//     let result = 0
//     for (let num of all) {
//     result += num
// } return result
// }
// const res = sumAll(1, 2, 3, 4, 5)
// console.log(res)

// ----------------------------------------- Замыкания ---------------------------------
function createMember(name1){
    return function(lastName){
        console.log(name1 + lastName)
    }
}
const logWithLastName = createMember('Svetlan')
console.log(logWithLastName(tr))
console.log(logWithLastName(TR))


