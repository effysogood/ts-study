"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
{
    // 데코레이터 팩토리
    function Logger(logString) {
        console.log('LOGGER FACTORY');
        // 데코레이터 함수
        return function (constructor) {
            console.log(logString);
            console.log(constructor);
        };
    }
    function WithTemplate(template, hookId) {
        console.log('TEMPLATE FACTORY');
        return function (originalConstructor) {
            return class extends originalConstructor {
                constructor(..._) {
                    // 기존 클래스 상속
                    // 인스턴스가 생성되는 시점에 동작, 새로운 생성자 호출
                    super();
                    console.log('Rendering Template');
                    const hookEl = document.getElementById(hookId);
                    if (hookEl) {
                        hookEl.innerHTML = template;
                        hookEl.querySelector('h1').textContent = this.name;
                    }
                }
            };
        };
    }
    let Person = class Person {
        constructor() {
            this.name = 'effy';
            console.log('Creating person object');
        }
    };
    Person = __decorate([
        Logger('LOGGING') // 데코레이터 팩토리 사용 시, 인자값 전달 가능
        ,
        WithTemplate('<h1>My Person Object</h1>', 'app')
    ], Person);
    // const person = new Person();
    // console.log(person);
}
