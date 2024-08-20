"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// 메서드 데코레이터에서는 무언가를 반환할 수 있다.
// 그 무언가는 바로 설명자(Descriptor)고,
// 이를 통해 메서드나 메서드의 설정을 변경할 수 있다!
{
    function Autobind(_, _2, descriptor) {
        const originalMethod = descriptor.value;
        const adjDescriptor = {
            configurable: true,
            enumerable: false,
            // 언제나 자신이 속한 실체 객체 내 실행! 그러므로 this는 언제나 이 게터를 정의한 객체를 가리킴
            get() {
                const boundFn = originalMethod.bind(this);
                return boundFn;
            },
        };
        // 새 설명자 객체 반환
        return adjDescriptor;
    }
    class Printer {
        constructor() {
            this.message = 'This works!';
        }
        showMessage() {
            console.log(this.message);
        }
    }
    __decorate([
        Autobind
    ], Printer.prototype, "showMessage", null);
    const printer = new Printer();
    const button = document.querySelector('button');
    button.addEventListener('click', printer.showMessage);
}
