// ====================== Напишите программу калькулятора со switch, обработайте возможные ошибки ввода =========================
let a 
let b
let operator
a = 9
b = 3
operator = "-"

switch (operator){
    case "+": 
        console.log (a + b)
        break
    case  "-":
        console.log (a - b)
        break
    case "*": 
        console.log (a * b)
        break
    case "/": 
        if (b != 0){
            console.log (a / b)
            
        }
        else {
            console.log("На 0 делить нельзя")
        }
     break
    default:
        console.log("Пожалуйста выберите оператор")

}

// ====================== Попробуйте внедрить в свою программу с кофе вложенный if =================================





// ======================= При помощи цикла for выведите чётные числа от 2 до 10  =================================




// ======================== Задача с интервью
// У вас есть массив со скобками, предположим 
// [ ‘(‘, ‘)’, ‘(‘, ‘)’, ‘)’] . Количество элементов и последовательность может быть разной.
// Нужно выяснить, у каждой ли скобки есть соответствующая пара (открывающая и закрывающая).========================
