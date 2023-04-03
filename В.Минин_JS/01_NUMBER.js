// ===================================================== NUMBER =====================================================
// о
// const num = 42             // integer  - целое число
// const float = 42.42        // float - число с точкой
// const pow = 10e3           // 10 в 3й степени
// // console.log (num)
// // console.log (float)
// // console.log (typeof num)
// // console.log (typeof float)
// // console.log (typeof pow)
// // console.log (Number.MAX_SAFE_INTEGER)   // мах число = 2^53 -1 (2 в 53 степени минус 1)
// // console.log (Math.pow ( 2, 53)-1)
// console.log (Number.MIN_SAFE_INTEGER)   // MIN число
// console.log  (Number.MAX_VALUE)         // MAX допустимое чиссло
// console.log  (Number.MIN_VALUE)         // MIN допустимое чиссло
// console.log (Number.POSITIVE_INFINITY)  // Позитивная бесконечность
// console.log (Number.NEGATIVE_INFINITY)  // Негативная бесконечность
// -------------------------------------------------------------------------
// console.log (Number.NaN)                // Not a Number специальное значение, кот. является числом, но переводится- не число
// const weird = 2 / undefined             //  Получить бесконечность можно разделив число на ноль
// console.log (isNaN(weird))              // Проверить является ли число weird  NaN
// console.log (Number.isFinite(Infinity)) // Функция для проверки является ли бесконечность бесконечностью

// const stringInt = '42'
// const stringFloat = '42.42'
// //  --------------------- Варианты преобразовать строку в число --------------------
// console.log (Number.parseInt(stringInt))  
// console.log (parseInt(stringInt) + 2)    
// console.log (Number(stringInt) + 2)
// console.log (+stringInt + 2)                  // Пребразовать в число строку и к числу прибавить 2

// console.log (parseFloat(stringFloat)  + 2)    // Преобразовать Float в число
// // ----------------------------------------------------------------------------
// console.log (0.2 + 0.4)                            // Ожидается: 0.6  Фактически 0.600000000001
// console.log (+ (0.2 + 0.4).toFixed(1))             // Метод отсекает количество знаков после запятой (1)- в данном случае, но оставляет строку
// console.log (parseFloat((0.2 + 0.4).toFixed(1)))   // Строку преобразует в число

// ======================================================= BigInt ==========================================================
// console.log (typeof 9000006498765445554444444444445n)
// console.log ( -9000006498765445554444444444445n)                 // отрицательный   BigInt

// ========================================================= Math ==========================================================
// ========== Объект Math - это объект, позволяющий взаимодействовать с различными математическими операциями ==============
// console.log (Math.E)                          // Константа экспонента
// console.log (Math.PI)                         //  Константа число Пи 3,14
// --------- Методы в Math ---------
// console.log (Math.sqrt(25))               // Корень квадратный
// console.log (Math.pow( 5, 3))             // Возвести в степень
// console.log (Math.abs(-42))                   // Модуль от числа
// console.log (Math.max(42, 12, 23, 11, 422 ))     // Максимальное число из списка
// console.log (Math.min(42, 12, 23, 11, 422 ))     // Минимальное число из списка
// console.log (Math.floor(4.9))                    // Округление в меньшую сторону
// console.log (Math.ceil(4.9))                     // Округление в большую сторону

// console.log (Math.random())                      // Выдает некое рандомное число

//  ================================================== Example ============================================
function getRandomBetween (min, max){
    return Math.floor(Math.random() * (max - min + 1) + min)
}
console.log(getRandomBetween(10, 42))
