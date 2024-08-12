"use strict";
function combine(input1, input2, resultType) {
    let result;
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
const combinedAges = combine(24, 3, 'as-number');
console.log(combinedAges);
const combinedStringAges = combine('30', '25', 'as-number');
console.log(combinedStringAges);
const combinedNames = combine('Saeyoung', 'Effy', 'as-text');
console.log(combinedNames);
const u1 = { name: 'effy', age: 30 }; // this works!
// 불필요한 반복을 피하고, 타입을 중심에서 관리 할 수 있다.
// 단순화
// (user: { name: string; age: number })
function greetShorten(user) {
    console.log('Hi, I am ' + user.name);
}
// (user: { name: string; age: number }, checkAge: number)
function isOlder(user, checkAge) {
    return checkAge > user.age;
}
function printTrafficLight(state) {
    switch (state) {
        case 'red':
            console.log('Stop');
            break;
        case 'yellow':
            console.log('Caution');
            break;
        case 'green':
            console.log('Go');
            break;
        default:
            break;
    }
}
// TrafficLight 타입은 'red', 'yellow', 'green' 정의된 세가지 값만 할당 가능
// printTrafficLight는 해당 타입을 인수로 받으며, 이 외의 값 전달 시 컴파일 오류
