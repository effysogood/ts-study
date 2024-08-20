{
  /**
   * 멀티 데코레이터
   * 데코레이터의 또 다른 장점으로는 하나의 멤버에 동시에 여러 개의 데코레이터를 장식할 수 있는 점
   * 이를 데코레이터 합성 (Decorator Composition) 이라고도 부르기도 한다.

   * 멀티 데코레이터의 실행 흐름은 다음 순으로 처리된다.
   * 각 데코레이터 표현식은 위에서 아래 방향(⬇︎)으로 평가하고
   * 실행 결과는 아래에서 위로(⬆︎) 함수를 호출
   */

  function PropertyLogger(target: any, propertyName: string | Symbol) {
    console.log(`Property decorator`);
    console.log(target, propertyName);
  }

  function AccessorLogger(
    target: any,
    name: string,
    descriptor: PropertyDescriptor
  ) {
    console.log('Accessor Decorator');
    console.log(target);
    console.log(name);
    console.log(descriptor);
  }

  function MethodLogger(
    target: any,
    name: string | Symbol,
    descriptor: PropertyDescriptor
  ) {
    console.log('Method Decorator');
    console.log(target);
    console.log(name);
    console.log(descriptor);
  }

  function ParameterLogger(
    target: any,
    name: string | Symbol,
    position: number
  ) {
    console.log('Parameter Decorator');
    console.log(target);
    console.log(name);
    console.log(position);
  }

  class Product {
    @PropertyLogger
    title: string;
    private _price: number;

    @AccessorLogger
    set price(val: number) {
      if (val > 0) {
        this._price = val;
      } else {
        throw new Error('Invalid price : Should be positive');
      }
    }

    constructor(t: string, p: number) {
      this.title = t;
      this._price = p;
    }

    @MethodLogger
    getPriceWithTax(@ParameterLogger tax: number) {
      return this._price * (1 + tax);
    }
  }
}
