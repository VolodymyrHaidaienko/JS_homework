// В index.html
// 1 получить массив объектов user с endpoint`а https://jsonplaceholder.typicode.com/users
// 2 Вывести id,name всех user в index.html. Отдельный блок для каждого user.
// 3 Добавить каждому блоку кнопку/ссылку , при клике на которую происходит переход на страницу user-details.html,
// которая имеет детальную информацию про объект на который кликнули

fetch('https://jsonplaceholder.typicode.com/users/')
.then(someUsers=>someUsers.json())
.then(listArray=>{

    for (let listElement of listArray) {
        let div = document.createElement('div')
        div.classList = 'divUsers'
        let divId = document.createElement('div')
        divId.classList = 'divId'
        divId.innerText = `${listElement.id}`
        let divUser = document.createElement('div')
        divUser.classList = 'divUser'
        divUser.innerText = `${listElement.name}`
        let button = document.createElement('button')
        button.innerText = 'user datails'
        button.classList = 'buttonClass'
        div.append(divId, divUser, button)
        document.body.append(div)
        button.onclick = function move(){
            window.location.href="user-details.html"
            let idUser = JSON.parse(localStorage.getItem('idUser'))||[]
            idUser.push(listElement.id)
            localStorage.setItem('idUser', JSON.stringify(idUser))



            }
        }

})







