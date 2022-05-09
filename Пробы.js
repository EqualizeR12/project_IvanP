// 'use strict';//Строгое написание кода!👇

// let number = 4;

// console.log(-4/0);
// console.log('string' * 20);

// const persone = 'Alex';

// const bool = false;

// // console.log(something);

// let und;
// console.log(und);

//  const obj = {
//      name: 'John',
//      age: 25,
//      isMarried: false
//  };

// //  console.log(obj.name);
//  console.log(obj['name']);

//  let arr = ['plum.png', 'orange.jpg', 6, 'apple.bmp', {}, []];

//  console.log(arr[1]);
//....................................................................

// alert('Hello!');

// const result = confirm('Are yo here?');
// console.group(result);

// const answer = prompt('Вам есть 18?', '18');
// console.log(answer); 
// console.log(typeof(answer));//Тип - СТРОКА!

// const answer = +prompt('Вам есть 18?', '18');
// console.log(typeof(answer)); //Тип - ЧИСЛО!!!

// const answers = [];

// answers[0] = prompt('Как вас зовут?', '');
// answers[1] = prompt('Ваша фамилия?', '');
// answers[2] = prompt('Скольк вам лет?', '');

// document.write(answers); // Don't work! Устарело 😐
// console.log(answers);

// console.log(typeof(answers));//Object
// console.log(typeof(null));//Object. But it's not true! Null is a separate data type. 
//....................................................................

//Итерполяция!
// const category = 'toys';

// console.log('https://someurl.com/' + category + /4 + /6);//Раньше писали так. Неудобно и могут возникать ошибки в написании из-за длнных строк!

// console.log(`https://someurl.com/${category}/5/blablabla`);//Интерполяция! Динамическая часть! С помощью ``

// const user = 'Alex';

// alert(`Hi, ${user}`);
//......................................................................

// Операторы
// console.log('arr' + ' - object');
// console.log(4 + ' - object');

// console.log(4 + +'- object');//NaN - действие не подлежит математической логике
// console.log(4 + +'5'); // 9 - второй + преобразовал строку в число! Унарный плюс - знак +, который ставится перед чем-то

//Инкремент(увеличение на 1) и декримент(уменшение на 1) - укорачивают код. Префиксная и постфиксная формы.

// let incr = 10,
//   decr = 10; //Через запятую можно указать несколько значений, чтобы не писать каждый раз let, const и т.д.

//   incr++;
//   decr--;
//   ++incr;
//   --decr;

//   console.log(incr);//11
//   console.log(decr);//9

// console.log(incr++);//10 Постфиксная форма сначала возвращает старое значение , а после этого его увеличивает
//   console.log(decr--);//10

// console.log(++incr); //11
// console.log(--decr); //9

// console.log(5 % 2); //1 - Оператор % возвращает остаток от деления двух чисел!
// console.log(2 * 4 === 8); //true
// console.log(2 * 4 === '8'); //false - разный тип данных! Хоть и одинковые значения!

//&& - оператор И. Работает, когда 2 или несколько значений true. Это и это = true!


// const isChecked = true,
//   isClose = true;

//   console.log(isChecked && isClose);//true - оба выражения верны

// const isChecked = true,
//   isClose = false;

//   console.log(isChecked && isClose);//false - т.к. одно из значений false


//|| - оператор ИЛИ. Работает, если хотя бы одно значение true. Это или это, или это!

// const isChecked = true,
//   isClose = false;

//   console.log(isChecked || isClose);//true - т.к. одно из значений true

//   const isChecked = false,
//   isClose = false;

//   console.log(isChecked || isClose);//false - т.к. ни одно из значений не имеет true!

//! - оператор отрицания. Возвращает обратное значение!
// const isChecked = false,
//   isClose = false;

//   console.log(isChecked || !isClose);//true - т.к. ! оборачивает значение isClose = false в isClose = true!
//......................................................................


