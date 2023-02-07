const operation = 'delete'

function handleSubmit(cb1, cb2) {
    if (operation === 'create') {
        cb1();
    }

    else if (operation === 'delete') {
        cb2();
    }
}
handleSubmit(create, deleteFn);

/* function is some other component */
function create() {
    console.log(' create function');
}

function deleteFn (){
    console.log('delete function');
}