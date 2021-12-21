let idPost = JSON.parse(localStorage.getItem('id'));
let stringHttps = 'https://jsonplaceholder.typicode.com/posts/'
let postsStringHttps = stringHttps + idPost[idPost.length-1]+'/comments'

fetch(postsStringHttps)
.then(postUser=>postUser.json())
.then(postsArray=>{

    for (let postsKey of postsArray) {
        let div = document.createElement('div');
        div.classList = 'postUsers'
        let postId = document.createElement('div');
        postId.innerText = 'postId: '+ postsKey.postId;
        let id = document.createElement('div')
        id.innerText = 'id: '+postsKey.id;
        let name = document.createElement('div');
        name.innerText = 'name: '+ postsKey.name
        let email = document.createElement('div');
        email.innerText = 'email: '+postsKey.email;
        let body = document.createElement('div');
        body.innerText = 'body: '+postsKey.body;

        div.append(postId,id,name,email,body)
        document.body.appendChild(div)

    }
})