"use strict";
/**
 * Function Overloading
 * 다른 매개 변수를 가진 같은 이름의 여러 함수 생성 가능
 * 타입 정보와 실행 구문을 결합할 수 있다
 */
{
    function add(a, b) {
        if (typeof a === 'string' || typeof b === 'string') {
            return a.toString() + b.toString();
        }
        return a + b;
    }
    const result = add('effy', 'choi');
    result.split('');
}
