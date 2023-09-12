// ====================== Напишите программу калькулятора со switch, обработайте возможные ошибки ввода =========================
// let a 
// let b
// let operator
// a = 9
// b = 3
// operator = "-"

// switch (operator){
//     case "+": 
//         console.log (a + b)
//         break
//     case  "-":
//         console.log (a - b)
//         break
//     case "*": 
//         console.log (a * b)
//         break
//     case "/": 
//         if (b != 0){
//             console.log (a / b)
            
//         }
//         else {
//             console.log("На 0 делить нельзя")
//         }
//      break
//     default:
//         console.log("Пожалуйста выберите оператор")

// }

// // ====================== Попробуйте внедрить в свою программу с кофе вложенный if =================================
let water
let coffeeName

let ingredient1
let ingredient2
let ingredient3
let ingredient4
let ingredient5
let ingredient6
let cupSize
let smallCup
let mediumCup
let bigCup
let price
let finalPrice 

// cupSize = small, medium, big
// water = hot //cold
// coffeeName = espresso // latte
price = 100
smallCup = 1
mediumCup = 1.5
bigCup = 2
ingredient1 = "кофе молотый"
ingredient2 = "сахарный сироп"
ingredient3 = "веточка свежей мяты"
ingredient4 = "молоко"
ingredient5 = "ванильный сироп"
ingredient6 = "кубики льда"

// coffeeName = prompt("Выберите названиие кофе")//, espresso, latte
// coffeeName = "latte"
coffeeName = "espresso"
if (coffeeName == "espresso"){
    console.log ("Ваш кофе espresso")
    console.log ("Ингредиенты:")
    console.log ("1.", ingredient1)
    console.log ("2.", ingredient2)
    console.log ("3.", ingredient3)
    console.log ("4.", ingredient3)
}
else if(coffeeName == "latte") {
    console.log ("Выберите температуру воды")
    if (water =="hot"){
        console.log("Ваш кофе latte hot")
        console.log ("Ингедиенты:")
        console.log("1.", ingredient1)
        console.log ("2.", ingredient4)
        console.log ("3.", ingredient5)
        
    }
    else if (water == "cold"){
        console.log("Ваш кофе latte cold")
        console.log ("Ингредиенты:")
        console.log("1.", ingredient1)
        console.log ("2.", ingredient4)
        console.log ("3.", ingredient5)
        console.log ("4.", ingredient6)
    }
    else{
         console.log("Введите корректное значение")
    }
}
// water =="hot"
cupSize = "medium"
if (cupSize =="small"){
     finalPrice = price * smallCup
        console.log ("стоимость = ",finalPrice )}
    else if (cupSize == "medium"){
        finalPrice = price * mediumCup
        console.log ("стоимость = ",finalPrice )}
    else if  (cupSize == "big"){
        finalPrice = price * bigCup
        console.log ("стоимость = ",finalPrice )}
    else {
        console.log("Введите корректный размер стаканчика")
}

// ======================= При помощи цикла for выведите чётные числа от 2 до 10  =================================
// let arr = [2, 3, 4, 5, 6, 7, 8, 9, 10]
// for (i = 1; i< 10; i++){
//     if (arr[i]%2 == 0){
//         console.log (arr[i])
//     }
// }
// ======================== Задача с интервью
// У вас есть массив со скобками, предположим 
// [ ‘(‘, ‘)’, ‘(‘, ‘)’, ‘)’] . Количество элементов и последовательность может быть разной.
// Нужно выяснить, у каждой ли скобки есть соответствующая пара (открывающая и закрывающая).========================
// let arr = ['(', ')', '(', ')', ')', '{'] 
// let sum1 = 0
// let sum2 = 0
// for (i=0; i < arr.length; i ++){
//     if (arr[i] == '(')
//         sum1 += 1
//      else if (arr[i] == ')')
//             sum2 += 1
//      else 
//             console.log ('Неверный формат')
// }
// console.log ('sum1 = ', sum1)
// console.log ('sum2 = ', sum2)
// if (sum1 != sum2)    
//    console.log ('присутствуют непарные элементы')
// ====================================================================================================================

// Имеется зашифрованное предложение 
// “Ybrobrubr brabrrbrebr brtbrhbrebr brbbrebrsbrtbr brQbrAbr brebrvbrebrrbr”
// оно означает “You are the best QA ever”.
// нужно придумать программу дешифратор.

// // coder
// let text = 'You are the best QA ever'
// let newText = ''
// for (let i = 0; i < text.length; i++){
//        newText = newText + text[i] + "br"   
// }
// onsole.log(newText)

// // decoder

// let decoderResult = ''
// for (let i = 0; i< newText.length; i += 3){
//     decoderResult = decoderResult + newText[i]
// }
// console.log (decoderResult)
// ================================================================================


   
