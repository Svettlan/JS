// ==================Массивы/Array (упорядоченная коллекция данных)
// //------------- Объявляем пустой массив: ----------------
// const array = []
// //----- или так:------
// const arr = new Array()
// // ---------------Один массив может содержать элементы разных типов:------------
// const arrayAll = [1,-2,'33', 'strawberry', [1,'second'], null, {type: 'int'}]


// console.log(arrayAll[0])                            // обращение к нулевому элементу массива
// console.log(arrayAll[arrayAll.length - 1])          // обращение к последнему элементу массива
// console.log(arrayAll[4])                            //обращение к 4 элементу(массиву) => [ 1, 'second' ]
// console.log(arrayAll[4][1])                         // => 'second'


// const arrB = [8, ,5, ,9]
// console.log(arrB[1])                               // undefined
// console.log(arrB)                                  //-?


// //----------------- Можем перезаписывать элементы массива даже если массив объявлен с const-----------------------
// arrB[3] = 3
// console.log(arrB)
// // ----------------- или расширять массив: (но так лучше не делать!)
// arrB[8] = 0
// console.log(arrB)                                //[ 8, <1 empty item>, 5, 3, 9, <3 empty items>, 0 ]
// console.log(arrB.length)                         // 9


// const arr1 = [1, 2, 3, 4, 5]
// arr1.length = 2
// console.log(arr1)                                // [ 1, 2 ]
// arr1.length = 5
// console.log(arr1)                                // [ 1, 2, <3 empty items> ]
// arr1.length = 0
// console.log(arr1)                                //[]


// Не сравнивайте массивы с помощью ==
// const arrNum1 = [1, 2]
// const arrNum2 = [1, 2]
// console.log(arrNum1 == arrNum2)       // false
// console.log([] == [])                 // false


// const arrNumClone = arrNum1
// console.log(arrNumClone == arrNum1)   // true
// console.log(null == undefined)        // true


//--------------  !! Два объекта равны друг другу == только в том случае, если они ссылаются на один и тот же объект!!--------------------
// ---------------- За исключением null и undefined, которые равны == друг другу и ничему больше.---------------------


//=======================================   for loop ================================
// const arrayNumbers = [1, 2, -5, 10]
// let sum = 0
// for(let i = 0; i < arrayNumbers.length; i++) {
//     sum += arrayNumbers[i]
// }
// console.log(sum)


// const arrayStr = ["Apple", "Water", "School", "Ocean"]
// let strResult = ''
// let wordsLength = 5
// for (let i = 0; i < arrayStr.length; i++) {
//     if (arrayStr[i].length == wordsLength) {
//         strResult += `${arrayStr[i]} `
//     }
// }
// console.log(strResult)  // "Apple Water Ocean"


// const numbers1 = [0, 2, 5]
// const numbers2 = [0, 2, 5]
// // console.log(numbers1 == numbers2); // false


// let flag = true
// for(let i = 0; i < numbers1.length; i++) {
//     if(numbers1[i] != numbers2[i]) {
//         flag = false
//         console.log('numbers1 != numbers2')
//         break
//     }
// }
// if(flag == true) {
//     console.log('numbers1 = numbers2')  
// }

