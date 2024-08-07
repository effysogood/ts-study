function addNum(n1, n2) {
    return n1 + n2;
}
function printSumResult(num) {
    console.log('Result:' + num);
}
// 함수의 반환값으로 undefined를 사용하지는 못함.
// void가 명시적으로 이 함수에 반환 구문이 없다고 알려주기 때문
// 하지만 ts가 void 추론 가능하기에 작성하지 않음
printSumResult(addNum(1, 2));
var combineValues;
combineValues = addNum;
console.log(combineValues(1, 34));
