"use strict";
// var, let, const
{
    const userName = 'effy';
    let userAge = 10;
    function add(a, b) {
        var result; // 전역 범위 및 함수 범위
        result = a + b;
        return result;
    }
    // console.log(result);
    if (userAge > 20) {
        let isOld = true;
        console.log(isOld);
    }
}
// Arrow Function
const add2 = (a, b = 10) => a + b;
const add3 = (a = 12, b) => a + b;
console.log(add2(2, 5));
const printOutput = (output) => console.log(output);
printOutput(add2(3, 4));
printOutput(add2(3));
// printOutput(add3(3)); // 인자는 순서대로 적용, 두번째 인자 누락 !! ERROR !!
const button = document.querySelector('button');
if (button) {
    button.addEventListener('click', (event) => console.log(event));
}
// Spread Operator
// 펼치고 싶은 배열이나 객체, 해당 모든 요소를 가져와 목록으로 추가
const hobbies = ['Sports', 'Cooking'];
const activeHobbies = ['Swimming'];
activeHobbies.push(...hobbies);
const effy = {
    firstName: 'effy',
    lastName: 'choi',
};
const copiedEffy = Object.assign({}, effy); // 새 객체를 생성, 키-쌍 값이 추가됨
// Spread Parameter
// 쉼표로 구분된 값을 병합, 인수를 무제한으로 사용
const add4 = (...numbers) => {
    return numbers.reduce((curResult, curValue) => {
        return curResult + curValue;
    }, 0);
};
const addNumbers = add4(3, 4, 5, 56, 6);
console.log(addNumbers);
// Destructuring
const [hobby1, hobby2, ...extra] = hobbies;
console.log(hobbies, hobby1, hobby2);
const { firstName: nickname, lastName } = effy;
// 객체에 있는 속성 이름이어야 해당 키의 값을 가져올 수 있음
// 새로운 이름으로 지정도 가능 (타입이 아닌 이름 지정)
