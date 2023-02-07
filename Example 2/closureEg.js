/* Closure */
function outerFn() {
    const outerValue = 'outer value';

    /* closure fn */
    function innerFn() {
        console.log(outerValue);
    }
    function validate() {
        return innerFn;
    };
    if (typeof outerValue !== 'function') {
         return validate();
    }
    return null;
}

const outerRef = outerFn();

outerRef();
console.log('1' === 1);