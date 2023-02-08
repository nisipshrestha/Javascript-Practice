/* Objects */

const data = { firstName: 'nisip', lastName: '' };

/* Direct object access */
console.log(data.firstName);

/* Dynamic property access */
console.log(data['firstName']);

/* Object access through variable */
const dynamicVariable = 'firstName';

/* Dynamic property assignment */
data['firstName'] = 'Amar';

/* Assigning property through vairable */
const assignmentVariable = 'lastName';
data[assignmentVariable] = 'Dev'
console.log(data[dynamicVariable], data[assignmentVariable]);