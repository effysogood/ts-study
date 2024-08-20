"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
{
    /**
     * 멀티 데코레이터
     * 데코레이터의 또 다른 장점으로는 하나의 멤버에 동시에 여러 개의 데코레이터를 장식할 수 있는 점
     * 이를 데코레이터 합성 (Decorator Composition) 이라고도 부르기도 한다.
  
     * 멀티 데코레이터의 실행 흐름은 다음 순으로 처리된다.
     * 각 데코레이터 표현식은 위에서 아래 방향(⬇︎)으로 평가하고
     * 실행 결과는 아래에서 위로(⬆︎) 함수를 호출
     */
    function PropertyLogger(target, propertyName) {
        console.log(`Property decorator`);
        console.log(target, propertyName);
    }
    function AccessorLogger(target, name, descriptor) {
        console.log('Accessor Decorator');
        console.log(target);
        console.log(name);
        console.log(descriptor);
    }
    function MethodLogger(target, name, descriptor) {
        console.log('Method Decorator');
        console.log(target);
        console.log(name);
        console.log(descriptor);
    }
    function ParameterLogger(target, name, position) {
        console.log('Parameter Decorator');
        console.log(target);
        console.log(name);
        console.log(position);
    }
    class Product {
        set price(val) {
            if (val > 0) {
                this._price = val;
            }
            else {
                throw new Error('Invalid price : Should be positive');
            }
        }
        constructor(t, p) {
            this.title = t;
            this._price = p;
        }
        getPriceWithTax(tax) {
            return this._price * (1 + tax);
        }
    }
    __decorate([
        PropertyLogger
    ], Product.prototype, "title", void 0);
    __decorate([
        AccessorLogger
    ], Product.prototype, "price", null);
    __decorate([
        MethodLogger,
        __param(0, ParameterLogger)
    ], Product.prototype, "getPriceWithTax", null);
}
