// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б

function area1(a,b){
    return a * b;
}

console.log(area1(5,5));
// - створити функцію яка обчислює та повертає площу кола з радіусом r
function area2(r) {
    return Math.PI * Math.pow(r, 2);
}

console.log(area2(8));
// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
function  area3(r,h) {
    return 2 * Math.PI * r *h;
}

console.log(area3(3,5));
// - створити функцію яка приймає масив та виводить кожен його елемент
function  massive(arr) {
    for (const item of arr) {
        console.log(item);
    }
}

massive([12,65,'asdasd',0,null]);
// - створити функцію яка створює параграф з текстом. Текст задати через аргумент
function paragraph(text) {
    document.write(`<p>${text}</p>`)
}

paragraph('ses sps oss');
// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
function createUl(text) {
    document.write(`
    <ul>
        <li>${text}</li>
        <li>${text}</li>
        <li>${text}</li>
    </ul>`);
}

createUl('basdas asdas ada')
// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
function createUl3(text,count) {
    document.write(`<ul>`);
    for (let i = 0; i < count; i++) {
        document.write(`<li>${text}</li>`);
    }
    document.write(`</ul>`);
}

createUl3('sadas asdas sdadas',5);
// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
function massive3(arr) {
    document.write(`<ul>`);
    for (const item of arr) {
        document.write(`<li>${item}</li>`)
    }
    document.write(`</ul>`);
}

massive3(['asdasd', 123, 645, `lsolsa`,true,`lab`]);
// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.

const users = [
    {name: 'vasya', age: 31, id: 1},
    {name: 'petya', age: 30, id: 2},
    {name: 'kolya', age: 29, id: 3},
    {name: 'olya', age: 28, id: 4},
    {name: 'max', age: 30, id: 5},
    {name: 'anya', age: 31, id: 6},
    {name: 'oleg', age: 28, id: 7},
    {name: 'andrey', age: 29,id: 8},
    {name: 'masha', age: 30, id: 9},
    {name: 'olya', age: 31, id: 10},
    {name: 'max', age: 31, id: 11}
];
function massive4() {
    for (const user of users) {
        document.write(`<div>${user.id} - ${user.name} - ${user.age}</div>`)
    }
}

massive4(users);
// - створити функцію яка повертає найменьше число з масиву
const numbers = [-51, 23, 32, 21 ,-254, 792, 3, 5, 0];

function minArr(arr) {
    let min = arr[0];
    for (const num of arr) {
        if (min > num) {
            min = num;
        }
    }
    return min;

}
console.log(minArr(numbers))
// - створити функцію sum(arr)яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13
function sum(arr) {
    let result = 0;
    for (const num of arr) {
        result = result + num;
    }
    return result;

}
console.log(sum([1,2,10]));
// - створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відаовідних індексах
// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]
function swap(arr,index1,index2) {
    const num = arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = num;

    return arr;

}

console.log(swap([11,22,33,44],0,1));
// - Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// Приклад exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD') // => 250

function exchange(sumUAH,currencyValues,exchangeCurrency) {
    for (const currency of currencyValues) {
        if (currency.currency === exchangeCurrency) {
            return sumUAH / currency.value
        }
    }
}


const currencies = [{currency:'USD',value:40},{currency:'EUR',value:42}]

console.log(exchange(10000, currencies, 'USD'));
console.log(exchange(10000, currencies, 'EUR'));