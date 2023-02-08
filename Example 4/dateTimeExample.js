/* Datetime */

/* Date to string */
// currDate = new Date();
// console.log(currDate.toString());

/* Date in milliseconds */
const currDate =Date.now();
// console.log(new Date(currDate));
// console.log(new Date().toDateString());

/* WORKS IN NODE 14+ */
console.log('UK locale (Great Britain)', new Date().toLocaleString("en-GB"));
console.log('US locale', new Date().toLocaleString("en-US"));
console.log('New Zealand locale', new Date().toLocaleString("en-NZ"));
console.log('South Africa locale', new Date().toLocaleString("en-ZA"));

console.log('utc date', new Date().toUTCString());
console.log('iso date', new Date().toISOString());

// console.log(new Date().toTimeString());

console.log(new Date().getMonth());

