// let arr = [11,'dasd',true,[]];
// console.log(arr[0]);
// arr[0] = 100500;
// console.log(arr);
// console.log(arr,length)
// console.log
//
//
// let user1_age = 31;
// let user1_name = 'vasta';
// let user1_status = true;

// let user1 = {
//     age: 31,
//     name: 'vasta',
//     status: true,
//     skills: [
//         {plang: 'html', exp: 1},
//         {plang: 'css', exp: 1},
//         {plang: 'js', exp: 2}
//     ],
//     dog: {
//         nickname: 'fluffy',
//         age: 2,
//         breed: 'spaniel'
//     }
// }
// console.log(user1);
// console.log(user1.skills);
// console.log(user1.skills[2]);
// console.log(user1.skills[2].exp);
// console.log(user1.dog.age);
//
// console.log(user1['age']);
// console.log(user1['skills'][0]['plang']);
//
// user1.wife = {
//     name: 'olya',
//     age: 19
// }
//
// console.log(user1);
//
//
// user1.skills[user1.skills.length] = {plang: 'java', exp: 1}
// console.log(user1);
//
// user1.skills[user1.skills.length] = {plang: 'c#', exp: 1234, status: false}
//
//
// let XXX = [];
//
// console.log(typeof XXX);
// console.log(Array.isArray(XXX));

// let a = 0;
// let b = a;
// b = 100500;
//
// console.log(a,b);
//
// let obj1 = {};
// let obj2 = obj1;
// console.log(obj1,obj2);
//
// obj2.id = 100500;
// obj2.name = 'kokos';
// console.log(obj2);
//
// console.log(obj1);

// let color = prompt('який колір ти бачиш?');
//
// if (color === 'green') {
//     console.log('go');
// } else if (color === 'yellow') {
//     console.log('wait');
// } else if (color === 'red') {
//     console.log('stop');
// } else {
//     console.log('call to service');
// }


// let color = prompt('який колір ти бачиш?');
// switch (color) {
//     case 'green':
//         console.log('go');
//         break;
//     case 'yellow':
//         console.log('wait');
//         break;
//
//     default:
//         console.log('call to service');
// }


let color = 'green';
let isRoadClear = 'yes';

if (color === 'red') {
    if (isRoadClear === 'yes'){
    console.log('go');
    }
} else if (color === 'green' && isRoadClear === 'yes') {
    console.log('wait');
} else if (color === 'yellow' && isRoadClear === 'no') {
    console.log('stop');
} else {
    console.log('call to service');
}

