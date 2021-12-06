// Все робити за допомоги js.
// - створити блок,
// - додати йому класи wrap, collapse, alpha, beta
// - додати стилі(довільні значення) : колір фону, колір тексту, розмір тексту
// - додати цей блок в body.
// - клонувати його повністю, та додати клон в body.
//
// let divElement =document.createElement('div')
// divElement.classList.add('wrap','collapse', 'alpha', 'beta')
// divElement.innerText = '5yvby6by34r4fr'
// divElement.style.background = 'gold'
// divElement.style.color = 'blue'
// let clonElement = divElement.cloneNode(true)
//
//
// document.body.appendChild(clonElement)
// document.body.appendChild(divElement)

// - Є масив:
// ['Main','Products','About us','Contacts']
// Взяти файл template1.html та додати в нього скріпт котрий для кожного
// елементу масиву створює li та додає його до блоку .menu
// Завдання робити через цикли.
// let productsarr = ['Main','Products','About us','Contacts'];
// for (let counter of productsarr) {
//     let createLi = document.createElement('li')
//     createLi.innerText=counter
//     let classMenu = document.getElementsByClassName('menu')
//     classMenu[0].appendChild(createLi)
// }


//
// - Є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// Для кожного елементу масиву зробити блок в якому вивести інформацію про title та monthDuration
// Завдання робити через цикли.
// for (let coursesElement of coursesAndDurationArray) {
//     let creatediv = document.createElement('div')
//     creatediv.innerText = coursesElement.title + ' ' + coursesElement.monthDuration
//     document.body.appendChild(creatediv)
// }



// - Є масив

// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// За допомоги скріпта для кожного елементу масиву зробити <div class='item'> ,  в якому буде <h1 class='heading'>
// з title  елементу, та <p class='description'> з monthDuration елементу.
//     Завдання робити через цикли.

// for (let coursesElement of coursesAndDurationArray) {
//     let creatediv = document.createElement('div');
//     creatediv.className = 'item';
//     let h1 = document.createElement('h1');
//     h1.className = 'heading';
//     let p = document.createElement('p');
//     p.className = 'description';
//
//     h1.append(coursesElement.title);
//     p.append(coursesElement.monthDuration)
//     creatediv.append(h1);
//     creatediv.append(p)
//     document.body.appendChild(creatediv);
// }

// classwork
// - є масив
// let simpsons = [
//     {
//         name: 'Bart',
//         surname: 'Simpson',
//         age: 10,
//         info: 'Бартолом\'ю ДжоДжо «Барт» Сімпсон (англ. Bartholomew JoJo «Bart» Simpson) — один із головних героїв мультиплікаційного серіалу Сімпсони. Барт — найстарша дитина Гомера і Мардж Сімпсон. У нього також є дві молодші сестри — Ліса і Меґґі. Барт є втіленням образу бешкетника та посереднього учня у школі. Разом зі своїм батьком Барт є одним із найвідоміших персонажів у цьому серіалі.',
//         photo: 'https://upload.wikimedia.org/wikipedia/uk/a/aa/Bart_simpson.png'
//     },
//     {
//         name: 'Homer',
//         surname: 'Simpson',
//         age: 40,
//         info: 'Гомер Джей Сімпсон (англ. Homer Jay Simpson) — один із головних героїв мультсеріалу «Сімпсони». Гомер — грубий і неввічливий батько родини, він має очевидні вади: товстий, лисий і не дуже розумний. Нерідко він поводиться як блазень, абсурдно, егоїстично і нетактовно, але все ж лишається симпатичним.',
//         photo: 'http://upload.wikimedia.org/wikipedia/en/0/02/Homer_Simpson_2006.png'
//     },
//     {
//         name: 'Marge',
//         surname: 'Simpson',
//         age: 38,
//         info: 'Ма́рджори Жакли́н «Мардж» Си́мпсон (в девичестве Бувье́) (англ. Marjorie Jacqueline «Marge» Simpson) — постоянный персонаж мультипликационного сериала «Симпсоны», её озвучивает Джулия Кавнер. Обычно носит зелёное платье, красные балетки, на шее — ожерелье из искусственного жемчуга и ездит на оранжевом универсале. У неё шикарные синие волосы, которые она обычно собирает в очень высокую причёску. Глаза цвета ореха (19s6e). Основное занятие — домохозяйка, большую часть времени проводит в заботе о доме, детях и Гомере. Образ Мардж копирует стереотип провинциальной американской домохозяйки 50-х годов. Мардж — единственный член семьи, посещающий церковь добровольно. Старается поддерживать нравственность не только своей семьи, но и всего города. Отлично готовит, особенно славятся её свиные отбивные и зефир. Любимое блюдо — лапша с маслом.',
//         photo: 'https://upload.wikimedia.org/wikipedia/ru/0/0b/Marge_Simpson.png'
//     },
//     {
//         name: 'Lisa',
//         surname: 'Simpson',
//         age: 9,
//         info: 'Ли́за Мари́ Си́мпсон (англ. Lisa Marie Simpson) — героиня мультипликационного сериала «Симпсоны». Средний ребёнок в семье, восьмилетняя девочка, выделяющаяся среди остальных Симпсонов прежде всего своим умом и рассудительностью.',
//         photo: 'https://upload.wikimedia.org/wikipedia/ru/e/ec/Lisa_Simpson.png'
//     },
//     {
//         name: 'Maggie',
//         surname: 'Simpson',
//         age: 1,
//         info: 'Ма́ргарет Эвелин «Мэ́гги» Си́мпсон (англ. Margaret Evelyn “Maggie” Simpson) — персонаж мультсериала «Симпсоны». Впервые появилась на телевидении в шоу Трейси Ульман, в короткометражке Good Night (англ.)русск. 19 апреля 1987 года. Мэгги была придумана и разработана карикатуристом Мэттом Грейнингом, пока он ждал встречи с Джеймсом Л. Бруксом. Названа в честь младшей сестры Грейнинга. После появления в шоу Трейси Ульман, через три года семья Симпсонов получила собственный сериал на телеканале Fox, дебют произошёл 17 декабря 1989 года.',
//         photo: 'https://upload.wikimedia.org/wikipedia/ru/9/9d/Maggie_Simpson.png'
//     },
// ];
// // Проітерувати його, створиши для кожного елементу масиву <div class='member'>.
// let memberProduct = document.getElementsByClassName('member')[0]
// for (let simpson of simpsons) {
//     let div = document.createElement('div');
//     div.className = 'member';
//     div.innerText = `${simpson.name} ${simpson.surname} ${simpson.age} ${simpson.info}`;
//     let img = document.createElement('img');
//     img.src = simpson.photo;
//
//
//     memberProduct.appendChild(div)
//     memberProduct.appendChild(img)
//     document.body.appendChild(memberProduct);
// }
//
//

// - Є масив
// let coursesArray = [
//     {
//         title: 'JavaScript Complex',
//         monthDuration: 5,
//         hourDuration: 909,
//         modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
//     },
//     {
//         title: 'Java Complex',
//         monthDuration: 6,
//         hourDuration: 909,
//         modules: ['html',
//             'css',
//             'js',
//             'mysql',
//             'mongodb',
//             'angular',
//             'aws',
//             'docker',
//             'git',
//             'java core',
//             'java advanced']
//     },
//     {
//         title: 'Python Complex',
//         monthDuration: 6,
//         hourDuration: 909,
//         modules: ['html',
//             'css',
//             'js',
//             'mysql',
//             'mongodb',
//             'angular',
//             'aws',
//             'docker',
//             'python core',
//             'python advanced']
//     },
//     {
//         title: 'QA Complex',
//         monthDuration: 4,
//         hourDuration: 909,
//         modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
//     },
//     {
//         title: 'FullStack',
//         monthDuration: 7,
//         hourDuration: 909,
//         modules: ['html',
//             'css',
//             'js',
//             'mysql',
//             'mongodb',
//             'react',
//             'angular',
//             'aws',
//             'docker',
//             'git',
//             'node.js',
//             'python',
//             'java']
//     },
//     {
//         title: 'Frontend',
//         monthDuration: 4,
//         hourDuration: 909,
//         modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
//     }
// ];
// Створити для кожного елементу масиву свій блок, блок розділити блоками, в яких будуть зберігатись значення окремих
// властивостей, для властивості modules зробити список з елементами
// Приклад структири знаходиться у файлі example.png


// for (let coursesArrayElement of coursesArray) {
//     let h1 = document.createElement('h1');
//     h1.innerText = `${coursesArrayElement.title}`;
//     let h2 = document.createElement('h2');
//
//     let overDuration = document.createElement('div');
//     let monthDuration = document.createElement('div');
//     monthDuration.innerText = coursesArrayElement.monthDuration;
//     let hourDuration = document.createElement('div');
//     hourDuration.innerText = coursesArrayElement.hourDuration;
//     overDuration.append(monthDuration, hourDuration);
//     overDuration.style.display = 'flex';
//     monthDuration.style.width = '30%';
//     hourDuration.style.width = '70%';
//
//     let div = document.createElement('div');
//     for (let coursesElement of coursesArrayElement.modules) {
//         let li = document.createElement('li');
//         li.innerText = `${coursesElement}`
//         div.appendChild(li)
//     }
//




let users = [{
    name: 'vasya',
    age: 31,
    status: false,
    address: {city: 'Lviv', country: 'Ukraine', street: 'Shevchenko', houseNumber: 1}
}, {
    name: 'petya',
    age: 30,
    status: true,
    address: {city: 'New York', country: 'USA', street: 'East str', houseNumber: 21}
}, {
    name: 'kolya',
    age: 29,
    status: true,
    address: {city: 'Budapest', country: 'Hungary', street: 'Kuraku', houseNumber: 78}
}, {
    name: 'olya',
    age: 28,
    status: false,
    address: {city: 'Prague', country: 'Czech', street: 'Paster', houseNumber: 56}
}, {
    name: 'max',
    age: 30,
    status: true,
    address: {city: 'Istanbul', country: 'Turkey', street: 'Mikar', houseNumber: 39}
}, {
    name: 'anya',
    age: 31,
    status: false,
    address: {city: 'Rio', country: 'Brasil', street: 'Ronaldi', houseNumber: 5}
}, {
    name: 'oleg',
    age: 28,
    status: false,
    address: {city: 'Montreal', country: 'Canada', street: 'Acusto', houseNumber: 90}
}, {
    name: 'andrey',
    age: 29,
    status: true,
    address: {city: 'Quebeck', country: 'Canada', street: 'Binaro', houseNumber: 33}
}, {
    name: 'masha',
    age: 30,
    status: true,
    address: {city: 'Moscow', country: 'Russia', street: 'Gogolia', houseNumber: 1}
}, {
    name: 'olya',
    age: 31,
    status: false,
    address: {city: 'Portland', country: 'USA', street: 'Forest str', houseNumber: 4}
}, {
    name: 'max',
    age: 31,
    status: true,
    address: {city: 'Cairo', country: 'Egypt', street: 'Seashore', houseNumber: 45}
}];



// - З масиву users за допомогою циклу витягнути адреси користувачів і записати (скопіювати) їх в інший порожній масив.
// let listAdresUsers = [];
// for (let user of users) {
//     listAdresUsers.push(user.address);
// }
// console.log(listAdresUsers);


// - За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement. Всі данні в одному блоці.
// for (let user of users) {
//     let userInfo = document.createElement('div');
//     userInfo.innerText = `${user.name} ${user.age} ${user.status} ${user.address.city} ${user.address.country} ${user.address.street} ${user.address.houseNumber}`;
//
//     document.body.appendChild(userInfo);
// }


// - За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement, розділивши всі властивості по
// своїм блокам (div>div*4)

// for (let user of users) {
//     let usersInfo = document.createElement('div');
//     let userName = document.createElement('div');
//     userName.innerText = user.name;
//     let userAge = document.createElement('div');
//     userAge.innerText = user.age;
//     let userStatus = document.createElement('div');
//     userStatus.innerText = user.status;
//     let userCity = document.createElement('div');
//     userCity.innerText = user.address.city;
//     let userCountry = document.createElement('div');
//     userCountry.innerText = user.address.country;
//     let userStreet = document.createElement('div');
//     userStreet.innerText = user.address.street
//     let houseNumber = document.createElement('div');
//     houseNumber.innerText = user.address.houseNumber;
//     usersInfo.style.display = 'flex'
//     usersInfo.style.columnGap = '10px'
//
//
//     usersInfo.append(userName, userAge, userStatus,userCity, userCountry, userStreet, houseNumber);
//
//
//     document.body.appendChild(usersInfo)
//
// }


// - За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement, розділивши всі властивості по своїм блокам ,
// блок з адресою зробити окремим блоком, з блоками для кожної властивості
// for (let user of users) {
//     let usersInfo = document.createElement('div');
//     let userName = document.createElement('div');
//     userName.innerText = user.name;
//     let userAge = document.createElement('div');
//     userAge.innerText = user.age;
//     let userStatus = document.createElement('div');
//     userStatus.innerText = user.status;
//
//     let adress = document.createElement('div')
//     let userCity = document.createElement('div');
//     userCity.innerText = user.address.city;
//     let userCountry = document.createElement('div');
//     userCountry.innerText = user.address.country;
//     let userStreet = document.createElement('div');
//     userStreet.innerText = user.address.street
//     let houseNumber = document.createElement('div');
//     houseNumber.innerText = user.address.houseNumber;
//     adress.append(userCity, userCountry, userStreet, houseNumber)
//
//
//     usersInfo.style.display = 'flex'
//     usersInfo.style.columnGap = '10px'
//
//
//     usersInfo.append(userName, userAge, userStatus,adress);
//
//
//     document.body.appendChild(usersInfo)
//
// }