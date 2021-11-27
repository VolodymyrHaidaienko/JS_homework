// - Знайти та вивести довижину настипних стрінгових значень
// 'hello world', 'lorem ipsum', 'javascript is cool'
// let str = 'hello world'
// console.log(str.length)
// let str = 'lorem ipsum'
// console.log(str.length)
// let str = 'javascript is cool'
// console.log(str.length)

// - Перевести до великого регістру наступні стрінгові значення
// 'hello world', 'lorem ipsum', 'javascript is cool'
// let str = 'hello world'
// let str = 'lorem ipsum'
// let str = 'javascript is cool'
// let toLocaleUpperCase = str.toLocaleUpperCase()
// console.log(toLocaleUpperCase)

// - Перевести до нижнього регістру настипні стрінгові значення
// 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'
// let str = 'HELLO WORLD'
// let str = 'LOREM IPSUM'
// let str = 'JAVASCRIPT IS COOL'
// let toLocaleLowerCase = str.toLocaleLowerCase()
// console.log(toLocaleLowerCase)

// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.
// let str = ' dirty string   '
// let trim = str.trim()
// console.log(trim)

// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
// let str = 'Каждый охотник желает знать';
// let stringToarray = (str)=>{
//     let arr = str.split(" ")
//     document.writeln(arr);
// };
// stringToarray(str)



// - Напишіть функцію delete_characters(str, length), яка повертає підрядок, що складається із зазначеної кількості символів.
//     let str = 'Каждый охотник желает знать';
// document.writeln(delete_characters(str, 7)); // Каждый
// let str = 'Каждый охотник желает знать';
// let delete_characters = (str, length)=>{
//     let delete_characters = str.slice(0,length)
//     console.log(delete_characters)
//
// }
// delete_characters(str,7)

// - Напишіть функцію insert_dash(str), яка приймає рядок str як аргумент і вставляє тире (-) між словами. При цьому всі символи рядка необхідно перевести у верхній регістр.
//     let str = "HTML JavaScript PHP";
// document.writeln(insert_dash(str)); // 'HTML-JAVASCRIPT-PHP'
// let str = "HTML JavaScript PHP";
// let insert_dash=(str)=>{
//     let replace = str.replaceAll(" ","-").toLocaleUpperCase()
//     document.write(replace)
// }
// insert_dash(str)


// - Напишіть функцію, яка приймає рядок як аргумент і перетворює регістр першого символу рядка з нижнього регістру у верхній.
// let str = "okten"
// let toUpperCase = (str)=>{
//     let upperCase = str.charAt(0).toUpperCase()+str.slice(1)
//     return upperCase
// }
// console.log(toUpperCase(str))

// - Напишіть функцію capitalize(str), яка повертає рядок, у якому кожне слово починається з великої літери.
// let str = "okten js lesson"
// let capitalize = (str) => {
//     let srtarr = str.split(' ');
//     let upper = srtarr.map(velue => velue.charAt(0).toUpperCase() + velue.slice(1)).join(" ");
//     return upper
// };
// console.log(capitalize(str))


// - Дано список імен.
// let n1 = 'Harry..Potter'
// let n2 = 'Ron---Whisley'
// let n3 = 'Hermione__Granger'
// Написати функцію, яка приймає будь яке не валідне імя, та нормалізує його в наступнйи вигляд
// let n1 = 'Harry Potter'
// let n2 = 'Ron Whisley'
// let n3 = 'Hermione Granger'

// let replacecleen = (str)=>{
//     let replace = str.replaceAll("."," ").replaceAll("-"," ").replaceAll("_"," ")
//     document.write(replace)
// }
// replacecleen(n3)


// - створити функцію, яка генерує масив рандомних числових цілих значень в діапазоні від 0 до 100.

// let random = (min,max)=>{
//     let randomarr = []
//     for (i=0;i<max;i++){
//         let run = Math.floor(Math.random() * (max - min + 1)) + min;
//         randomarr.push(run)
//     }
//     console.log(randomarr)
// }
// random(0,100)

// - створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень. Відсортувати його за допомоги sort

// let random = (min,max)=>{
//     let randomarr = []
//     for (i=0;i<max;i++){
//         let run = Math.floor(Math.random() * (max - min + 1)) + min;
//         randomarr.push(run);
//     }
//     randomarr.sort((a, b) => {return a-b});
//     console.log(randomarr)
// }
// random(0,100)

// - створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень. відфільтрувати  його за допомоги filter, залишивши тільки парні числа

 // let random = (min,max)=>{
 //    let randomarr = []
 //    for (i=0;i<max;i++){
 //        let run = Math.floor(Math.random() * (max - min + 1)) + min;
 //        randomarr.push(run);
 //    }
 //    let randomsort = randomarr.filter(value => {if(value%2===0){return value}})
 //
 //
 //    console.log(randomsort)
// }
// random(0,100)

// - створити масив рандомних цілих числових значень (або згенерувати, за допомоги попередньої функції) .
// за допомоги map та колбеку перетворити всі об'єкти в масиві на стрінгові.

// let random = (min,max)=>{
//     let randomarr = []
//     for (i=0;i<max;i++){
//         let run = Math.floor(Math.random() * (max - min + 1)) + min;
//         randomarr.push(run);
//     }
//     let randomarrnew = randomarr.map(value => value).join(" ")
//     console.log(randomarrnew)
//
// }
// random(0,100)

// - створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction.
//     let nums = [11,21,3];
// sortNums('ascending') // [3,11,21]
// sortNums('descending') // [21,11,3]

// function sortNums (number, direction){
//     let somsort = []
//     if (direction==='ascending'){
//         somsort = number.sort((a, b) => a-b);
//         } else if (direction === 'descending'){
//         somsort = number.sort((a, b) => b-a);
//     }
//     return somsort
//
// }
// let ss = sortNums([1,2,3,4],'ascending')
// console.log(ss)

// - є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// -- відсортувати його за спаданням за monthDuration
// -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців

// function sortarray(coursesAndDurationArray){
//     let newsortarray = coursesAndDurationArray.sort((a, b) => a.monthDuration - b.monthDuration)
//     console.log(newsortarray)
//     let secondaryarray = coursesAndDurationArray.filter(velue => velue.monthDuration>5)
//     console.log(secondaryarray)
// }
// sortarray(coursesAndDurationArray)


// - Напишите функцию cutString(str, n), которая делит строку на подстроки, состоящие из n символов.
// document.writeln(cutString('наслаждение',3)) // [нас,лаж,ден,ие]

// function cutString (str, count){
//    let words = []
//     let a=0
//     let b=3
//     for (i=0;i<count;i++){
//         words.push(str.slice(a,b))
//         a=a+3;
//         b=b+3;
//     } console.log(words.join())
// }
// cutString("наслаждение", 4)

// - Створити функцію-валідатор для адрес електронної пошти. Перевірка повинна включати в себе :данні до знака равлика(@),
//     наявність равлика, крапку яка знаходиться не меньше ніж на 2 символ далі після равлика, функція не чутлива до регістру
// (some@email.com,SOME@EMAIL.COM,some@EMAIL.com, і тд - однакові значення)
// Протестувати на значеннях
// someemail@gmail.com
// someeMAIL@gmail.com
// someeMAIL@i.ua
// some.email@gmail.com

// function testEmail(txt) {
//     let indexsnail = txt.indexOf('@')
//     let snailslice = txt.slice(indexsnail)
//     return txt.length > 5 && txt.indexOf('@')>0 && snailslice.indexOf('.')>0
// }
// let test = testEmail("someeMAIL@i.ua");
// console.log(test)

// - Напишіть функцію count(str, stringsearch), яка повертає кількість символів stringsearch у рядку str.
//     let symb = "о", str = "Астрономия это наука о небесных объектах";
// document.writeln(count(str, symb)) // 5

// let str = "Астрономия это наука о небесных объектах";
// let symb = "о"
// function count(str,symb){
//     let counter = 0
//     for (i=0;i<str.length;i++){
//         if (str[i]===symb[0]){
//             counter=counter+1
//         }
//     }return counter
// }
// let stringsearch = count(str,symb)
// console.log(stringsearch)

// - Напишіть функцію cutString(str, n), яка видаляє зайві слова з рядка str, залишивши у ній n слів.
//     let str = "Сила тяжести приложена к центру масс тела";
// document.writeln(cutString(str, 5)) // 'Сила тяжести приложена к центру'

// let str = "Сила тяжести приложена к центру масс тела";
// let n = 5
// function cutString(str,n){
//     let splitstring = str.split(' ',5)
//     console.log(splitstring)
// }
//
// cutString(str,n)

