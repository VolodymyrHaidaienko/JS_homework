// - Напишіть код,  який за допомоги document.getElementById або document.getElementsByClassName або document.getElementsByTagName :


// -- отримує текст з параграфа з id "content"
// let plist = document.getElementById("content")
// console.log(plist.innerText)

// -- отримує текст з блоку з id "rules"
// let plist2 = document.getElementById("rules")
//  console.log(plist2.innerText)

// -- замініть текст параграфа з id 'content' на будь-який інший
// let plist = document.getElementById("content")
// plist.innerText='DOM – это представление HTML-документа в виде дерева тегов.'

// -- замініть текст параграфа з id 'rules' на будь-який інший
// let plist2 = document.getElementById("rules")
// plist2.innerText='Основой HTML-документа являются теги.'


// -- змініть кожному елементу колір фону на червоний
// let plist = document.getElementById("content")
// let plist2 = document.getElementById("rules")
// plist.style.background='red'
// plist2.style.background='red'

// -- змініть кожному елементу колір тексту на синій
// let plist = document.getElementById("content")
// let plist2 = document.getElementById("rules")
// plist.style.color='blue'
// plist2.style.color='blue'

// -- отримати весь список класів елемента з id=rules і вивести їх в console.log
// let plist2 = document.getElementById("rules")
// console.log(plist2.className)

// -- поміняти колір тексту у всіх елементів fc_rules на червоний
// let pp = document.getElementsByClassName('fc_rules')
// console.log(pp)
// for (let li of pp) {
//     li.style.background = 'red'
// }



// 1) Напишіть код, який :

// a) змінює колір тексту елемнту з ід main_header на назву групи в якій ви вчитесь (mon-year)
// let plist = document.getElementById('main_header')
// plist.style.color ='gold'
// plist.innerText = 'This is page for tasknew'

// b) робить шириниу елементу ul 400px
// let getEleventul= document.getElementsByTagName('ul')
// getEleventul[0].style.width='400px'


// c) робить шириниу всіх елементів з класом linkList шириною 50%
// let  getElementClassWidth = document.getElementsByClassName('linkList')
// for (let element of getElementClassWidth) {
//     element.style.width='50%'
//
// }

// d) отримує текст який зберігається в елементі з класом listElement2
// let getElementClasslistElement2 = document.getElementsByClassName('listElement2')
// console.log(getElementClasslistElement2[0].innerText)

// e) отримує всі елементи li та змінює ім колір фону на сірий

// let getElementsByTagNameLi = document.getElementsByTagName('li')
// for (let elementsLi of getElementsByTagNameLi) {
//     elementsLi.style.background='gray'
// }

// f) отримує всі елементи 'a' та додає їм клас anchor
// let getElementsP = document.getElementsByTagName('p')
// for (word of getElementsP) {
//     if (word.innerText.includes('a')){
//         word.classList.add('anchor')
//     }
// }

// g) отримує всі елементи 'a' та у випадку, якщо текстовий контен елементу дорівнює link3,
// змінює йому розмір тексту на 40 пікселів
// let getElementsP = document.getElementsByTagName('a')
// for (let word of getElementsP) {
//     if (word.innerText==='link3'){
//             word.style.fontsize='40px'
//         }
// }

// h) отримує всі елементи 'a' та додає їм клас element_XXX. Де XXX - текстовий контент елементу a
// let getElementsP = document.getElementsByTagName('p')
// for (let word of getElementsP) {
//     let classNew = word.innerText
//     word.classList.add(classNew)
// }

// i) отримує всі елементи 'sub-header' та змінює колір фону. Фон отримати з prompt()
// let getElementSubHeader = document.getElementsByClassName('sub-header');
// for (let elementSubHeader of getElementSubHeader) {
//     elementSubHeader.style.background = prompt('enter color')
// }


// j) отримує всі елементи 'sub-header' та змінює колір тексту у видаку якщо текст елемнту = content 2 segment . Колір отримати з prompt()
// let getElementSubHeader = document.getElementsByClassName('sub-header');
// for (let elementSubHeader of getElementSubHeader) {
//     if (elementSubHeader.innerText === 'content 2 segment'){
//         elementSubHeader.style.color = prompt('enter text')
//     }
//
// }

// k) отримує елемент з класом content_1 та заміняє  в ньому тест на довільний. Текст отримати з prompt()
// let getElementcontent = document.getElementsByClassName('content_1');
// for (let elementContent of getElementcontent) {
//     elementContent.textContent = prompt('enter text')
//
// }

// l) отримати елементи p та змінити їм padding на 20px
// let getElementP = document.getElementsByTagName('p');
// for (let elementP of getElementP) {
//     elementP.style.padding = '20px'
//
// }


// m) отримати елементи з класом text2 та змінити їм текст на назву групи (mon-year. Пример sep-2021)
// let getElementsByClassText = document.getElementsByClassName('text2')
// for (let elementsByClassTextElement of getElementsByClassText) {
//     elementsByClassTextElement.innerText = 'sep-2021'
// }


// написати рекурсивну функцію, яка збирає всі назви класів з файлу rules.html в окремий масив. масив вивести в консоль

// спробував написати код в циклі (в рекурсії виходить якась повна дурня:( )
// let  getElementRules = document.getElementsByClassName("rules")
// console.log(getElementRules)
// let arrayRules =[]

// for (let elementRules of getElementRules) {
//     let rules = elementRules.classList[1]
//     arrayRules.push(rules)
//     }



let  getElementRules = document.getElementsByClassName("rules")
let arrayRules =[]
getRule(0)
console.log(arrayRules)
function getRule(index){

    if (index<getElementRules.length){
        arrayRules.push(getElementRules[index].classList[1])
        getRule(index+1)
    }
}







