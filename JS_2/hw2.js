// Масиви та об'єкти:
// - Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль

let arr = [12,2.7,105,false, 'ssasf',true, [], {}, 'text', 100500 ]
console.log(arr);
// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre.

let book = {
    title: 'It',
    pageCount: 1300,
    genre:'fantasy ,horror',
}
console.log(book);
// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors. Поле "автори" - являється  масивом. Кожен автор має поля name та age.

let book1 = {
    title: '2022',
    pageCount: 1300,
    genre: 'horror',
    authors: [
        {name: 'Stephen Edwin King',age:76},
        {name:'Bret Easton Ellis',age:59}
    ]
}

console.log(book1);
console.log(book1.authors);
// - Створити масив з 10 об'єктами які описують сутніть "користувач". Поля: name, username,password. Вивести в консоль пароль кожного користувача

let users = [
    {name: 'vasya', username: 'VasyaVane', password: 12345},
    {name: 'max', username: 'MinMax', password: 13245},
    {name: 'kolya', username: 'Pskolya', password: 14235},
    {name: 'anna', username: 'NanaAnna', password: 15243},
    {name: 'masha', username: 'Ammasha', password: 12435},
    {name: 'olya', username: 'OlyaJr', password: 12341},
    {name: 'vika', username: 'Exvika', password: 12342},
    {name: 'oleg', username: 'Olegix', password: 12343},
    {name: 'andriy', username: 'Chandriy', password: 12344},
    {name: 'svitlana', username: 'TinSvita', password: 12354},
];
console.log(users[0].password);
console.log(users[1].password);
console.log(users[2].password);
console.log(users[3].password);
console.log(users[4].password);
console.log(users[5].password);
console.log(users[6].password);
console.log(users[7].password);
console.log(users[8].password);
console.log(users[9].password);

// Логічні розгалуження:
//     - Є змінна х, якій ви надаєте довільне числове значення.
//     Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3

let x = 0;
if (x === 0) {
    console.log('Вірно');
}else {
    console.log('Невірно');
}
// - Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
// (в першу, другу, третю или четверту частину години).

// let time = +prompt('Введіть число від 0 до 59');
// if ( time >= 0 && time <= 15) {
//     console.log('Перша частина');
// }else if( time >= 15 && time <= 29) {
//     console.log('Друга частина');
// }else if( time >= 30 && time <= 44) {
//     console.log('Третя частина');
// }else if (time >= 45 && time <= 59) {
//     console.log('Четверта частина')
// }else {
//     console.log('Ваше число не підходить')
// }

// - У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).



// let day = +prompt('Введіть число')
// if (day >= 1 && day <= 9) {
//     console.log('Перша декада');
// }else if(day >= 10 && day <= 19) {
// console.log('Друга декада');
// }else if(day >= 20 && day <= 31) {
//     console.log('Третя декада');
// } else {
//     console.log('Ваше число не вірне')
// }

// - Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані відображається інфа що заплановано на цей день (можна замість плану на день, назву дня англійською).
//     - Користувач вводить або має два числа.
//         Потрібно знайти та вивести максимальне число з тих двох .
//         Також потрібно врахувати коли введені рівні числа.



// let timetable = +prompt('Введіть число тижня');
// switch (timetable) {
//     case 1:
//         console.log('Monday');
//         break;
//     case 2:
//         console.log('Tuesday');
//         break;
//     case 3:
//         console.log('Wednesday');
//         break;
//     case 4:
//         console.log('Thursday');
//         break;
//     case 5:
//         console.log('Friday');
//         break;
//     case 6:
//         console.log('Saturday');
//         break;
//     case 7:
//         console.log('Sunday');
//     break;
//     default:
//         console.log('В тижні тільки 7 днів');
// }



//     - є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно). Напишіть код який,
//         за допомоги  оператора || буде присвоювати змінній х значення "default"  якщо значення змінної х являється falsy (хибноподібні, тобто приводиться до false)


// let x1 = prompt('Введіть x1');
// if ( x1 === 0 || x1 === '' || isNaN(x1) || x1 === undefined || x1 === false){
//     x1 = 'default';
//     console.log(x1);
// }


//     - з файлу arrays.js (лежить в папці 2023 plan ) взяти масив coursesAndDurationArray. За допомоги іф перевірити кожен його елемент на тривалість навчання. У випадку якщо тривалість довша за 5 місяців вивести в консоль "Супер".

let coursesAndDurationArray =[
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];

if (coursesAndDurationArray[0].monthDuration > 5){
    console.log('Супер');
}else if(coursesAndDurationArray[0].monthDuration <= 5){
    console.log('Не задовільно');
}

if (coursesAndDurationArray[1].monthDuration >5){
    console.log('Cупер')
}else if(coursesAndDurationArray[1].monthDuration <=5){
    console.log('Не задовільно');
}


if (coursesAndDurationArray[2].monthDuration >5){
    console.log('Cупер')
}else if(coursesAndDurationArray[2].monthDuration <=5){
    console.log('Не задовільно');
}


if (coursesAndDurationArray[3].monthDuration >5){
    console.log('Cупер')
}else if(coursesAndDurationArray[3].monthDuration <=5){
    console.log('Не задовільно');
}


if (coursesAndDurationArray[4].monthDuration >5){
    console.log('Cупер')
}else if(coursesAndDurationArray[4].monthDuration <=5){
    console.log('Не задовільно');
}


if (coursesAndDurationArray[5].monthDuration >5){
    console.log('Cупер')
}else if(coursesAndDurationArray[5].monthDuration <=5){
    console.log('Не задовільно');
}