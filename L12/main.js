// тримати відповідь з цього ресурсу відповідь, та вивести в документ об'єкти. Застилізувати, за допомоги css, щоб отримати 5 елементів в рядку.
// Для кожного елементу свій блок div.post
// Всі характеристики повинні мати свої блоки всередені div.post
// https://jsonplaceholder.typicode.com/posts


// fetch('https://jsonplaceholder.typicode.com/posts')
// .then(somePost=>somePost.json())
// .then(somePostArray=>{
//     for (let someElement of somePostArray) {
//         let div = document.createElement('h1');
//         div.innerText = `${someElement.userId} ${someElement.id}`;
//         let title = document.createElement('h2');
//         title.classList.add('title');
//         title.innerText = `${someElement.title}`;
//         let bodyText = document.createElement('div')
//         bodyText.classList.add('post');
//         let par = document.createElement('p')
//         par.innerText = `${someElement.body}`;
//         bodyText.append(par)
//
//
//         document.body.append(div, title, bodyText)
//     }
// })

// Отримати відповідь з цього ресурсу відповідь, та вивести в документ як в прикладі на занятті.
//     Для кожного елементу свій блок div.comment
// Всі характеристики повинні мати свої блоки всередені div.comment
// https://jsonplaceholder.typicode.com/comments

// fetch('https://jsonplaceholder.typicode.com/comments')
// .then(someComent=>someComent.json())
// .then(someComentArray=>{
//     for (let someElement of someComentArray) {
//         let idparameters = document.createElement('div');
//         idparameters.innerText = `${someElement.postId} ${someElement.id}`
//         let name = document.createElement('h2');
//         name.innerText = `${someElement.name}`;
//         let emailText = document.createElement('p');
//         emailText.innerText = `${someElement.email}`;
//         emailText.classList.add('emailText')
//         let bodyText = document.createElement('p');
//         bodyText.innerText = `${someElement.body}`
//
//         document.body.append(idparameters,name,emailText,bodyText);
//
//     }
// })

// Отримати відповідь з цього ресурсу відповідь, та вивести в документ як в
// прикладі на занятті
// https://jsonplaceholder.typicode.com/posts
//     зробити кнопку до кожного поста. при кліку на яку виводяться в окремий
//     блок всі коментарі поточного поста

fetch('https://jsonplaceholder.typicode.com/posts')
.then(somePosts=>somePosts.json())
.then(someArray=>{
    for (let someElement of someArray) {
        let div = document.createElement('div')
        let title = document.createElement('h2')
        title.innerText = `${someElement.title}`
        let post = document.createElement('p')
        post.innerText = `${someElement.body}`
        let button = document.createElement('button')
        button.classList.add('btnClick')
        button.innerText = 'click me'
        div.append(title,post,button);

        button.onclick = function (){
           let comentPost = JSON.parse(localStorage.getItem('comentPost')) || []
            comentPost.push(someElement.body)
            localStorage.setItem('comentPost', JSON.stringify(comentPost))
        }
        document.body.appendChild(div)

    }






})