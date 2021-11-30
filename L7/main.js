// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об'єктами new User(....)

// class User{
//     constructor(id,name,surname,email,phone) {
//         this.id=id;
//         this.name = name;
//         this.surname = surname;
//         this.email = email;
//         this.phone = phone;
// }}
//
// let newarray = []
// for (i = 1;i<10+1;i++){
//     let user= new User(i)
//     newarray.push(user)
//
// }
// console.log(newarray)
//

// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)

// function filterarray(arr){
//     let arrfilter = newarray.filter(value => value.id%2===0)
//     console.log(arrfilter)
// }
// filterarray(newarray)



// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)

// function sortarray(arr){
//     let arrsort = newarray.sort((a, b) => a.id-b.id)
//     console.log(arrsort)
// }
//
// sortarray(newarray)



// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
// створити пустий масив, наповнити його 10 об'єктами Client


// class Client{
//     constructor(id, name, surname , email, phone, order=[]) {
//         this.id=id;
//         this.name=name;
//         this.surname=surname;
//         this.email=email;
//         this.phone=phone;
//         this.order=order;
//     }
// }
//
// let commodityarr = []
// function commodity (arr){
//     for (i=1;i<10+1;i++){
//         let client =new Client(i,'Gosha','Petrov','wcerce@dd.com','03259842', i)
//         commodityarr.push(client)
//         }console.log(commodityarr)
//
// }
// commodity(commodityarr)


// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)


// function commoditysort (arr){
//     let finishsortarr = commodityarr.sort((a, b) => a.order.length-b.order.length)
//     console.log(finishsortarr)
// }
// commoditysort(commodityarr)


// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car

// function Car(model,made,madeInYear,maxSpeed,capacityEnergie){
//     this.model=model;
//     this.made=made;
//     this.madeInYear=madeInYear;
//     this.maxSpeed=maxSpeed;
//     this.capacityEnergie= capacityEnergie
//
//     this.drive = function (maxSpeed){
//         return console.log(`їдемо зі швидкістю ${maxSpeed} на годину`)
//     }
//     this.info = function (){
//         console.log(
//             {model:model},
//             {made:made},
//             {madeInYear:madeInYear},
//             {maxSpeed:maxSpeed},
//             {capacityEnergie:capacityEnergie}
//         )
//     }
//     this.increaseMaxSpeed = function (newSpeed){
//         console.log({maxSpeed:newSpeed});
//     }
//     this.changeYear = function (newValue){
//         console.log({madeInYear:newValue});
//     }
//     this.addDriver = function (driver){
//         this.driver={'name':'Vasya', 'age':22}
        // console.log(driver)
    // }
//
// }
// let car = new Car('Ford','USA',2021,260,2)
// car.drive(250)
// car.info()
// car.increaseMaxSpeed(320)
// car.changeYear(1989)
// car.addDriver(driver={'name':'Vasya', 'age':22})
// console.log(car)


// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car

// class Car{
//     constructor(model,made,madeInYear,maxSpeed,capacityEnergie) {
//         this.model = model;
//         this.made=made;
//         this.madeInYear=madeInYear;
//         this.maxSpeed=maxSpeed;
//         this.capacityEnergie=capacityEnergie;
//
//     }
//     drive(){
//         console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`)
//     }
//     info(){
//         console.log(Object.entries(car))
//     }
//     increaseMaxSpeed (newSpeed){
//         this.maxSpeed=newSpeed;
//         console.log(Object.entries(car));
//     }
//     changeYear (newValue){
//         this.madeInYear=newValue;
//         console.log(Object.entries(car));
//     }
//     addDriver (driver){
//         this.driver={'name':'Vasya', 'age':22}
//         console.log(Object.entries(car))
//     }
//
// }
// let car = new Car('Ford','USA',2021,260,2)
// console.log(car)
//
// car.drive()
// car.info()
// car.increaseMaxSpeed(320)
// car.changeYear(1989)
// car.addDriver()
// console.log(car)



// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.
//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку

// class Cinderella{
//     constructor(name,age,sizeLeg) {
//         this.name=name;
//         this.age=age;
//         this.sizeLeg=sizeLeg;
//         }
//
// }
//
// let cinderella1=new Cinderella('Olya',21,34)
// let cinderella2=new Cinderella('Masha',22,35)
// let cinderella3=new Cinderella('Katya',23,36)
// let cinderella4=new Cinderella('Valya',24,37)
// let cinderella5=new Cinderella('Olya',25,38)
// let cinderella6=new Cinderella('Masha',26,39)
// let cinderella7=new Cinderella('Olya',27,40)
// let cinderella8=new Cinderella('Katya',28,38)
// let cinderella9=new Cinderella('Olya',29,37)
// let cinderella10=new Cinderella('Valya',30,41)
//
// let cinderellaarr = [
//     cinderella1,
//     cinderella2,
//     cinderella3,
//     cinderella4,
//     cinderella5,
//     cinderella6,
//     cinderella7,
//     cinderella8,
//     cinderella9,
//     cinderella10]
//
// class Prince{
//     constructor(name,age,sizeLeg) {
//         this.name=name;
//         this.age=age;
//         this.sizeLeg=sizeLeg;
//     }
// }
// let price=new Prince('Katya',23,36)
//
// for (i=0;i<cinderellaarr.length;i++){
//     if (cinderellaarr[i]['name']===price.name){
//         if (cinderellaarr[i]['age']===price.age){
//             if ( cinderellaarr[i]['sizeLeg']===price.sizeLeg ){
//                 console.log([i+1],cinderellaarr[i])
//             }
//         }
//     }
//
// }
//
//
//
// function getCinderella(){
//     let getCinderellaarr = cinderellaarr.filter(value => value.name===price.name && value.age===price.age && value.sizeLeg===price.sizeLeg)
//     console.log(getCinderellaarr)
// }
//
// getCinderella(cinderellaarr)

