// HOMEWORK

// -створити масив з:
// - з 5 числових значень
// - з 5 стічкових значень
// - з 5 значень стрічкового, числового та булевого типу
// - та вивести його в консоль

// let a =[1,2,3,4,5,"home","work","okten","leson","somthing", "some", 22,44,true,false]
// console.log(a)


// Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу. Вивести в консоль
// let a=[]
// a[0]=typeof false
// a[1]=typeof 0
// console.log(a)

// За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині

// for (i=0;i<10;i++){
//     document.write('<div>Hello</div>')
// }

// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині

// for (i=0;i<10;i++){
//     document.write(`<div>Hello ${i}</div>`)
// }

// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.

// let i = 0;
// while (i < 20) {
//     document.write('<h1>Hello</h1>');
//     i++;
// }


// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.
// let i = 0;
// while (i < 20) {
//     document.write(`<h1>Hello ${i}</h1>`);
//     i++;
// }

// - Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.
// let a = []
// for (i=0; i<10; i++){
//     a[i]=i
//
// }
// console.log(a)

// - Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі.

// let a = []
// for (i=0; i<10; i++){
//     a[i]=typeof "str"
//
// }
// console.log(a)

// - Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.
// let a = []
// for (i=0; i<10; i++){
//     a[i]=typeof false
//
// }
// console.log(a)

// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки булеві елементи

// let a = []
// let b = 0
// for (i=0;i<5;i++){
//     a[i]= typeof "string";
// }
// b=a.length
// for (c=b;c<b+3;c++){
//     a[c]=typeof 0
// }
// b=a.length
// for (c=b;c<b+2;c++){
//     a[c]=typeof true
// }
//
// for (i in a){
//     if (a[i] === "boolean"){
//         console.log(i)
//     }
//
// }

// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки числові елементи

// let a = []
// let b = 0
// for (i=0;i<5;i++){
//     a[i]= typeof "string";
// }
// b=a.length
// for (c=b;c<b+3;c++){
//     a[c]=typeof 0
// }
// b=a.length
// for (c=b;c<b+2;c++){
//     a[c]=typeof true
// }
//
// for (i in a){
//     if (a[i] === 'number'){
//         console.log(i)
//     }
//
// }

// - Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки рядкові елементи

// let a = []
// let b = 0
// for (i=0;i<5;i++){
//     a[i]= typeof "string";
// }
// b=a.length
// for (c=b;c<b+3;c++){
//     a[c]=typeof 0
// }
// b=a.length
// for (c=b;c<b+2;c++){
//     a[c]=typeof true
// }
//
// for (i in a){
//     if (a[i] === 'string'){
//         console.log(i)
//     }
//
// }

// - Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів.
//     Вивести в консоль всі його елементи в циклі.

// let a = []
// for (i=0; i<10;i++){
//     a.push(i)
//     console.log(a)
// }

// - Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
// for (i=0; i<10; i++){
//     console.log(i)
//     document.write(`<div> ${i}</div>`);
//
// }


// - Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
// for (i=0; i<100; i++){
//     console.log(i)
//     document.write(`<div> ${i}</div>`);
//
// }

// - Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write

// for (i=0; i<=100; i=i+2){
//     console.log(i)
//     document.write(`<div> ${i}</div>`);
//
// }

// - Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write

// for (i=2; i<=100; i=i+2){
//     console.log(i)
//     document.write(`<div> ${i}</div>`);
//
// }


// - Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write

 // for (i=1; i<=100; i=i+2){
 //    console.log(i)
 //    document.write(`<div> ${i}</div>`);
//
// }

// CLASWORK

// зробити масив з 10 чисел [2,17,13,6,22,31,45,66,100,-18]та:

// 1. перебрати його циклом while
// let a = [2,17,13,6,22,31,45,66,100,-18]
// let i = 0
// while (i<a.length){
//     console.log(a[i])
//     i++
// }

// 2. перебрати його циклом for
// let a = [2,17,13,6,22,31,45,66,100,-18]
// for (i=0;i<a.length;i++){
//     console.log(a[i])
// }

// 3. перебрати циклом while та вивести  числа тільки з непарним індексом
// let a = [2,17,13,6,22,31,45,66,100,-18]
// let i = 0
// while (i<a.length){
//     if (i%2>0){
//         console.log(a[i])
//     }
//     i++
// }

// 4. перебрати циклом for та вивести  числа тільки з непарним індексом
// let a = [2,17,13,6,22,31,45,66,100,-18]
// for (i=0;i<a.length;i++){
//     if (i%2>0){
//         console.log(a[i])
//     }
// }

// 5. перебрати циклом while та вивести  числа тільки парні  значення

// let a = [2,17,13,6,22,31,45,66,100,-18]
// let i = 0
// while (i<a.length){
//     if (a[i]%2===0){
//         console.log(a[i])
//     }
//     i++
// }

// 6. перебрати циклом for та вивести  числа тільки парні  значення
// let a = [2,17,13,6,22,31,45,66,100,-18]
// for (i=0;i<a.length;i++){
//     if (a[i]%2===0){
//         console.log(a[i])
//     }
// }

// 7. замінити кожне число кратне 3 на слово "okten"

// let a = [2,17,13,6,22,31,45,66,100,-18]
// for (i=0;i<a.length;i++){
//     if (a[i]%3===0){
//         console.log(a[i]='okten')
//     }
// }

// 8. вивести масив в зворотньому порядку.

// let a = [2,17,13,6,22,31,45,66,100,-18]
// for (i=a.length;i>0;i--){
//     console.log(a[i])
// }

// 9. всі попередні завдання (окрім 8), але в зворотньому циклі (с заду на перед)

// 1. перебрати його циклом while назад
// let a = [2,17,13,6,22,31,45,66,100,-18]
// let i = a.length
//
// while (i!==0){
//     console.log(a[i])
//     i--
// }

// 2. перебрати його циклом for назад
// let a = [2,17,13,6,22,31,45,66,100,-18]
// for (i=a.length;i>0;i--){
//     console.log(a[i])
// }

// 3. перебрати циклом while та вивести  числа тільки з непарним індексом назад
// let a = [2,17,13,6,22,31,45,66,100,-18]
// let i = a.length
// while (i!==0){
//     if (i%2>0){
//         console.log(a[i])
//     }
//     i--
// }

// 4. перебрати циклом for та вивести  числа тільки з непарним індексом назад
// let a = [2,17,13,6,22,31,45,66,100,-18]
// for (i=a.length;i>0;i--){
//     if (i%2>0){
//         console.log(a[i])
//     }
// }

// 5. перебрати циклом while та вивести  числа тільки парні  значення назад

// let a = [2,17,13,6,22,31,45,66,100,-18]
// let i = a.length
// while (i>-1){
//     if (a[i]%2===0){
//         console.log(a[i])
//     }
//     i--
// }

// 6. перебрати циклом for та вивести  числа тільки парні  значення назад
// let a = [2,17,13,6,22,31,45,66,100,-18]

// for (i=a.length;i>-1;i--){
//     if (a[i]%2===0){
//         console.log(a[i])
//     }
// }

// 7. замінити кожне число кратне 3 на слово "okten"

// let a = [2,17,13,6,22,31,45,66,100,-18]
// for (i=a.length;i>-1;i--){
//     if (a[i]%3===0){
//         console.log(a[i]='okten')
//     }
// }
