// - Описати скріпт, котрий, якщо доєднати до будь-якої сторінки дозволить зробити
// наступне:
//     При лівому кліку миші вивести в консоль інформацію про блок або елемент
//     на який відбувся клік.
//     Інформація яку потрібно вивести: Назва тегу, список класів, список ід,
//     розміри в форматі висота*ширина

// let target = document.getElementsByClassName('target')[0]
// target.onclick = function (){
//     console.log(target.tagName, target.className, target.id, target.clientHeight,target.clientWidth)
// }


// Описати скріпт, котрий, якщо доєднати до будь-якої сторінки дозволить зробити наступне:
//     При лівому кліку миші  зробить popup (спливаючий блок) в якому буде вся інформація про блок.
//     Інформація яку потрібно вивести в popup: Назва тегу, список класів, список ід, розміри в форматі висота*ширина

// function myFunction(){
//     let popup = document.getElementById('myPup');
//     popup.classList.toggle('show');
//     let shw = document.getElementsByClassName("show")[0];
//     shw.innerText = `${shw.tagName}, ${shw.className}, ${shw.id}, ${shw.clientWidth}, ${shw.clientHeight}`
//
// }


// -- взять массив пользователей
// let usersWithAddress = [
//     {id: 1, name: 'vasya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 16}},
//     {id: 2, name: 'petya', age: 30, status: true, address: {city: 'Kyiv', street: 'Shevchenko', number: 1}},
//     {id: 3, name: 'kolya', age: 29, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 121}},
//     {id: 4, name: 'olya', age: 28, status: false, address: {city: 'Ternopil', street: 'Shevchenko', number: 90}},
//     {id: 5, name: 'max', age: 30, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 115}},
//     {id: 6, name: 'anya', age: 31, status: false, address: {city: 'Kyiv', street: 'Shevchenko', number: 2}},
//     {id: 7, name: 'oleg', age: 28, status: false, address: {city: 'Ternopil', street: 'Shevchenko', number: 22}},
//     {id: 8, name: 'andrey', age: 29, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 43}},
//     {id: 9, name: 'masha', age: 30, status: true, address: {city: 'Kyiv', street: 'Shevchenko', number: 12}},
//     {id: 10, name: 'olya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 16}},
//     {id: 11, name: 'max', age: 31, status: true, address: {city: 'Ternopil', street: 'Shevchenko', number: 121}}
// ];
// - Создать три чекбокса. Каждый из них активирует фильтр для вышеуказаного массива. Фильтры могут работать как вместе так и по отдельности.
// 1й - отфильтровывает пользователей со статусом false (осталяет со статусом false)
// 2й - оставляет старше 29 лет включительно
// 3й - оставляет тех у кого город киев
// Данные выводить в документ
//
// function filterUsers() {
//     let checkBox1 = document.getElementById('checkBox1');
//     let checkBox2 = document.getElementById('checkBox2');
//     let checkBox3 = document.getElementById('checkBox3');
//     let filteredArray = usersWithAddress.filter(item => {
//         let hasStatusFalse = true
//         let hasAge29 = true
//         let hasAddress = true
//
//         if (checkBox1.checked) {
//             hasStatusFalse = item.status === false
//         }
//         if (checkBox2.checked) {
//             hasAge29 = item.age >=29
//         }
//         if (checkBox3.checked) {
//             hasAddress = item.address.city==='Kyiv'
//         }
//         return hasStatusFalse && hasAge29 && hasAddress
//
//     })
//     let div = document.createElement('div')
//     for (let filterElement of filteredArray) {
//         let li = document.createElement('li')
//         li.append(`
//                 ${filterElement.id},
//                 ${filterElement.name},
//                 ${filterElement.age},
//                 ${filterElement.status},
//                  ${filterElement.address.city},
//                  ${filterElement.address.street},
//                  ${filterElement.address.number}`)
//         div.appendChild(li)
//     }
//
//     document.body.append(div)
//
// }


// - Напишите «Карусель» – ленту изображений, которую можно листать влево-вправо нажатием на стрелочки.
//


//     Завдання важке для розуміння, але дуже легке в реалізації. Тут треба буде погуглити
// *** При виділені сегменту тексту на сторінці він стає жирний/курсивний/або якось іншим способом змінює свій стан

