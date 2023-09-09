    //=================================== SWITCH =================================
// switch (expression){
//     case x:
//         //code block;
//         break;
//     case y:
//         //code block;
//         break;
//     default:
//          //code block;
// }

// =========================STRING - длина строки, индекс буквы =========================
// let phrase = "Hello world!";  // 1-12  количество символов
// let spase = "";
// // phrase.length
// console.log (phrase.length);
// console.log (spase.length);
// // index:
// //  "Hello world!" 0-11 количество символов от 0
// //   01234----1011
// // length - считает количество символов
// //  index - считает с 0

// // string.toLowerCase() - вывести все символы маленькими
// console.log (phrase.toLowerCase())
// // string.toUpperCase(); - вывести все символы большими
// console.log(phrase.toUpperCase()) 

//  =================================== МАССИВ  Arrays ===========================

// ======================== Массив - упорядоченная  коллекция данных ===================
// ------------------------ Обьявление массива  -----------------------------
// const ngArr = []            // - 1й вариант
// const arr = new Array()     // - 2й вариант

// в arr элементы отделяются  " , " 
// в arr могут содержаться :
            //   - цифры
            //   - строки
            //   - пустой массив 
            //   - null
            //   - массив 
            //   - undefiend
            //   - true / false

// =================================  Обращение к массивам =======================================
// // arr [index]              // - индексы начинаются с 0
// // arr.length.              // - длина массива
// // arr[arr.length-1]        // - принимает с 0 положительные индексы
// // arr.at(index)            // - принимает отрицательные индексы

// const letters = ['a','b','c','d','e','f','g'];
// //  index :       0   1   2   3   4   5   6
// //  or :                         -3  -2  -1   - отсчет с конца массива

// console.log(diffTypes.length);    // количество элементов всего
// console.log(letters[0]);
// console.log(letters[letters.length-1]);   // 7-1 =6
// console.log(letters.at(-2)                // ' f ' значение

// ============================= Обращение к несуществующему элементу в массиве ====================
//  ответ- undefiend


/* for (initializator; condition; step()){
        инициализация   условие    шаги
        loop body
}
    for( начало; условие; ifu){
        тело цикла 
    }
*/
//  начало let i=0 выпоолняется 1 раз при входе в цикл
//  условие i < 3 проверяется перед каждой иттерцией цикла
//      Если оно вычислится в false, цикл остановится
//      Тело console.log(i) выполняется снова и снова, пока условие вычисляется в true.addEventListener('type', listener, options)
//  Шаг i++ выполняется после тела цикла на каждой итерации перед проверкой условия

// for (let i=0;i<=3; i++){
    // console.log(i);
// }
// for(let i=0; i<=3; i++){
    // console.log(i)
// }

// ==================  ДЛЯ ДОМАШКИ ===================

// let str1="=/"; // repeat 7
// let newStr = " ";
//     for (let i=0; i<7; i++){     //0 1 2 3 4 5 6 
//         newStr=newStr + str1;
//         console.log(newStr)
//     }




// let arr = [ "a ", "hello", 5, -10, "0", true, "-", false, 8, 9,["hi", true, 8, "="]]
//          //  0       1     2    3   4     5     6    7    8   9       10
// let str = " Привет, как тебя зовут?"  
// // console.log(arr.length)   
// let count = 0     
// let sum = 0  
// for (let i=0; i < arr.length ; i++ ){
//     // console.log (arr[i])               // (arr[i]) - текущий элемент массива
//     // console.log (i)                    // (i)  - индекс элемета в массиве
//     // console.log (typeof arr[i])
//     if(typeof arr[i] == "number"){                 // посчитать сколько чисел в массиве
//         // count +=1                               //увеличить на 1 ( то же, что  count = count +1  или count++)
//         sum += arr[i]
//         // console.log(sum)
//     }
// }
// // console.log (count)
// console.log(sum)

// ================== Вывести элементы, которые находятся по четному индексу =====================
// let arr1 = [ "a ", "hello", 15, -10, "0", true, "-", false, 18, 19,["hi", true, 8, "="]]
//          //  0       1     2    3   4     5     6    7    8   9       10
//          for (let i=0; i < arr1.length ; i++ )   {
//             if (i% 2 ===0) {                     // четные индексы
//                 console.log (arr1[i])
//             } 
//             else{
//                 console.log ("index=", i)
//             }                         
//          }   

       
//============================= Если текущий элемент является строкой, сложите все в одно предложение ======================  
// let arr2 = [ "agagag ", "hello", 5, -10, "hi", true, "bye", false, 8, 9,["hi", true, 8, "="]]
// //          //  0       1     2    3   4     5     6    7    8   9       10         
// let str1 =" ";
// for (let i=0; i < arr2.length ; i++ ){
//     if(typeof arr2[i] === "string"){
//         // console.log (arr2[i])
//         str1 += arr2[i] + " "
//         // console.log(arr2[i].length)                         // вывести длины строковых значений в массиве
//         if (arr2[i].length >3){
//             console.log(arr2[i]) 
//         }
                              
//     }
//     // else {
        
//     // }
// }
// // console.log(str1)

// // ================================ Вывести элементы в обратном порядке ==============================
//  let str = 0
//  let arr3 = [ "agagag ", "hello", 5, -10, "hihi", true, "byebye", false, 8, 9,["hi", true, 8, "="]]
// for (let i= arr3.length- 1; i >= 0; i--){
//     console.log (i)
//     console.log (arr3[i])
// }

// // ==================================== ТЕРНАРНЫЙ (условный) оператор может использоваться в любом месте кода ==================
// let num1
// let nam2
// console.log(num2==0 ? 'Not validnum2' : num1/num2);
// //       если выполн.усл, то ^ это, если false,то^

// // =========================================== Обращение к последнему элементу массива ===========================================================
// str.length   // - длина
// console.log (myArr[myArr.length-1])    // то же,что и =>
// console.log (myArr.at(-1))

// ======================================== Существует 3 вида циклов =====================================
let str = 'Hello';
//         01234
// console.log(str[0]);
// console.log(str[1]);
// console.log(str[2]);
// console.log(str[3]);
// console.log(str[4]);
let index = 0;

// // ============= 1 вид ===============
// while (index < str.length){
//     console.log(str[index]);
//     index++
// }
// console.log('End')
// ============= 2 вид ================ Условие выполняется хотя бы 1 раз
do {
    console.log(index);
    index++;
} while (index <= 5)
console.log('End') 
// ============= 3 вид =================
for (let index = 0; index <= 5; index++){
    console.log(index);
}
console.log ('End')

 
