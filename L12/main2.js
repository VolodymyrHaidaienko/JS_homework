let commenting = JSON.parse(localStorage.getItem('comentPost'));
let div = document.createElement('div')
for (let comment of commenting) {
    let divComment = document.createElement('div')
    divComment.append(comment)
    div.append(divComment)
    document.body.append(div)
}

