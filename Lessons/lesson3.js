// let a = 0;
// a = a + 1; // a = 0 +1 = 1
// a += 1; // a = 1 + 1 = 2
// a++; // 3
// ++a; // 4

// let x = 0;
// let y = x++;
// console.log(x,y);

// for (let i = 0; i < 10; i++) {
//     console.log(i);
// }


// Цикл який перебирає масив

// debugger;
// let users = [
//     {name: 'vasya', username: 'VasyaVane', password: 12345},
//     {name: 'max', username: 'MinMax', password: 13245},
//     {name: 'kolya', username: 'Pskolya', password: 14235},
//     {name: 'anna', username: 'NanaAnna', password: 15243},
//     {name: 'masha', username: 'Ammasha', password: 12435},
//     {name: 'olya', username: 'OlyaJr', password: 12341},
//     {name: 'vika', username: 'Exvika', password: 12342},
//     {name: 'oleg', username: 'Olegix', password: 12343},
//     {name: 'andriy', username: 'Chandriy', password: 12344},
//     {name: 'svitlana', username: 'TinSvita', password: 12354},
//     {name: 'sax', username: 'TinSvita', password: 12354},
// ];
//
// for (let i = 1; i < users.length; i+=2) {
//     console.log(users[i]);
// }


// let users = [
//     {skills:['html', 'js', 'node'], name: 'vasya', age: 21, status: true},
//     {skills:['html', 'js', 'node'], name: 'max', age: 22, status: false},
//     {skills:['html', 'js', 'node'], name: 'kolya', age: 23, status: true},
//     {skills:['html', 'js', 'node'], name: 'anna', age: 25, status: false},
//     {skills:['html', 'js', 'node'], name: 'masha', age: 26, status: true},
//     {skills:['html', 'js', 'node'], name: 'olya', age: 21, status: false},
//     {skills:['html', 'js', 'node'], name: 'vika', age: 30, status: true},
//     {skills:['html', 'js', 'node'], name: 'oleg', age: 30, status: false},
//     {skills:['html', 'js', 'node'], name: 'andriy', age: 31, status: true},
//     {skills:['html', 'js', 'node'], name: 'svitlana', age: 25, status: false},
// ];

// for (let i = 0; i < users.length; i++) {
//     const user = users[i];
//     if (!user.status) {
//         console.log(user);
//     }
// }

// for (const user of users) {
//     if (user.age > 29) {
//         console.log(user);
//     }
// }

// const x = [];
// // x = [1,2,3];  error
// x[0] = 'asdas';
// console.log(x);



// for (const user of users) {
//     let skills = user.skills;
//     for (const skill of skills) {
//         console.log(skill);
//     }
//     console.log('-------------');
// }

// for (let days = 1; days <= 2; days++) {
//     for(let hours = 1; hours < 24; hours++) {
//         console.log(days, hours);
//     }
// }

// let car = {
//     id: 1,
//     model: 'subaru',
//     power: 200,
//     status: true,
//     parts: [111, 222, 333]
// };
//
// // console.log(car['id']);
// // console.log(car['model']);
//
//
// //itar  for
// //iter for of
// //itin  for in
//
// for (let carKey in car) {
//
//     console.log(carKey, car[carKey]);
// }

// document.write('<div>hello</div>');
// document.write('<div>hello</div>');
// document.write('<div>hello</div>');
// document.write('<div>hello</div>');
// document.write('<div>hello</div>');
//
let users = [
    {name: 'vasya', age: 21, status: true},
    {name: 'max', age: 22, status: false},
    {name: 'kolya', age: 23, status: true},
    {name: 'anna', age: 25, status: false},
    {name: 'masha', age: 26, status: true},
    {name: 'olya', age: 21, status: false},
    {name: 'vika', age: 30, status: true},
    {name: 'oleg', age: 30, status: false},
    {name: 'andriy', age: 31, status: true},
    {name: 'svitlana', age: 25, status: false},
];

document.write('<ul>');

for (const user of users) {
    document.write('<li>');

    for (const userKey in user) {
        document.write(`${userKey} - ${user[userKey]}`);
    }
    document.write('</li>');
}

document.write('</ul>');



let i = 0;
while (i < users.length) {
    console.log(users[i]);
    i++;
}

do {
    console.log('dadasda');
} while (false)