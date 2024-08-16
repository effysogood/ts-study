"use strict";
/**
 * Generic
 * 다른 타입과 연결된 타입으로
 * 그 '다른' 타입이 무엇인지에 대해 유연한 편
 * 타입을 정의할때 특정해 놓는 것이 아닌, 타입을 사용할때 동적으로 설정
 */
{
    const names = ['effy', 'choi'];
    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('this is done!');
        }, 2000);
    });
    promise.then((data) => {
        data.split('');
    });
}
{
    // generic 타입에 제약 조건을 걸어 최적화된 방식으로 활용 가능
    function merge(objA, objB) {
        return Object.assign(objA, objB);
    }
    const mergedObj = merge({ name: 'effy' }, { age: 23 });
    console.log(mergedObj);
    function countAndDescribe(element) {
        let descriptionText = 'Got no value';
        if (element.length === 1) {
            descriptionText = `Got 1 elements.`;
        }
        else if (element.length > 1) {
            descriptionText = `Got ${element.length} elements.`;
        }
        return [element, descriptionText];
    }
    console.log(countAndDescribe('hello there')); //  ['hello there', 'Got 11 elements.']
    console.log(countAndDescribe(['hello there', 'hello'])); //  [[words..], 'Got 2 elements.']
}
// -----------------------------------
// QUIZ
// 1. "제네릭"은 언제 쓸모가 있나요?
// 다른 여러 가지 가능한 타입과 작동하는 타이을 사용하는 경우(예: 다른 타입의 데이터를 내보내는 객체)
// >> 제네릭을 사용하면 함께 동작하는 데이터 구조를 만들거나 다양한 타입의 값을 래핑할 수 있다.
// >> (예: 모든 타입의 데이터를 저장할 수 있는 배열)
// 2. 제네릭 타입의 다음과 같은 용법은 적절한가요?
// const data = extractData<string>(user, 'userId')
// 네, extractData()는 제공하는 인수에 따라 다른 데이터를 반환할 것입니다.
// >> 해당 코드는 연산을 수행하는 데이터를 그다지 신경쓰지 않는 일부 유틸리티 메소드(결국 데이터를 가져오기만함)
// 3. 제네릭과 관련하여 제약 조건의 개념은 무엇인가요?
// 제약 조건을 사용하면 제네릭 함수 등에 사용할 수 있는 구체적인 타입의 범위를 좁힐 수 있다
