type Combinable = number | string;
type ConversionDescriptor = 'as-number' | 'as-text';

function combine(
  input1: Combinable,
  input2: Combinable,
  resultType: ConversionDescriptor
) {
  let result;
  if (
    (typeof input1 === 'number' && typeof input2 === 'number') ||
    resultType === 'as-number'
  ) {
    result = +input1 + +input2;
  } else {
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

// Type Alias 및 Object Type
// 타입 별칭을 사용하여 타입을 직접 '생성'
// 유니온 타입 저장 뿐 아니라 복잡한 객체 타입에도 별칭을 붙일 수 있음
type User = { name: string; age: number };
const u1: User = { name: 'effy', age: 30 }; // this works!
// 불필요한 반복을 피하고, 타입을 중심에서 관리 할 수 있다.

// 단순화
// (user: { name: string; age: number })
function greetShorten(user: User) {
  console.log('Hi, I am ' + user.name);
}

// (user: { name: string; age: number }, checkAge: number)
function isOlder(user: User, checkAge: number) {
  return checkAge > user.age;
}

/** Literal Type
: TypeScript에서 특정한 값 자체를 타입으로 사용할 수 있도록 하는 기능

1. 문자열 리터럴 타입 : 특정 문자열 값만 허용
2. 숫자 리터럴 타입 : 특정 숫자 값만 허용
3. 불리언 리터럴 타입 : true 또는 false 값 중 하나만 허용
 */

type TrafficLight = 'red' | 'yellow' | 'green';
function printTrafficLight(state: TrafficLight) {
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
