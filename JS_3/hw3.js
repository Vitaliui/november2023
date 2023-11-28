// // // - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині
//
// for (let i = 0; i < 10; i++) {
//     document.write(`<div><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum, eligendi.</p></div>`);
// }
//
//
// // // - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині
//
// for (let i = 1; i < 11; i++) {
//     document.write(`<div><p>#${i}Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p></div>`);
// }
//
// // - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.
//
// let i = 0;
// while (i < 20) {
//     document.write(`<h1>Lorem ipsum dolor sit amet.</h1>`);
//     i++;
// }
//
//
// // - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.
//
// let j = 0;
// while (j < 20) {
//     document.write(`<h1>${j}Lorem ipsum dolor sit amet.</h1>`);
//     j++;
// }
//
// // - Використовуючи данні з масиву, за допомоги document.write та циклу
// // побудувати структуру по шаблону
// // Масив:
// //
// //     let listOfItems = ['html', 'css', 'javascript', 'mysql', 'mongodb', 'react', 'angular', 'node.js'];
// //
// // ШАБЛОН:
// //     <ul>
// //         <li>ITEM OF ARRAY</li>
// //         <!--
// //             і тд інші об'єкти масиву
// //              ...
// //              ...
// //              ...
// //         -->
// //     </ul>
// //
// // замість 'ITEM OF ARRAY' підставити елемент з масиву щоб получився цілий список з даними з масиву
//
// let listOfItems = ['html', 'css', 'javascript', 'mysql', 'mongodb', 'react', 'angular', 'node.js'];
// //
// // // document.write(`<ul>`);
// // // for (let i = 0; i < listOfItems.length; i++) {
// // //     let listOfItem = listOfItems[i];
// // //     console.log(listOfItems[i]);
// // //     document.write(`<li>${listOfItem}</li>`)
// // // }
// // // document.write(`</ul>`);
//
// for (const item of listOfItems) {
//     document.write(`<li>${item}</li>`)
// }
//
//
// // -----------------------------------------------
// //
// //     Використовуючи данні з масиву, за допомоги document.write та циклу
// // побудувати структуру по шаблону
// // Великими літерами прописанні властивості об'єкту які потрібно впровадити в шаблон
// //
//

let products = [
    {
        title: 'milk',
        price: 22,
        image: 'https://www.mcqueensdairies.co.uk/wp-content/uploads/2019/02/Mcqueens_1litre_whole_organic-300x300-3.jpg'
    },
    {
        title: 'juice',
        price: 27,
        image: 'https://images-na.ssl-images-amazon.com/images/I/61jL2GCuKLL._SX679_PIbundle-24,TopRight,0,0_AA679SH20_.jpg'
    },
    {
        title: 'tomato',
        price: 47,
        image: 'https://dictionary.cambridge.org/ru/images/thumb/tomato_noun_001_17860.jpg?version=5.0.74'
    },
    {
        title: 'tea',
        price: 15,
        image: 'https://yogiproducts.com/wp-content/uploads/2009/03/YT-US-CAR-RelaxedMind-C23-202201-V2-3DFront_withGlow-300DPI-1.png'
    },
];
//
// ШАБЛОН
// <div class="product-card">
//     <h3 class="product-title">TITLE. Price - PRICE</h3>
// <img src="IMAGE" alt="" class="product-image">
// </div>
// Замість TITLE PRICE IMAGE - підставити відповідні поля з об'єкту

// document.write(`<div class="product-card">`)
// for (const product of products) {
//     document.write(`<h3 class="product-title">${product.title}. Price - ${product.price}</h3>`)
//     document.write(`<img src="${product.image}" alt="" class="product-image">`)
//
// }
// document.write(`</div>`);




// --------------------
//     є масив
let users = [
    {name: 'vasya', age: 31, status: false},
    {name: 'petya', age: 30, status: true},
    {name: 'kolya', age: 29, status: true},
    {name: 'olya', age: 28, status: false},
    {name: 'max', age: 30, status: true},
    {name: 'anya', age: 31, status: false},
    {name: 'oleg', age: 28, status: false},
    {name: 'andrey', age: 29, status: true},
    {name: 'masha', age: 30, status: true},
    {name: 'olya', age: 31, status: false},
    {name: 'max', age: 31, status: true}
];
// за допомоги циклу вивести:
//     - користувачів зі статусом true
for (const user of users) {
    if (user.status){
        console.log(user)
        document.write(`<div>${user.name} - ${user.status}</div>`)
    }
}
// - користувачів зі статусом false

for (const user of users) {
    if (!user.status) {
        console.log(user)
        document.write(`<div>${user.name} - ${user.status}</div>`)
    }
}
// - користувачів які старші за 30 років

for (const user of users) {
    if (user.age > 30) {
        console.log(user)
        document.write(`<div>${user.name} - ${user.age}</div>`)
    }
}

// for (const user of users) {
//     if (user.status === true){
//         console.log(user);
//     }
// }
//
// for (const user of users) {
//     if (user.status === false){
//         console.log(user);
//     }
// }
//
// for (const user of users) {
//     if (user.age > 30){
//         console.log(user);
//     }
// }


let booksArr = [
    {
        title: 'QWERT',
        page: 333,
        genre: ['Fantasy'],
        author: ['Kolya']
    },
    {
        title: 'QWERTQWT',
        page: 123,
        genre: ['Fantasy','SCI-FI'],
        author: ['Kolya','Petya']
    },
    {
        title: 'ASD',
        page: 740,
        genre: ['Classic'],
        author: ['Yulia','Sveta','Max']
    },
    {
        title: 'QWERTASDQWEEEEEEE',
        page: 53,
        genre: ['SCI_FI'],
        author: ['Petya']
    }
];
// -знайти найбільшу книжку.

let resultBook = booksArr[0];
for (const book of booksArr) {
    if (book.page > resultBook.page){
        resultBook = book;
    }
}
console.log(resultBook);

// - знайти книжку/ки з найдовшою назвою

let resultBook1 = booksArr[0];
for (const book of booksArr) {
    if (book.title.length > resultBook.title.length){
        resultBook1 = book;
    }
}
console.log(resultBook1);

// - знайти книжку/ки які писали 2 автори
let resultBook2 = [];
for (const book of booksArr) {
    if (book.author.length === 2){
        resultBook2[resultBook2.length] = book;
    }
}
console.log(resultBook2);


// - знайти книжку/ки які писав 1 автор

let resultBook3 = [];
for (const book of booksArr) {
    if (book.author.length === 1){
        resultBook3[resultBook3.length] = book;
    }
}
console.log(resultBook3);