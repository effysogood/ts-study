"use strict";
function add(n1, n2, showResult, phrase) {
    // if(typeof n1 !== 'number' || typeof n2 !== 'number'){
    //   throw new Error('Incorrect Input!')
    // } --> JS environment
    const result = n1 + n2;
    if (showResult) {
        console.log(phrase + result);
    }
    else {
        return result;
    }
}
const number1 = 4;
const number2 = 2.5;
const printResult = true;
const resultPhrase = 'Result is : ';
add(number1, number2, printResult, resultPhrase);
// JS vs TS
// The key difference is:
// JavaScript uses "dynamic types" (resolved at runtime)
// TypeScript uses "static types" (set during development)
// -> 런타임에는 지원되지 않으며, 개발 시 컴파일 환경에서 타입 검사 및 에러
// 타입 추론
// TS 컴파일러는 할당된 값에 따라 타입을 추론 가능.
// 즉, 직접 타입을 할당하지 않아도 추론하여 코드 실행
// 따라서 추론된 타입과 맞지 않은 타입을 할당할 경우, 오류 발생
const cherry = '🍒';
// cherry = 1; // 💩 error
/* ------------------------------------------------------- */
// QUIZ
// 1) 타입이 바닐라 JS보다 유용하며 큰 이점을 제공하는 이유?
// > 타입을 사용하면 오류를 미리 감지하고 런타임 오류를 방지할 수 있음
// 2) 다음 코드는 컴파일 오류를 발생시키나요?
let userName;
userName = 'Maximilian';
// userName = false;
// > 'string' 타입이 할당된 변수에 boolean 타입을 할당하는 것은 허용 X, 컴파일 오류
// 3) 이 코드는 타입 추론에 의존하나요?
const age = 29;
// > 이는 명시적 타입 할당
// TS는 타입 추론 가능하기에 (따라서 “:number”를 생략할 수 있음)
// 4) 자바스크립트 타입 (예. typeof 'Max' => 'string')과
// 타입스크립트 타입 (예. const name: string = '...')의 차이는 무엇인가요?
// > ts 타입은 컴파일 중에 확인 가능 반면 js 타입은 런타임 중에 확인 가능.
