// Homework
// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
// let totalRectangle =(a,b)=>a*b;
// console.log(totalRectangle(10,5));

// - створити функцію яка обчислює та повертає площу кола з радіусом r
// let totalCircle =(a)=>a**2*3.14;
// console.log(totalCircle(7));


//  - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
// let totalCylinder = (h,r)=>2*3.14*r*(h+r);
// console.log(totalCylinder(2,5))


// - створити функцію яка приймає масив та виводить кожен його елемент
// let masReturn = ([])=> a;
// console.log([1,2,3,"come",true])

// - створити функцію яка створює параграф з текстом. Текст задати через аргумент
// let paragraphwrite = (a)=>document.write(`<p>${a}</p>`)
// paragraphwrite("text for paragraph")

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
// let paragraphwriteli = (a) => document.write(`<ul>
//           <li>${a}</li>
//           <li>${a}</li>
//           <li>${a}</li></ul>`)
// paragraphwriteli("text for paragraph and for li")


 // - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається
// другим аргументом, який є числовим (тут використовувати цикл)
// let paragraphwriteli = (a,b)=> {
//     for (i = 0; i < b; i++) {
//         document.write(`<ul><li>${a}</li></ul>`)
//     }
// }
// paragraphwriteli("text for paragraph and for li",10)

 // - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
// стрілочні функції arguments не підтримують
// function morenumbers(){
//     console.log(arguments)
// }
//
// morenumbers(1,2,5,"vrv",true)

// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.

// let sombodybloc = (a)=>{
//     for (i=0;i<a.length;i++){
//         document.write(`<div>${Object.entries(a[i])}</div>`)
//
//     }
// }
// sombodybloc([{id:1, name:"Vasya", age:21},{id:2, name:"Kolya", age:22},{id:3, name:"Misha", age:23}])





// classwork

// - створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)

// let getnumber = (a,b,c)=>{
//     if (a<b && a
//     <c){
//         console.log(a)
//     }else if (b<a && b<c){
//         console.log(b)
//     }else {console.log(c)}
// }
// getnumber(12,25,10)


// - створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)

// let getnumber = (a,b,c)=>{
//    if (a>b && a>c){
//        console.log(a)
//    }else if (b>a && b>c){
//        console.log(b)
//    }else {console.log(c)}
// }
// getnumber(32,25,100)

// - створити функцію яка повертає найбільше число з масиву

// let getmaxnumber = (a)=>{
//     let b= a[0]
//     for (i=0;i<a.length;i++){
//         if (a[i]>b){
//             b= a[i]
//
//         }
//     }console.log(b)
//
// }
// getmaxnumber([101,2,18,4,5])


// - створити функцію яка повертає найменьше число з масиву

// let getminnumber = (a)=>{
//     let b= a[0]
//     for (i=0;i<a.length;i++){
//         if (a[i]<b){
//             b= a[i]
//
//         }
//     }console.log(b)
//
// }
// getminnumber([101,-2,18,1,5])

// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13

// let getsummnumber = (a)=>{
//     let b= 0
//     for (i=0;i<a.length;i++){
//         b=b+a[i]
//     }console.log(b)
//
// }
// getsummnumber([1,2,10])



// - створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.

// let getnumber = (a)=>{
//     let b= 0
//     for (i=0;i<a.length;i++){
//         b=b+a[i]
//     }
//     b=b/a.length
//     console.log(b)
//
// }
// getnumber([10,1,10])



 // - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше (Math використовувати заборонено);
// Стрілочна функція не працює з arguments

// function getminnumber(){
//     let a = arguments
//     let b= a[0]
//     let c = a[0]
//     for (i=0;i<a.length;i++){
//         if (a[i]<b){
//             b= a[i]
//         }
//         if (a[i]>c){
//             c= a[i]
//         }
//     }console.log(c);return b
//
// }
// let f = getminnumber(12,4,33,55,10)
// console.log(f)
//

// - створити функцію яка заповнює масив рандомними числами
// (цей код генерує рандомні числа в діапазоні від 0 до 100 - Math.round(Math.random()*100)) та виводить його.

// let getrandom = (c)=>{
//     let a = []
//     for (i=0;i<c;i++){
//         function getRandomInt(min,max) {
//             return Math.floor(Math.random(min,max) * max);
//         }
//         let b = getRandomInt(0,100)
//         a.push(b)
//     }
//     console.log(a)
// }
//
// getrandom(20)


// - створити функцію яка заповнює масив рандомними числами в діапазоні від 0 до limit. limit - аргумент, який характеризує кінцеве значення діапазону.

// let getRandomInt = (limit)=>{
//     let a = []
//     for (i=0;i<limit;i++){
//         let b = Math.floor(Math.random(limit) * limit);
//         a.push(b)
//         }console.log(a)
// }
//
// getRandomInt(20)


// - Функція приймає масив та робить з нього новий масив в зворотньому порядку. [1,2,3] -> [3, 2, 1].

// let getlistint = (myArray)=>{
//     let newArray = [];
//     for (i=myArray.length-1;i>-1;i--){
//         newArray.push(myArray[i])
//     }console.log(newArray)
//
//
// }
// getlistint([1,2,3])