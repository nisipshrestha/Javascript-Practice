/* 
    String split
*/


// const tempString = "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi, ratione distinctio? Omnis quod soluta labore doloribus enim repellendus amet delectus.";
// console.log(tempString.split(''));
const tempString = "Lorem, ipsum, dolor, sit, amet.";

const strArray = tempString.split(',');
/* // UPPER CASE
strArray.forEach(each =>{
    console.log(each.toUpperCase(),'-- UPPERCASE');
});


// LOWER CASE
strArray.forEach(each => {
    console.log(each.toLocaleLowerCase(), '-- LOWERCASE');
}); */

const userName = 'USERNAME';
// GET userDetail
function fetchUserDetail(param) {
    console.log(param, 'Fetched user detail...');
}


if (userName.toLocaleLowerCase() === 'username') {
    fetchUserDetail(userName.toLocaleLowerCase());
}

