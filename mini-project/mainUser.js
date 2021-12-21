let id = JSON.parse(localStorage.getItem('idUser'));
let stringHttps = 'https://jsonplaceholder.typicode.com/users/'
let newStringHttps = stringHttps + id[id.length - 1]


fetch(newStringHttps)
    .then(someUser => someUser.json())
    .then(listObj => {

        let div = document.createElement('div');
        div.classList = 'windowText'
        let id = document.createElement('div');
        id.innerText = 'id: ' + listObj.id;
        let name = document.createElement('div');
        name.innerText = 'name: ' + listObj.name;
        let username = document.createElement('div');
        username.innerText = 'username: ' + listObj.username;
        let email = document.createElement('div');
        email.innerText = 'email: ' + listObj.email;
        let address = document.createElement('div');
        address.innerText = 'address: '
        let street = document.createElement('div');
        street.innerText = 'street: ' + listObj.address.street;
        let suite = document.createElement('div');
        suite.innerText = 'suite: ' + listObj.address.suite;
        let city = document.createElement('div');
        city.innerText = 'city: ' + listObj.address.city;
        let zipcode = document.createElement('div');
        zipcode.innerText = 'zipcode: ' + listObj.address.zipcode;
        let geo = document.createElement('div');
        geo.innerText = 'geo: '
        let lat = document.createElement('div');
        lat.innerText = 'lat: ' + listObj.address.geo.lat;
        let lng = document.createElement('div');
        lng.innerText = 'lng: ' + listObj.address.geo.lng;
        let phone = document.createElement('div');
        phone.innerText = 'phone: ' + listObj.phone;
        let website = document.createElement('div');
        website.innerText = 'website: ' + listObj.website;
        let company = document.createElement('div');
        company.innerText = 'company: ';
        let companyName = document.createElement('div');
        companyName.innerText = 'name: ' + listObj.company.name;
        let catchPhrase = document.createElement('div');
        catchPhrase.innerText = 'catchPhrase: ' + listObj.company.catchPhrase;
        let bs = document.createElement('div');
        bs.innerText = 'bs: ' + listObj.company.bs;

        div.append(id, name, username, email, address, street, suite, city, zipcode, geo, lat, lng, phone, website, company, companyName, catchPhrase, bs);

        let button = document.createElement('button');
        button.innerText = 'post of current user';
        button.classList = 'buttonPost'
        let popupDiv = document.createElement('div');
        popupDiv.className = 'popupDiv'

        button.append(popupDiv);

        document.body.append(div, button);
            button.onclick = function myFunction(){
                    let postsStringHttps = newStringHttps +'/posts';
                    fetch(postsStringHttps)
                        .then(postUser=>postUser.json())
                        .then(postsArray=>{
                                for (let postsKey of postsArray) {
                                        let div = document.createElement('div');
                                        div.classList = 'postsInfo'
                                        let divText = document.createElement('div');
                                        divText.innerText = 'title: '+ postsKey.title;
                                        let button = document.createElement('button')
                                        button.innerText = 'Next';
                                        div.append(divText, button)
                                        document.body.appendChild(div);


                                        button.onclick = function postsUser(){
                                                window.location.href = 'http://localhost:63342/JS/mini-project/post-details.html?_ijt=ke30k2anrdnipupjeovmu0qfah&_ij_reload=RELOAD_ON_SAVE'
                                                let id = JSON.parse(localStorage.getItem('idUser'))||[]
                                                id.push(postsKey.id)
                                                localStorage.setItem('id', JSON.stringify(id))

                                        }

                                }
                        })
                    button.onclick = function popupDivNone(){
                            popupDiv.innerText = ''
                    }

            }


    })



