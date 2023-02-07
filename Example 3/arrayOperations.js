/* Array length */
const array1 = [1, 3, 5, 1, 2, 3];
console.log(array1.length);

/* Array includes */
const array2 = [1, 'a', 'A', 'asD', { a: 123 }];
console.log(array2.includes('a'));

// Array checks object by it's memory reference.
const obj1 = { a: 1 }
const obj2 = { a: 2 }
// [ { a: 1 } ]
const array3 = [obj1];
// value of obj1 is same as {a: 1 } but memory reference differs.
console.log(array3.includes({ a: 1 }));


/* Array sort */
const array4 = ['a', 'f', 'g', 'c'];
const array5 = [1, 10, 2, 100, 20, 4];
// console.log(array4.sort((a,b)=> console.log({a,b})||b.localeCompare(a)));
// console.log(array5.sort((a, b) => b - a));

/* Array slice */
const array6 = [1, 2, 3, 4, 5, 6, 7, 8];
const tempArray = array6.slice(-1);
// console.log({ array6, tempArray });

/* Array map */
const newArr = array6.map(each => each + '_test');
newArr.push(321)
// console.log(newArr, array6);

/* Array find */
// console.log('array find', array6.find(each => each % 2 ==0));

/* Array filter */
console.log('array filter', array6.filter(each => each % 2 == 0));

/* Array reduce */
const array7 = [1, 2, 3, 4, 5, 6];
// console.log(array7.reduce((a,b) => console.log({a,b})||a+b));

/* Add only even numbers */
console.log(array7.reduce((acc, curr) => curr % 2 == 0 ? acc + curr : acc, 0));


