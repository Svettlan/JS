// const arr = [1, 2, 3, 4, 5]
// console.log (arr)

// // length
// console.log (arr.length)

// // index 
// console.log (arr[1])

// // обращение к последнему элементу массива
// // last element 
// console.log(arr[ arr.length - 1])

// console.log(arr.at(-1))

// // ============================================ 
// // СЛОЖЕНИЕ МАССИВОВ 
// const arrayFruit = ['apple', 'kiwi']
// const arrayVegetables =['potato', 'onion']

// const bag = [ ...arrayFruit, ...arrayVegetables] // оператор, с помощью кот.можно развернуть массивы
// // console.log(bag)

// // ================================================= 
// // =============== МЕТОДЫ МАССИВОВ ================
// // ---------------- метод .pop()---------------

const arrNums = [1, 2, 3, 4, 5, 6]
// console.log(arrNums)

// arrNums.pop()                 // убирает последний элемент массива

// const lastEl = arrNums.pop()  // выдает последний элемент (для каких-либо действий)
// console.log(lastEl);
// console.log(arrNums)

// // -------------------- метод shift -----------------
// // удаляет первый элемент массива
// arrNums.shift()
// console.log(arrNums)
// const lastEl = arrNums.shift()   // показывает какой элемент удален, хранится в переменной lastEl
// console.log(lastEl);

// // ------------------- метод push -------------------
// //добавляет элементы в конец массива
// arrNums.push(7, 8, 9, 10)
// console.log(arrNums)

// // ------------------- метод unshift -------------------
// // добавляет элементы в начало массива
// arrNums.unshift (-1, 0)
// console.log(arrNums)

//------------------------------------------------------
// for (let i=0; i< arrNums.length; i++){
//     console.log (arrNums[i])
// }
for (let item of arrNums){
        console.log (item)
 }
//------------------------------------------------------
console.log (...arrNums)   // выводит элементы массива в строку
//------------------------------------------------------
arrNums [3] = 10           //заменить конкретный элемент массива
