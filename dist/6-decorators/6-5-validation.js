"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
{
    const registeredValidators = {};
    //프로퍼티 데코레이터
    function Required(target, propName) {
        registeredValidators[target.constructor.name] = {
            // 검사를 추가할 프로퍼티의 이름을 키로 사용
            [propName]: ['required'],
        };
    }
    function PositiveNumber(target, propName) {
        registeredValidators[target.constructor.name] = {
            [propName]: ['positive'],
        };
    }
    function validate(obj) {
        const objValidatorConfig = registeredValidators[obj.constructor.name];
        if (!objValidatorConfig) {
            return true;
        }
        for (const prop in objValidatorConfig) {
            for (const validator of objValidatorConfig[prop]) {
                switch (validator) {
                    case 'required':
                        return !!obj[prop];
                    case 'positive':
                        return obj[prop] > 0;
                }
            }
        }
        return true;
    }
    class Course {
        constructor(t, p) {
            this.title = t;
            this.price = p;
        }
    }
    __decorate([
        Required
    ], Course.prototype, "title", void 0);
    __decorate([
        PositiveNumber
    ], Course.prototype, "price", void 0);
    const courseForm = document.querySelector('form');
    courseForm === null || courseForm === void 0 ? void 0 : courseForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const titleEl = document.getElementById('title');
        const priceEl = document.getElementById('price');
        const title = titleEl.value;
        const price = +priceEl.value;
        const createdCourse = new Course(title, price);
        if (!validate(createdCourse)) {
            alert(`Invalid input, please try again!`);
            return;
        }
        console.log(createdCourse);
    });
}
