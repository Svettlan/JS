// Запись в элемент HTML с использованием            innerHTML.
// Запись в вывод HTML с использованием       ?¿document.write().
// Запись в окно оповещения с использованием    window.alert().
// Запись в консоль браузера с использованием   console.log()

//====================  Типы данных  ======================
//    string        строка
//    number        числ.значение
//    boolean   true/false   истина/ложь
//    null          ничего
//    undefined     не определен
//    bigint        большие числовые данные
//    symbol
//    object  -later  объект
//============== Объявить переменную, задекларировать =========
// let a
// var b
// ============= Присвоить значение переменной ===============
// a = 10
//==============  Перенос на следующую строку  ===============
//document.write(a+b+c)
//document.write(a, <br> c, <br> b)
//document.write(a, ,c, ,b)
  
// =============  Операторы || (или)    && (и)    !(не)=============
//===========Приоритет оператора (и) && больше, чем (или) ||, поэтому он выполняется раньше======
// console.log (true || true) ; // true
// console.log (false || true); // true
// console.log (true  || false); //true
// console.log (false || false); // false

// console.log (true && true ); // true
// console.log (false && true); // false
// console.log (true  && false); //false
// console.log (false && false); // false

// ============================== alert() and promt()  ==============================
// alert('Welcome to our site!')
// let inputName = prompt('Plese, enter your name!')
// document.write(`Hello ${inputName}`)

//=====|=============+=====+========×××××================÷÷==============÷=================
//Операнд – то, к чему применяется оператор. Например, в умножении 5 * 2 есть два операнда: левый операнд равен 5, а правый операнд равен 2. Иногда их называют «аргументами» вместо «операндов».
//Унарным называется оператор, который применяется к одному операнду. Например, оператор унарный //минус "-" меняет знак числа на противоположный:

//let x = 1; 
//x = -x;
//alert( x ); // -1, применили унарный минус

//let x = 1;
//y = 3; 
//alert( y - x ); // 2, бинарный минус вычитает значения

//============= Результат a % b – это остаток от целочисленного деления a на b.
//============= Оператор возведения в степень a ** b возводит a в степень b
// alert( 2 ** 2 ); // 2² = 4 
//alert( 2 ** 3 ); // 2³ = 8 
//alert( 2 ** 4 ); // 2⁴ = 16

//alert( 4 ** (1/2) ); // 2 (степень 1/2 эквивалентна взятию квадратного корня) 
//alert( 8 ** (1/3) ); // 2 (степень 1/3 эквивалентна взятию кубического корня)

//=================== Сложение строк при помощи бинарного +  =====================

//Обычно при помощи плюса '+' складывают числа.
//Но если бинарный оператор '+' применить к строкам, то он их объединяет в одну:

//let s = "моя" + "строка";
//alert(s); // моя строка

//alert( '1' + 2 ); // "12"
// alert( 2 + '1' ); // "21"

//alert(2 + 2 + '1' ); // будет "41", а не "221"

//Сложение и преобразование строк — это особенность бинарного плюса +. Другие арифметические операторы работают только с числами и всегда преобразуют операнды в числа.

//alert( 6 - '2' ); // 4, '2' приводится к числу 
//alert( '6' / '2' ); // 3, оба операнда приводятся к числам

//================== Приведение к числу, унарный + =====================
//Плюс + существует в двух формах: бинарной, которую мы использовали выше, и унарной.
//Унарный, то есть применённый к одному значению, плюс + ничего не делает с числами. Но если операнд не число, унарный плюс преобразует его в число.

// Не влияет на числа 
//let x = 1; alert( +x ); // 1 
//let y = -2; 
//alert( +y ); // -2 

// Преобразует не числа в числа 
//alert( +true ); // 1 
//alert( +"" ); // 0

// ========================== Инкремент ++ увеличивает переменную на 1:==================================
// let counter = 2;
// counter++;        // работает как counter = counter + 1, просто запись короче
// alert( counter ); // 3

// ========================= Декремент -- уменьшает переменную на 1:=====================================
// let counter = 2;
// counter--;        // работает как counter = counter - 1, просто запись короче
// alert( counter ); // 1

/*========= number -
- любые числа(целые и дробные, положительные и отрицательные),
  +Infinity,
  -Infinity,
  NaN */
=========================================================================================================
=========================================================================================================

  // Математические операции с плавающими числами неточны
  // console.log(0.1 + 0.2 == 0.3)   //false
  // console.log(0.1 + 0.2)        // =0.30000000000000004


  // let num1 = 1
  // let num2 = 0
  // console.log(num1 / num2)  // = Infinity
  // console.log(-1 / 0)       // = -Infinity
 
  // NaN - this is result of incorrect or undefined mathematical operation:
  // let firstName = 'Maria'
  // console.log(firstName / num1)  // = NaN
  // console.log(firstName - num1)  // = NaN
  // console.log(firstName * num1)  // = NaN


  // console.log(firstName + num1)   // конкатенация => получим строку Maria1


  //Но если у нас строка содержит число без букв:
  // console.log('3' + num1)    // конкатенация => получим строку 31
  // console.log(num1 + '3')    // конкатенация => получим строку 13
  // console.log(num1 - '3')    //  => получим число -2
  // console.log(9 / '3')   // js конвертировал строку в число = 3
  // console.log('3' * 10)   //то же самое = 30




//=========Cпособы конвертации числа в строку:
// let num  = 33
// console.log(num + '')   // 33
// console.log(typeof(num + ''))   // string


// console.log(String(num))   // 33
// console.log(typeof(String(num)))   // string




//=========Способы конвертации строки в число:
// let num  = '33'
// console.log(+num)   // 33
// console.log(typeof(+num))   // number
// console.log(num * 1)   // 33
// console.log(typeof(num * 1))   // number


// console.log(Number(num))   // 33
// console.log(typeof(Number(num)))   // number






//=========Инкремент/декремент
//  let counter = 2;
// counter++        // работает как counter = counter + 1, просто запись короче (или counter += 1)
// console.log(counter)  // 3


// let counter = 2;
// counter--        // работает как counter = counter - 1, просто запись короче (или counter -= 1)
// console.log(counter)


// Разница между counter++ и ++counter (тоже, что и для counter-- и --counter)
// «Постфиксная форма»:
// // counter = 2;
// console.log(counter++)  // 2
// console.log(counter + 2)  //5


//«Префиксная форма»:
// counter = 2;
// console.log(++counter)  // 3
// console.log(counter)  //3


//========= Остаток от деления. Зачем он нам нужен?
// 1.Проверка числа на четность/нечетность
// let numOdd = 7
// let numEven = 8
// console.log(numOdd % 2 == 0)     //false
// console.log(numEven % 2 == 0)     //true




// !!!Спрашивают на интервью!!!
// 2.Проверка, что число целое
// let numInt = 2
// let numFloat = 2.2
// console.log(numFloat % 1 == 0)     //false
// console.log(numFloat % 1)
// console.log(numInt % 1 == 0)     //true


// // Если находим остаток от деления меньшего числа на большее, то остаток будет всегда первое (меньшее) число
// console.log(1 % 2)


// !!!Спрашивают на интервью!!!
//========= Операторы сравнения
// В чем отличие строгого оператора сравнения/strict equallity (===) от нестрогого/ loose equallity (==)?


// Например, '==' не отличает 0 от false
// console.log(0 == false)   // true
// console.log(0 === false)   // false, так как различны их типы


// '==' не сравнивает типы
// console.log('3' == 3)        // true
// console.log('3' === 3)        // false, так как различны их типы


// При использовании математических операторов и других операторов сравнения < > <= >=
// Значения null/undefined преобразуются к числам: null становится 0, а undefined – NaN.
// console.log( null > 0 )    // 0 > 0 ? false
// console.log( null >= 0 )   // 0 >= 0 ? true
// console.log(null - 5)  // -5, здесь null это 0


// для нестрогого равенства == значений undefined и null действует особое правило:
// эти значения ни к чему не приводятся, они равны друг другу и не равны ничему другому.
// console.log(null == undefined)       // true
// console.log(null == 0)                  // false
// console.log(undefined == NaN)                  // false


// для строгого равенства === Эти значения различны, так как различны их типы.
// console.log(null === undefined)      // false




//=========Logical operators


// || (Оператор «ИЛИ»)


// result = value1 || value2 || value3
// Вычисляет операнды слева направо.
// Каждый операнд конвертирует в логическое значение. Если результат true, останавливается и возвращает исходное значение этого операнда
// Другими словами, цепочка ИЛИ || возвращает первое истинное значение или последнее, если такое значение не найдено


// Пример
// let firstName = ""
// let lastName = ""
// let nickName = "Суперкодер"


// ИЛИ || обрабатывает свои операнды до тех пор, пока не будет достигнуто первое истинностное значение,
// и затем это значение сразу же возвращается, даже не затрагивая другие операнды.


// console.log(firstName || lastName || nickName || "Аноним")   //Суперкодер
// console.log(!firstName)   //true


// console.log(true || console.log("никогда не сработает"))
// console.log(false || console.log("сработает"))


// && (Оператор «И»)
// находит первое ложное значение


// result = value1 && value2 && value3
// Вычисляет операнды слева направо.
// Каждый операнд преобразует в логическое значение. Если результат false, останавливается и возвращает исходное значение этого операнда.
// Если все операнды были истинными, возвращается последний.


// Пример
// console.log(1 && 2 && 0 && 3)  // 0
// console.log(!0)                // true
// console.log(!!0)                // false
// console.log(0 && "какая-то строка")   //0
// console.log(1 && "какая-то строка")   //"какая-то строка"


// Приоритет оператора && больше, чем у ||
// console.log(true || true && false);    // true
// console.log((true || true) && false);  // false







