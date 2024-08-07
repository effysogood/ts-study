function addNum(n1: number, n2: number) {
  return n1 + n2;
}
function printSumResult(num: number): void {
  console.log('Result:' + num);
}
// 하지만 ts가 void 추론 가능하기에 잘 작성하지 않음
// void가 명시적으로 이 함수에 반환 구문이 없다고 알려주기 때문

function addAndHandle(n1: number, n2: number, cb: (num: number) => void) {
  const result = n1 + n2;
  cb(result);
}
// ✨ 여기서 void로 지정하는 것은 무엇을 반환하더라도 사용하지 않을 거라고 말하는 것과 동일

printSumResult(addNum(1, 2));

let combineValues: (a: number, b: number) => number;
// 함수를 생성할 때 어떤값의 매개변수를 받을지, 콜백 및 반환값 등을 이렇게 변수로 지정 가능.

combineValues = addNum;
// combineValues = printSumResult; // !! ERROR !!

console.log(combineValues(1, 34));

addAndHandle(10, 20, (result) => {
  console.log(result);
});

// QUIZ
// 1. 이 코드는 컴파일을 통과할 수 있나요?
function sendRequest(data: string, cb: (response: any) => void) {
  // ... sending a request with "data"
  return cb({ data: 'Hi there!' });
}

sendRequest('Send this!', (response) => {
  console.log(response);
  return true;
});
// 콜백 함수는 자신이 전달되는 인수가 반환 값을 기대하지 않는 경우에도 값을 반환할 수 있다.

// 2. 함수 타입의 개념은 무엇인가요?
// 함수 타입은 함수의 매개 변수와 반환 타입을 정의한다.

// 3. 어느 코드 스니펫이 더 나은가요(다시 말해, 어느 코드를 써야 하나요)?
function sayHi1(): void {
  // ...
} // ✅ --> 아무 값도 반환하고 싶지 않은 경우, 어떤 값을 반환하도록 강요하지 않기 때문에.

function sayHi2(): undefined {
  // ...
}

// 추가 예제
interface Human {
  talk: () => void;
}

const human1: Human = {
  talk() {},
};

const human2: Human = {
  talk() {
    return 'abc';
  },
};
// 위에 talk가 void니까 밑에도 talk 메서드도 return 값이 없다.
// 또는 return undefined이나 아니면 그냥 return;이 될 수도 있다
// 근데 여기서 우리를 헷갈리게 하는게, return 값으로 문자열인 'abc'를 반환시키는데 에러가 안 뜬다는 거다.

// void 타입이 쓰이는 세 가지 종류 예시
// 1
function a(): void {}

// 2
interface Human {
  talk: () => void;
} // 메서드로 선언한 void

// 얘도 메서드잖아 하지만 이렇게 return값이 존재할 수 있음.
const human: Human = {
  talk() {
    return 'aba';
  },
};

// 3
function b(callback: () => void): void {} //매개변수로 선언한 void

b(() => {
  return '3';
}); // 이렇게! 콜백 함수이고, 반환값이 void인데 어떻게 return값이 존재할 수 있지?

// 이렇게 void에는 return 값 타입이 void인 것과, 매개변수가 void 함수가 들어간 것과, 메서드가 void 함수가 들어간 것 이렇게 세 가지 종류가 있다.
// 신기하게도 매개변수가 void인 함수도 return값이 존재해도 에러가 뜨지 않는다.

// 그래서 void는 함수의 return 값이 void인 경우에만 return에 값이 있으면 에러가 나고
// ✨ 매개변수와 메서드 이 둘은 상관 없다.
// 이 두 가지는 왜 error가 안 나냐면, 애네한테서의 void의 의미는,
// 이 함수 또는 이 메서드의 return값을 '사용하지 않겠다' 그런 의미이다.
// 그리고 return 값의 타입을 void로 명시한 경우는 직접적으로 return 값이 없다는 의미이다.
// 그래서 같은 void이지만 의미가 다르다고 보면 된다.
