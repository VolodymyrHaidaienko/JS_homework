// - Создать произвольный елемент с id = text.  Используя JavaScript, сделайте так, чтобы при клике на кнопку исчезал элемент с id="text".
// let btn = document.getElementById('btn');
// btn.onclick = function (){
//     let text = document.getElementById('text');
//     text.hidden = true;
// }

// - Создайте кнопку, при клике на которую, она будет скрывать сама себя.
// let btn = document.getElementById('btn');
// btn.onclick = function (){
//     btn.style.display = 'none'
// }

//
// - створити інпут який приймає вік людини та кнопку яка підтверджує дію.При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік чи меньше він
// ніж 18, та повідомити про це користувача
// let form1 = document.getElementById('form1');
// form1.onsubmit = function (e){
//     e.preventDefault();
// }
// let agePerson = 0
// form1.age.oninput = function (e){
//     agePerson = this.value
//
// }
// form1.btn2.onclick = function (){
//     if (agePerson<18){
//         console.log('ваш вік менше 18')
//         form1.reset();
//
//     }else {
//         console.log('вірно, ваш вік більше 18')
//         form1.reset();
//         }
//
// }

//
// - Создайте меню, которое раскрывается/сворачивается при клике


// let menu = document.getElementsByClassName('menu')[0];
// menu.onclick = function (){
//     this.classList.toggle('callbeck')
// }


//
// - Создать список комментариев , пример объекта коментария - {title : 'lorem', body:'lorem ipsum dolo sit ameti'}.

//     Вывести список комментариев в документ, каждый в своем блоке.
//     Добавьте каждому комментарию по кнопке для сворачивания его body.

// let listarray = [
//     {title : 'lorem', body:'lorem ipsum dolo sit ameti'},
//     {title : 'lorem', body:'lorem ipsum dolo sit ameti'},
//     {title : 'lorem', body:'lorem ipsum dolo sit ameti'},
//     {title : 'lorem', body:'lorem ipsum dolo sit ameti'}
// ]
//
// for (let element of listarray) {
//     let div = document.createElement('div')
//     let elemtntTitle = document.createElement('h2')
//     let elementComent = document.createElement('div');
//     let btn = document.createElement('button')
//     btn.innerText = 'button'
//
//
//     elemtntTitle.append(element.title)
//     elementComent.append(element.body);
//     div.append(elemtntTitle,elementComent,btn);
//     document.body.append(div)
//
//     btn.onclick = function (){
//     elementComent.hidden = true;
//     elemtntTitle.hidden = true;
//     }

// }

// claswork


// - створити 2 форми  по 2 інпути в кожній. ствоирити кнопку при кліку на яку считується та виводиться на консоль інформація з цих 2х форм.
//     Кнопка повинна лежати за межами форм (Щоб ьуникнути  перезавантаження сторінки)
// Доступ до інпутів через Forms API. Отже дайте формі та інпутам всі необхідні атрибути.
//
//create a form

// let age1Person = 0
// let age2Person = 0
// let age3Person = 0
// let age4Person = 0
//
//  forms1.age1.oninput = function (e){
//      age1Person = (this.value);
//      console.log(age1Person);
//
//  }
//  forms1.age2.oninput = function (e){
//      age2Person = (this.value);
//      console.log(age2Person);
//
//  }
//  forms2.age3.oninput = function (e){
//      age3Person = (this.value);
//      console.log(age3Person);
//
//  }
//  forms2.age4.oninput = function (e){
//      age4Person = (this.value);
//      console.log(age4Person);
//
//  }
//
//   btn44.onclick = function () {
//      console.log(+age1Person+ +age2Person+ +age3Person+ +age4Person);
//       forms1.reset();
//       forms2.reset();
//
//  }


//
// - Створити 3 инпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій вмиіст ячеєк.
//     При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.
// (Додатковачастина для завдання)
//


// let form = document.forms.forms22;
// form.onsubmit = function (e){
//     e.preventDefault();
//     let rows = form.rows.value;
//     let colum = form.colums.value;
//     let contents = form.content.value;
//     console.log(rows,colum,contents);
//
//     let table = document.createElement('table');
//
//     for (i = 0;i < rows; i++){
//         let row = document.createElement('rw');
//         for (j=0;j<colum;j++){
//             let col = document.createElement('co');
//             row.append(col);
//             col.innerText = contents
//         }
//         table.append(row);
//
//     }document.body.appendChild(table);
// }


//
// - Сворити масив не цензцрних слів.
//     Сворити інпут текстового типу.
//     Якщо людина вводить слово і воно міститься в масиві не цензурних слів
// кинути алерт з попередженням.
//     Перевірку робити при натисканні на кнопку
//
// let form = document.getElementById('forms33');
// form.onsubmit = function (e) {
//     e.preventDefault();
// }
// let wordArr = ['sa', 'd4', 'db'];
// form.contentWord.oninput = function (e) {
////
//
// }
// form.btn26.onclick = function () {
//     let text = form.contentWord.value;
//     if (wordArr.includes(text)) {
//         alert('Дотримуйтеся цензури')
//     }
// }


//
// - Сворити масив не цензцрних слів.
//     Сворити інпут текстового типу.
//     Потрібно перевіряти чи не містить ціле речення в собі погані слова.
//     Кинути алерт з попередженням у випадку якщо містить.
//     Перевірку робити при натисканні на кнопку
//
// let form = document.getElementById('forms33');
// form.onsubmit = function (e) {
//     e.preventDefault();
// }
// let wordArr = ['sa fa', 'd4', 'db'];
// form.contentWord.oninput = function (e) {
//
// }
// form.btn26.onclick = function () {
//     if (wordArr.includes(form.contentWord.value)) {
//         alert('Дотримуйтеся цензури')
//     }
// }
