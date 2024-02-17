// console.log(`${0} - это ноль`);
// for (let i = 1; i <= 10; i++) {
//     if (i % 2 == 0) {
//         console.log(`четное число ${i}`);
//     }
//     if (i % 2 != 0) {
//         console.log(`нечетное число ${i}`);
//     }

// }

// const arr = [1, 2, 3, 4, 5, 6, 7];
// const index = arr.indexOf(4);
// const index1 = arr.indexOf(5);
// if (index > -1) {
//     arr.splice(index, 1);
// }
// if (index1 > -1) {
//     arr.splice(index1, 1);
// }
// console.log(arr);

// const arr = [];
// for (let i = 0; i < 5; i++) {
//     const randomNumber = Math.floor(Math.random() * 10);
//     arr.push(randomNumber);
// }

// const sum = arr.reduce((acc, curr) => acc + curr, 0);
// const min = Math.min(...arr);
// const includesThree = arr.includes(3);

// console.log(arr); // Выводим массив
// console.log(sum); // Выводим сумму элементов
// console.log(min); // Выводим минимальное число
// console.log(includesThree); // Выводим есть ли число 3 в массиве


for (x = 0; x < 20; x++) {
    let str = "";
    for (y = 0; y <= x; y++) {
        str += "*";
    }
    console.log(str);
}