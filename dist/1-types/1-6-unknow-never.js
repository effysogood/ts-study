"use strict";
// unknown : 오류 없이 어떤 값이든 저장 가능
let userInput;
userInput = 23;
userInput = 'effy';
// useName = userInput;d
// 하지만 string을 unknown에서 담을 수는 없음
// any와는 달리 unknown 타입 확인 가능
// never : 절대 반환 값을 생성하지 않음
// 에러 처리, 혹은 무한 루프
function generateError(message, code) {
    throw { message: message, errorCode: code };
    // while(true){}
}
generateError('An error occurred!', 500);
