/* Object keys */
const data = {
    firstName: 'nisip',
    lastName: 'shrestha',
    address: 'sanepa',
    phone: '1213'
}
/* Lists all the keys in the object */
// console.log(Object.keys(data));

/* Object values */
// console.log(Object.values(data));

/* Object entries */
const entriesArray = Object.entries(data);
// console.log(entriesArray);

/* Object fromEntries */
// console.log(Object.fromEntries(entriesArray));

const keyValArr = [
    ['firstName', 'nisip'],
    ['lastName', 'shrestha'],
    ['address', 'asdf'],
    ['phone', '123'],
    ['email', 'asd@asd.com']
];

let key, value;
const result = keyValArr.reduce((acc, curr) => {
    key = curr[0];
    value = curr[1];
    acc[key] = value;
    return acc;
}, {});


console.log(result);