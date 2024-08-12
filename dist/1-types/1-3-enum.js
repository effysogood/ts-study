"use strict";
// Enum을 사용하는 하는 이유?
Object.defineProperty(exports, "__esModule", { value: true });
exports.LanguageCodeEnum = void 0;
// Enum은 추상화의 수단
// 예를 들어 다국어 지원을 위해 언어 코드를 저장할 변수를 만들어야 하는 상황
const code1 = 'en';
const code2 = 'ko';
// 이렇게 되면 'halo' 같은 이상한 값을 대입하면 컴파일 에러 발생
// But, 코딩을 하면서 제품이 어떤 언어를 지원하기로 했는지 기억하기 어렵고,
// 특정 국가 코드가 정확히 어떤 언어를 가르키는지 외우기 쉽지 않다.
// 이때, 상수를 여러개 두어서 문제를 해결 가능하지만, 깔끔하지 않다.
const korean = 'ko';
const english = 'en';
const japanese = 'ja';
const chinese = 'zh';
const spanish = 'es';
const code3 = korean;
// 이럴 경우에 enum을 사용해 리터럴의 타입과 값에 이름을 붙여 코드의 가독성을 높일 수 있다!
var LanguageCodeEnum;
(function (LanguageCodeEnum) {
    LanguageCodeEnum["korean"] = "ko";
    LanguageCodeEnum["english"] = "en";
    LanguageCodeEnum["japanese"] = "ja";
    LanguageCodeEnum["chinese"] = "zh";
    LanguageCodeEnum["spanish"] = "es";
})(LanguageCodeEnum || (exports.LanguageCodeEnum = LanguageCodeEnum = {}));
// LanguageCodeEnum.korean === 'ko'
// (의미상) LanguageCodeEnum === 'ko' | 'en' | 'ja' | 'zh' | 'es'
const code4 = LanguageCodeEnum.korean;
// -> 짧은 코드로 타입의 범위도 좁히고, 가독성도 높이게 된다.
// enum은 객체
// TypeScript enum은 그 자체로 객체이기도 하다.
const keys = Object.keys(LanguageCodeEnum); // ['korean', 'english', ...]
const values = Object.values(LanguageCodeEnum); // ['ko', 'en', ...]
// 그렇다면 그냥 객체를 사용하는 것과는 어떤 차이점이 있을까?
// 1. 객체는 (별다른 처리를 해주지 않았다면) 속성을 자유로이 변경할 수 있는데 반해,
// enum의 속성은 변경할 수 없다.
// 2. 객체의 속성은 (별다른 처리를 해주지 않았다면)
// 리터럴의 타입이 아니라 그보다 넓은 타입으로 타입 추론이 이루어진다.
// enum은 항상 리터럴 타입이 사용됩니다.
// 3. 객체의 속성 값으로는 JavaScript가 허용하는 모든 값이 올 수 있지만,
// enum의 속성 값으로는 문자열 또는 숫자만 허용된다.
// 4. TypeScript에는 enum의 속성 값을 명시적으로 지정해주지 않아도
// 자동으로 0부터 시작하는 정수들이 지정되는 기능이 있다. 또는 따로 지정도 가능.
// 정리하자면, 같은 ‘종류’를 나타내는 여러 개의 숫자 혹은 문자열을 다뤄야 하는데,
// 각각 적당한 이름을 붙여서 코드의 가독성을 높이고 싶다면 enum을 사용한다.
// 그 외의 경우 상수, 배열, 객체 등을 사용하시면 됨
// ps. 다만, 객체 리터럴에 대해
// 상수 단언(const assertion)을 해준다면 이 객체를 enum과 비슷한 방식 사용 가능.
const languageCodes = {
    korean: 'ko',
    english: 'en',
    japanese: 'ja',
    chinese: 'zh',
    spanish: 'es',
}; // const assertion
const code = languageCodes.korean;
