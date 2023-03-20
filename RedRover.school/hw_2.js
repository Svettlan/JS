// =========1.1 Напишите программу по согласованию отпуска в зависимости от месяца. 
//==========Если месяц “July” или “August”, то программа должна показать - ‘approved’, 
// =============если другие месяцы, то - “denied”.====================================

// let month
// // month = prompt("Select month for holiday")
// if (month === "July" || month ==="August"){
//     // alert("vacation approved")
//     // document.write("vacation approved" );
//     console.log ("vacation approved")
// }
// else {
//     // alert("vacation denied")
//     // document.write("vacation denied");
//     console.log ("vacation denied")
// }

// =========== Напишите простенький калькулятор (*, /, +, -). 
// =========== Проверьте ваш код на охват исключений для арифметических операций.
// =========== У вас должны быть две переменные для исходных чисел и одна для оператора. 
// ============ В зависимости от оператора, должно происходить то или иное арифметическое действие и 
// ============ выводиться результат в консоль. ============================================================

// let a
// let b
// let operator
// a=12
// b=0
// operator = "/"

// if (operator === "+"){
//     console.log ("a + b =", a + b)
//     console.log (typeof( operator))
// }
// else if (operator === "-"){
//     console.log ("a - b =", a - b)
//  }  
// else if (operator === "*"){
//     console.log("a * b =", a * b)
// }
// else if (operator = "/" && b!=0){
//     console.log ("a / b =", a / b)
// }
// else {
//     console.log ("На 0 делить нельзя!")
// }
    
 
// ============= Решите задачу с помощью пройденных тем:
// ============= «Улитка ползёт вверх по стене высотой 5 метров. 
// =============Каждый день она проползает вверх на 3 метра, а каждую ночь съезжает вниз на 2 метра.
// ============= За сколько дней она доползёт до вершины стены.» ===============================
 
// let forward 
// let back 
// let height 
// let time
// let progress

// forward = 3
// back = 2
// height = 5
// time = 0
// progress = forward

// if (progress <= height){
//     progress -= back
//     progress += forward
//     time++
// }
// if (progress <= height){
//     progress -= back
//     progress += forward
//     time++
// }
// if (progress <= height){
//     progress -= back
//     progress += forward  
//     time++     
// }

// if (progress <= height){
//     progress -= back
//     progress += forward 
//     time++      
// }
    
// if (progress <= height){
//         progress -= back
//         progress += forward
//         time++       
//     }
// if (progress <= height){
//         progress -= back
//         progress += forward
//         time++       
//  }
// else 
//         console.log (time )
//         console.log("финиш")


// ====================================== 2.1 Напишите следующую программу: ==========================================
// - У клиента должен быть выбор из двух(или трех) видов кофе ( на ваш выбор).
// - Дайте названия вашим видам кофе.
// - Установите цену на кофе в зависимости от величины стаканчика( small, medium, big).
// - Выведите на экран название, затем рецепт выбранного кофе (используйте переменные для изменения рецепта и названия) и его стоимость (в зависимости от размера стаканчика). 
// - Компоненты кофе не влияют на стоимость.
// - Используйте подходящую комбинацию условий if, (else if), else для решения задачи.

// 2.2 Нарисуйте блок-схему вашей программы (так проще будет написать саму программу).
// Можете использовать следующий сайт https://miro.com/app/board или от руки

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
    















// ==============================     Д/З от Татьяны Волк   =====================================
//  ================    Напишите программу для расчета стоимости билетов.
// ================== Для пассажиров старше 18 лет- полная цена, для младенцев младше 2 лет - 10% стоимости, 
// ================для детей от 2-х до 18ти лет - 50 % стоимости, для пенсионеров старше 65 лет - 60% стоимости=================

// let age 
// let price
 
// // age = prompt("Введите Ваш возраст")
// age = 25;
// price =100
// if (age >= 18 && age < 65){ 
//     console.log(price +' руб');
// }
// else if (age < 2){
//     console.log(price * 0.1 +' руб');
// }
// else if (age>=2 &&  age < 18){
//     console.log(price * 0.5 +' руб');
// }
// else {
//     console.log (price * 0.6 +' руб')
// }