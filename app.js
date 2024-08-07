// * Object
// Any JavaScript object,
// more specific types(type of object) are possible
// * Array
// Any JavaScript array, type can be flexible or strict
// (regarding the element types)
// const Person: {
//   name: string;
//   age: number;
// };
var person = {
    name: 'effy',
    age: 12,
    hobbies: ['tennis', 'cooking'],
};
var favoriteActivities;
favoriteActivities = ['tennis', 1];
console.log(person.name);
// TS는 저장된 값을 가지고 타입 추론이 가능함
// 객체의 데이터 구조를 키 엔트리(키+타입)로 작성하여 구체화할 수 있지만,
// TS가 타입 추론 가능하도록 작성하는 방식이 더 나음
// 중첩된 개체 및 타입
var product = {
    id: 'abc1',
    price: 12.99,
    tags: ['great-offer', 'hot-and-new'],
    details: {
        title: 'Red carpet',
        description: 'A great carpet - almost brand new!',
    },
};
