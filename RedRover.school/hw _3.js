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

// ====================== Попробуйте внедрить в свою программу с кофе вложенный if =================================
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

coffeeName = prompt("Выберите названиие кофе")//, espresso, latte
// coffeeName = "latte"
if (coffeeName == "espresso"){
    document.write ("Ваш кофе espresso" + '<br>')
    document.write("Ингредиенты:" + '<br>')
    document.write("1.", ingredient1  + '<br>')
    document.write ("2.", ingredient2  + '<br>')
    document.write ("3.", ingredient3 +'<br>'+'<br>')

    console.log ("Ваш кофе espresso")
    console.log ("Ингредиенты:")
    console.log ("1.", ingredient1)
    console.log ("2.", ingredient2)
    console.log ("3.", ingredient3)
    console.log ("4.", ingredient3)
}
else if(coffeeName == "latte") {
    console.log ("Выберите температуру воды")
    water = prompt ("Выберите температуру воды")
}
// water =="hot"
if (water =="hot"){
    document.write("Ваш кофе latte hot" + '<br>' + '<br>')
    document.write("Ингредиенты:" + '<br>')
    document.write("1.", ingredient1  + '<br>')
    document.write ("2.", ingredient4  + '<br>')
    document.write ("3.", ingredient5 + '<br>'+ '<br>')

    console.log("Ваш кофе latte hot")
    console.log ("Ингедиенты:")
    console.log("1.", ingredient1)
    console.log ("2.", ingredient4)
    console.log ("3.", ingredient5)
    
}

else if (water == "cold"){
    document.write("Ваш кофе latte cold" + '<br>' + '<br>')
    document.write("Ингредиенты:" + '<br>')
    document.write("1.", ingredient1  + '<br>')
    document.write ("2.", ingredient4  + '<br>')
    document.write ("3.", ingredient5 + '<br>')
    document.write ("4.", ingredient6 + '<br>'+ '<br>')


    console.log("Ваш кофе latte cold")
    console.log ("Ингредиенты:")
    console.log("1.", ingredient1)
    console.log ("2.", ingredient4)
    console.log ("3.", ingredient5)
    console.log ("4.", ingredient6)
}
else{
    document.write("Введите корректное значение")
    console.log("Введите корректное значение")
}


cupSize = prompt ("Выберите размер стаканчика")//, small, medium, big)
// cupSize = "medium"
if (cupSize =="small"){
     finalPrice = price * smallCup
     // alert(finalPrice )
     console.log ("стоимость = ",finalPrice )
     document.write ("стоимость = ", finalPrice )
}
else if (cupSize == "medium"){
    finalPrice = price * mediumCup
    // alert(finalPrice )
    console.log ("стоимость = ",finalPrice )
    document.write ("стоимость = ", finalPrice )
}
else if  (cupSize == "big"){
    finalPrice = price * bigCup
    // alert(finalPrice )
     console.log ("стоимость = ",finalPrice )
     document.write ("стоимость = ", finalPrice )
}
else {
    alert("Введите корректный размер стаканчика")
    document.write("Введите корректный размер стаканчика")
    console.log("Введите корректный размер стаканчика")
}




// ======================= При помощи цикла for выведите чётные числа от 2 до 10  =================================




// ======================== Задача с интервью
// У вас есть массив со скобками, предположим 
// [ ‘(‘, ‘)’, ‘(‘, ‘)’, ‘)’] . Количество элементов и последовательность может быть разной.
// Нужно выяснить, у каждой ли скобки есть соответствующая пара (открывающая и закрывающая).========================







// =================== Домашнее задание от Татьяны Волк ===========================
// =================Нарисовать елочку и ромб  с помощью циклов ========================
// let str1="*"; // repeat 7
// let newStr = " ";
// let newStr1 = " ";    //arr.at(index) 

//     for (let i=0; i<=7; i++){     //0 1 2 3 4 5 6 
//         newStr= newStr + str1;
//         // newStr1=newStr1 + " "
//         // newStr1= newStr1 + " "+ str1
//         // newStr1=newStr1 + str1
//         // newStr1=newStr1 + newStr;

//         console.log (newStr, newStr1)
//     }



// ==================  ДЛЯ ДОМАШКИ ===================

// let str1="=/"; // repeat 7
// let newStr = " ";
//     for (let i=0; i<7; i++){     //0 1 2 3 4 5 6 
//         newStr=newStr + str1;
//         console.log(newStr)
//     }