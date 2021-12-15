let favoriteFinish = JSON.parse(localStorage.getItem('favorites'));
console.log(favoriteFinish)
div = document.createElement('div')
for (let element in favoriteFinish) {
    let divElement = document.createElement('div')
    divElement.append(favoriteFinish[element].name, favoriteFinish[element].age, favoriteFinish[element].status);
    div.append(divElement);
    document.body.append(div);
}



