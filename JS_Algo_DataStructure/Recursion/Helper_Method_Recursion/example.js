function collectOddValues(arr) {
    if (!arr) return 'Input is not valid'
    // declare return result array
    let result = [];
    // helper function
    function helper(helperInput) {
        if (helperInput?.length === 0) return;
        if (helperInput[0] % 2 !== 0) {
            result?.push(helperInput[0])
        }
        helper(helperInput?.slice(1))
    }
    //call helper function with arr as a input
    helper(arr)
    // return result
    return result;
}

console.log(collectOddValues([1, 2, 3, 4, 5, 6, 7, 8, 9]));
console.log(collectOddValues());
