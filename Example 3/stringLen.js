/* 
String Length.
*/

const tempString = "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Explicabo dolorum aliquid quis voluptatum nesciunt. Quas, blanditiis, recusandae autem deleniti voluptatibus, error sint reprehenderit alias dolorem ut iusto quae. Doloribus, aperiam.";
console.log("string length", tempString.length);

const firstName = ''

function handleSubmit (){
    if(firstName.length>0){
        console.log('submit form data...');
    }
    else {
        console.log("firstName cannot be empty.");
    }
}

handleSubmit();