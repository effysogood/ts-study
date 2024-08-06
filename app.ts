function add(n1: number, n2: number, showResult: boolean, phrase: string) {
  // if(typeof n1 !== 'number' || typeof n2 !== 'number'){
  //   throw new Error('Incorrect Input!')
  // } --> JS environment

  const result = n1 + n2;
  if (showResult) {
    console.log(phrase + result);
  } else {
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
