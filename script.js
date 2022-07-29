// let array1 = ['a', 'b', 'c', 'd', 'e'];
// let out = '';

// let out = '';
//
// for (let i = 1; i < array1.length; i++) {
//     out += array1[i] + ' ';
// }

// for (let i = 0; i < array1.length; i++) {
//     out += `${i}:${array1[i]} `;
// }

// for (let i = 0; i < array1.length; i++) {
//     if (i % 2 === 0) {
//         out += array1[i] + '_';
//     }
// }



// for (let i = 0; i < array1.length; i++) {
//     if (i % 2 !== 0) {
//         out += array1[i] + '_';
//     }
// }


// const array2 = ['a', 22, 35, 'b', 3, 2, 'c', 5, 'd', '77', 8, 'e', 9];

// for (let i = 0; i < array2.length; i++) {
//     if (typeof array2[i] === 'string') {
//         out += array2[i] + ' ';
//     }
// }

// for (let i = 0; i < array2.length; i++) {
//     if (typeof array2[i] === 'number' && array2[i] % 2 === 0) {
//         out += array2[i] + ' '
//     }
// }


// array2 = ['a', 22, 35, 'A', 'b', 3, 'B', 2, 'c', 5, 'd', 77, 'F', 8, 'e', 9];

// for (let i = 0; i < array2.length; i++) {
//     if (typeof array2[i] === 'string' && array2[i] === array2[i].toLowerCase()) {
//         out += array2[i] + ' '
//     }
// }

// let array3 = [['a', 'b', 'c'], ['A', 'B', 'C'], [1, 2, 3]];
//
//
// for ( let i = 0; i < array3.length; i++) {
//     for ( let k = 0; k < array3[i].length; k++) {
//         out += array3[i][k] + ' ';
//     }
// }

// let array3 = [['a', 'b', 1, 'c'], ['A', 3, 'B', 'C'], [1, 'A', 2, 3, 'c']];

// for ( let i = 0; i < array3.length; i++) {
//     for (let k = 0; k < array3[i].length; k++) {
//         if (typeof array3[i][k] === 'number') {
//             out += array3[i][k] + ' ';
//         }
//     }
// }

//
// let array4 = [34, 'name', {name: 'Ivan',age: 25}, {name: 'Olga',age: 44}, 'age', 22,]
//
// let out = [];

// for ( let i = 0; i < array4.length; i++) {
//     if (typeof array4[i] === 'object') {
//         out.push(array4[i]);
//     }
// }

// for ( let i = 0; i < array4.length; i++) {
//     if (typeof array4[i] === 'object' && array4[i].name === 'Ivan') {
//         array4[i].job = 'programer';
//     }
// }


// console.log(array4);



// const arr1 = ['hello', 'world', 23, '23', null];
// const arr2 = ['string', 'number', 'object', 'boolean', undefined];

// function filterBy(a, b) {
//     let arrFiltered;
//     for (let element of b) {
//         if (element === typeof a[1]) {
//             arrFiltered = a.filter(date => typeof date !== typeof a[1])
//         }
//     }
//     return arrFiltered;
// }