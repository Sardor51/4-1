let imya =prompt('Введите свое имя')
let born =+prompt('Введите свой год рождения')
let year =+prompt('Введите нынешний год')
let result =function(){
    let sum =year-born;
    return sum
}
console.log(imya + ', Ваш возраст '+result());