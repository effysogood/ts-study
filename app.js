function combine(input1, input2, resultType) {
    var result;
    if ((typeof input1 === 'number' && typeof input2 === 'number') ||
        resultType === 'as-number') {
        result = +input1 + +input2;
    }
    else {
        result = input1.toString() + input2.toString();
    }
    return result;
    // if (resultType === 'as-number') {
    //   return +result;
    // } else {
    //   return result.toString();
    // }
}
var combinedAges = combine(24, 3, 'as-number');
console.log(combinedAges);
var combinedStringAges = combine('30', '25', 'as-number');
console.log(combinedStringAges);
var combinedNames = combine('Saeyoung', 'Effy', 'as-text');
console.log(combinedNames);
// Literal Type
