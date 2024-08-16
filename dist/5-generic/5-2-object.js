"use strict";
/**
 * Generic을 사용하면?
 * 어떤 조합이로든 어떤 원시값이든 사용 가능
 * 타입 안정성 및 유연성 확보
 */
{
    function extractAndConvert(obj, key) {
        return `Value: ${obj[key]}`;
    }
    const person = {
        name: 'effy',
        age: 20,
    };
    console.log(extractAndConvert(person, 'name'));
    class DataStorage {
        constructor() {
            this.data = [];
        }
        addItem(item) {
            this.data.push(item);
        }
        removeItem(item) {
            if (this.data.indexOf(item) === -1) {
                this.data.splice(this.data.indexOf(item), 1);
            }
            return;
        }
        getItem() {
            return [...this.data];
        }
    }
    const textStorage = new DataStorage();
    textStorage.addItem('effy');
    textStorage.addItem('chang');
    textStorage.removeItem('chang');
    console.log(textStorage.getItem());
    const objStorage = new DataStorage();
    objStorage.addItem({ name: 'effy' }); // a
    objStorage.addItem({ name: 'chang' });
    objStorage.removeItem({ name: 'effy' }); // b
    console.log(objStorage.getItem()); // Still {name: 'effy'}
    // WHY??? 새로운 객체(a != b)가 생성될 때는 각각 다른 주소를 가지게 됨!
    // 객체를 this로 참조할때, 다른 주소값을 가지고 있기에 (동일하게 생겼지만)
    // indexOf는 결국 아무것도 찾지 못하니 -1을 반환하게 되어,
    // 마지막 요소(chang)를 빼게 되는 것.
    // ✅
    // const array = [NaN];
    // array.indexOf(NaN); // -1
    // How to solve?
    // 같은 메모리 주소를 가지는 객체로 할당해주어야만 해결이 가능
    // 비원시타입은 지원을 해주지 않기에 문자열, 타입, 불리언 등의 타입 제약을 걸어주는 것이기도 함!
    // Plus, 확장해서 쓴다거나 interface를 사용하는 것이 더 적합해보임?
}
