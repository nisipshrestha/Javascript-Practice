/* Data types */

const collection = [
    1, '1', [], {}, new Date()
];

collection.forEach(each => {
    console.log(each, typeof each)
});