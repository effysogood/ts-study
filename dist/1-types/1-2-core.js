"use strict";
/** Core Types
 * Object
Any JavaScript object,
more specific types(type of object) are possible

* Array
Any JavaScript array, type can be flexible or strict
(regarding the element types)

* Tuple
Added By TypeScript: Fixed-length array

* Enum : enum {NEW, OLD}
Added By TypeScript:
Automatically enumerated global constant identifiers

* Any : *
Any kind of value, no specific type assignment
❌ any 사용시, js와 다를바 없음! 타입 추론이 가능하거나, 명시적으로 작성하는 것을 지향
 */
// type Person = {
//   name: string;
//   age: number;
//   hobbies: string[];
//   role: [number, string];
// };
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["READ_ONLY"] = 1] = "READ_ONLY";
    Role[Role["AUTHOR"] = 2] = "AUTHOR";
})(Role || (Role = {}));
const person = {
    name: 'effy',
    age: 12,
    hobbies: ['tennis', 'cooking'],
    role: Role.ADMIN,
};
// person.role[1] = 10; // !! ERROR !!
// person.role = [0, 'admin', 'user']
let favoriteActivities;
favoriteActivities = ['tennis', 1];
console.log(person.name);
for (const hobby of person.hobbies) {
    console.log(hobby.toUpperCase()); // hobby가 string이라는 것 추론, 문자열 메서드 사용 가능
    // console.log(hobby.map(()));
}
// TS는 저장된 값을 가지고 타입 추론이 가능함
// 객체의 데이터 구조를 키 엔트리(키+타입)로 작성하여 구체화할 수 있지만,
// TS가 타입 추론 가능하도록 작성하는 방식이 더 나음
// 중첩된 개체 및 타입
const product = {
    id: 'abc1',
    price: 12.99,
    tags: ['great-offer', 'hot-and-new'],
    details: {
        title: 'Red carpet',
        description: 'A great carpet - almost brand new!',
    },
};
