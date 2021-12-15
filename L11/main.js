// -створити форму з інпутами для name та age.
//     При відправці форми записати об'єкт в localstorage

let formParams = document.forms.formParams;
formParams.onsubmit = function (e) {
    e.preventDefault();
    let namePerson = this.namePerson.value;
    let agePerson = this.agePerson.value;

    localStorage.setItem('userData', JSON.stringify({namePerson, agePerson}));
};

// -створити форму з інпутами для model,type та volume автівки.
//     при відпарвці форми об'єкти зберігаються в масиві в локальному сховищі.
let car = document.forms.car;
car.onsubmit = function (e) {
    e.preventDefault();
    let model = this.model.value;
    let type = this.type.value;
    let volume = this.volume.value;
    localStorage.setItem('car', JSON.stringify({model, type, volume}));

};


// є масив -
let users = [
    {name: 'vasya', age: 31, status: false},
    {name: 'petya', age: 30, status: true},
    {name: 'kolya', age: 29, status: true},
    {name: 'olya', age: 28, status: false},
    {name: 'max', age: 30, status: true},
    {name: 'anya', age: 31, status: false},
    {name: 'oleg', age: 28, status: false},
    {name: 'andrey', age: 29, status: true},
    {name: 'masha', age: 30, status: true},
    {name: 'olya', age: 31, status: false},
    {name: 'max', age: 31, status: true}
];
// створити під кожен об'єкт свій блок з конопкою "додати до улюблених" при натисканні на яку об'єкт потрапляє до масиву favorites улюблених обраних об'єктів в локальному сховищі.
// Створити сторніку favorites.html при переході на яку потрібно вивест в документ всіх обраних на попередньому етапі.
let div = document.createElement('div');
for (let i = 0; i < users.length; i++) {
    let item = document.createElement('div');
    let button = document.createElement('button');
    button.innerText = 'click me';
    item.append(users[i].name, users[i].age, users[i].status);
    button.onclick = function () {
        let favorites = JSON.parse(localStorage.getItem('favorites')) || [];
        favorites.push(users[i])
        localStorage.setItem('favorites', JSON.stringify(favorites));
    };


    div.append(item, button)


}
document.body.appendChild(div)


