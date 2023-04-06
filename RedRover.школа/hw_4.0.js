⁷
// =================== Домашнее задание от Татьяны Волк ===========================
// =================Нарисовать елочку и ромб  с помощью циклов ========================

// let str="*"; // repeat 7
// let newStr = " ";
// let newStr1 = " ";    //arr.at(index) 

//     for (let i=0; i<=7; i++){     //0 1 2 3 4 5 6 
//         newStr= newStr + str;
//              // newStr1=newStr + " "
// //         // newStr1= newStr + " "+ str
// //         // newStr1=newStr + str
// //         // newStr1=newStr + newStr;

//         console.log (newStr, newStr1)
//     }



// ==================  ДЛЯ ДОМАШКИ ===================

// let str3="=/"; // repeat 7
// let newStr3 = " ";
//     for (let i=0; i<7; i++){     //0 1 2 3 4 5 6 
//         newStr3=newStr3 + str3;
//         console.log(newStr3)
//     }

// =======================================================
console.log ('1) ===================================')
let newStr = ' '
for (let i = 1; i <= 5; i++) {
    for (let j = 1; j <= i; j++){
        newStr += j
     }
     newStr += '\n'
}
console.log (newStr)
// -----------------------------------------------------
console.log ('2) ===================================')
let newStr2 = ''
let x = 5
let space = ' '
for (let i = 1; i <= x; i ++){
    newStr2 += space.repeat (x - i)
    for (let j = 1; j <= i; j++){
        newStr2 += j
    }
    newStr2 += '\n'                              // перекидывает на новую строчку
}
console.log(newStr2)
// // ----------------------------------------------------
console.log ('3) ===================================')
let row = ''
for (let i = 1; i <= 5; i++){
    row += i 
    row += '\n'
}
console.log(row)
// // ----------------------------------------------------
// console.log ('4) ===================================')
// let newStr4 = ""
// // let space = ' '
// // let x = 5 
// for (let i = 1; i <= x; i ++){
//     newStr4 += space.repeat(i - 1)
//     for (let j = 1; j <= x + 1 - i; j ++){
//         newStr4 += j
//     }
//       newStr4 += '\n'
// }
// console.log(newStr4)
// // ----------------------------------------------------
console.log ('5) ===================================')
let newStr5 = ''
// let space = ' '
// let x = 5 
for (let i = 1; i <= x; i ++){
    for (let j = x + 1 - i; j >= 1; j--){
        newStr5 += j
    } newStr5 += '\n'
}
console.log(newStr5)
// ---------------------------------------------------------------
console.log ('6) ===================================')
let pyramid = ''
// x = 10
// let space = ' '
for (let i = 1; i <= x; i ++){
    pyramid += space.repeat(x - i)
    for (let j = 1; j <= i; j ++){
        pyramid += j
    } 
    for(let j = i - 1; j >=i; j --){
        pyramid += j 
    }
    pyramid +='\n'
}
console.log(pyramid)
// -----------------------------------------------------------------
console.log ('7) ===================================')
let romb = ''
x = 10   // 5
// let space = ' '
for (let i = 1; i <= x; i++){
    romb += space.repeat(x - i)
    for (let j = 1; j <= i; j ++){
        if (j == 10){                // remove 10 or %10
            romb += 0
        }
        else romb += j
        romb += j
    }
    for (let j = i - 1; j >= 1; j --){   // ? let j = 1; j <= i; j ++
            romb += j
    }
    romb += '\n'
}
x = 9    // 4
for (let i = 1; i <= x; i ++){
    romb += space.repeat(i)                     // i - 1 if x = 5
    for ( let j = 1; j <= x + 1 - i; j ++){
        romb += j
    }
      for (let j = x + 1 - i; j >= 1; j --) {
         romb += j
    }
    romb += '\n'
}
console.log (romb)      //  время видео 13: 50
//----------------------------------
cobsole.log ('8)=======================')
let romb = ""
x=10        //5
Let space = ' '
for ( let i = 1; i <= x; j++){
     romb += space.repeat(x-i)
     for (let j = 1; j <= i; j++){
     // (if (j == 10){
     //     romb += 0
      // }
      else romb += j
      //romb += j
   }
   for (let j= i - 1; j >= 1; j --) { // ? let j = 1; j <= i; j++
     romb += j
   }
   romb += '\n'
//============== Нарисуйте елочку ==========
console.log('--------- Елочка‐-----------'
 



