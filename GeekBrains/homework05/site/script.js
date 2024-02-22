// const numbers = {
//     keyin1: 1,
//     keyin2: 2,
//     keyin3: 3,
//     keyin4: 4,
//     keyin5: 5,
//     keyin6: 6,
//     keyin7: 7,
// }

// for (let key in numbers) {
//     if (numbers[key] >= 3) {
//         console.log(numbers[key]);
//     }
// }

// const post = {
//     author: "John", // вывести этот текст
//     postId: 23,
//     comments: [{
//             userId: 10,
//             userName: "Alex",
//             text: "lorem ipsum",
//             rating: {
//                 likes: 10,
//                 dislikes: 2, // вывести это число
//             },
//         },
//         {
//             userId: 5, // вывести это число
//             userName: "Jane",
//             text: "lorem ipsum 2", // вывести этот текст
//             rating: {
//                 likes: 3,
//                 dislikes: 1,
//             },
//         },
//     ],
// };


// console.log(post.author); // "john"
// console.log(post.comments[0].rating.dislikes); // 2
// console.log(post.comments[1].userid); // 5
// console.log(post.comments[1].text); // "lorem ipsum 2"



// const products = [{
//         id: 3,
//         price: 200,
//     },
//     {
//         id: 4,
//         price: 900,
//     },
//     {
//         id: 1,
//         price: 1000,
//     },
// ];

// products.forEach(product => {
//     product.price = product.price * 0.85;
// });

// console.log(products);


// const products = [{
//         id: 3,
//         price: 127,
//         photos: [
//             "1.jpg",
//             "2.jpg",
//         ],
//     },
//     {
//         id: 5,
//         price: 499,
//         photos: [],
//     },
//     {
//         id: 10,
//         price: 26,
//         photos: [
//             "3.jpg",
//         ],
//     },
//     {
//         id: 8,
//         price: 78,
//     },
// ];

// const productsWithPhotos = products.filter(product => product.photos && product.photos.length > 0);
// const sortedProducts = products.sort((a, b) => a.price - b.price);

// console.log(productsWithPhotos);
// console.log(sortedProducts);

// const en = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];
// const ru = ["понедельник", "вторник", "среда", "четверг", "пятница", "суббота", "воскресенье"];

// const combinedArrays = en.reduce((obj, key, index) => {
//     obj[key] = ru[index];
//     return obj;
// }, {});

// const en = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];
// const ru = ["понедельник", "вторник", "среда", "четверг", "пятница", "суббота", "воскресенье"];

// const combinedArray = en.reduce((acc, curr, index) => {
//     acc[curr] = ru[index];
//     return acc;
// }, {});

// console.log(combinedArray);


// {
//     mon: "понедельник",
//     tue: "вторник",
//     wed: "среда",
//     thu: "четверг",
//     fri: "пятница",
//     sat: "суббота",
//     sun: "воскресенье"
// }