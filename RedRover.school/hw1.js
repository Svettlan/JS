//============1.1 Объявите две переменные: firstName и lastName.=====================================================

let firstName
let lastName

//============= 1.2 Передайте значение “John”в переменную firstName и значение “Adams”  в переменную lastName.=============

firstName = "John";
lastName = "Adams";

 //============1.3 Выведите на страницу значение firstName и lastName (должно показать John Adams).===========================

document.write(firstName,' ', lastName +'<br>')

  //===========1.4 Используйте те же переменные (перезапишите) firstName и lastName для того, чтобы вывести новое значение (Anna Karenina).=================================================

firstName ="Anna";
lastName = "Karenina";
document.write (firstName,' ', lastName +'<br>'+'<br>');

//=============В итоге на экране должно быть две строки:
//John Adams
//Anna Karenina===============================================

//=============2 Выведите в консоль тип данных следующих переменных:====================================================
  let a                                                     
  let c = 9                                               
  let str = "Hi 5!"                                  
  let b = true                                            
  let y = 9 + "1 "                                        
  let x =  "a" / 6                                             

console.log(a)
console.log(c)
console.log(str)
console.log(b)
console.log(y)
console.log(x)

   console.log(typeof a)
   console.log(typeof c)
   console.log(typeof str)
   console.log(typeof b)
   console.log(typeof y)
   console.log(typeof x )           


document.write(a+'<br>')
document.write(c+'<br>')
document.write(str+'<br>')
document.write(b+'<br>')
document.write(y+'<br>')
document.write(x+'<br>'+'<br>')

//=============3 Подумайте, какие переменные логично объявить через const. Придумайте 3 разных,  объявите их и  выведите на экран=======================================================
const yearOfBirth = 1977
const pow = 10e3
const num = 42
console.log(yearOfBirth)
console.log(pow)
console.log(num)

//Креативное задание*:
// 1.5 Напишите пошаговый алгоритм приготовления кофе и выведите его на экран (страницу).
//Желательно пронумеровать шаги. Каждый шаг должен быть выведен с новой строки  *\\

// Рецепт приготовления кофе в турке:
// 1.Прокалить турку на огне
// 2.Засыпать сахар по вкусу
// 3.Влить холодную воду
// 4.Поставить турку на маленький огонь
// 5.Не допускать, чтобы напиток вскипел
// 6.В готовый кофе добавить сливки.
// Ваш кофе готов!

let add 
add = "сливки"
add = "молоко"

// document.write("Рецепт приготовления кофе в турке:"+'<br>'+'<br>')
// document.write("1.Прокалить турку на огне"+'<br>')
// document.write("2.Засыпать сахар по вкусу"+'<br>')
// document.write("3.Влить холодную воду"+'<br>')
// document.write("4.Поставить турку на маленький огонь"+'<br>')
// document.write("5.Не допускать, чтобы напиток вскипел"+'<br>')
// document.write(`6.В готовый кофе добавить ${add}` +'<br>')
// document.write("Ваш кофе готов!"+'<br>'+'<br>')

let coffeeRecipe = "Рецепт приготовления кофе в турке:"

let step1 = '1.Прокалить турку на огне'
let step2 = "2.Засыпать сахар по вкусу"
let step3 = "3.Влить холодную воду"
let step4 = "4.Поставить турку на маленький огонь"
let step5 = "5.Не допускать, чтобы напиток вскипел"
let step6 = `6.В готовый кофе добавить ${add}`
let step7 = "Ваш кофе готов!"
// document.write( coffeeRecipe +'<br>'+'<br>'+ step1 +'<br>'+step2 +'<br>'+ step3 +'<br>' + step4 +'<br>'+ step5 +'<br>'+ step6 +'<br>'+ step7)
console.log ( coffeeRecipe)
console.log(step1)
console.log(step2)
console.log(step3 )
console.log(step4) 
console.log(step5)
console.log(step6) 
console.log(step7)

// console.log (step7)

//===============Review 1 homework from Tatiana Volk=========================

//====== Задача 1 Напишите формулу, которая вычисляет BMI (Body Mass Index), 
//  BMI = вес (кг)/ рост (м) в квадрате. Напечатайте результат в консоли. Выведите вместе сo своим именем на страницу=================================

let weight = 55
let growth = 152
let square = 2
let bmi1 = weight/growth
let bmi = bmi1**square
console.log(bmi)
// document.write(`Svetlana Tr bmi = ${bmi}`)

// ======================== Задача 2 Создайте две переменные с любыми значениями. 
// ====================== Напишите программу, которая поменяет эти значения местами. Update. 
// ===================== То же задание с числовыми переменными. Будет ли разница? ==========================================

// let hello = 'Hello world!'
// let message =  "Hi"
// let temp

// console.log(hello)
// console.log(message)

// temp = hello
// hello = message
// message = temp

// console.log(hello)
// console.log(message)

let hello = 5
let message = 9
let temp

console.log(hello)
console.log(message)

temp = hello
hello = message
message = temp

console.log(hello)
console.log(message)