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
//         // count +=1                                  // увеличить на 1 ( то же, что  count = count +1  или count++)
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

// ================================ Вывести элементы в обратном порядке ==============================
//  let str = 0
//  let arr3 = [ "agagag ", "hello", 5, -10, "hihi", true, "byebye", false, 8, 9,["hi", true, 8, "="]]
// for (let i= arr3.length- 1; i >= 0; i--){
//     console.log (i)
//     console.log (arr3[i])
// }