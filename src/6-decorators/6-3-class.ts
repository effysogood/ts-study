{
  // 데코레이터 팩토리
  function Logger(logString: string) {
    console.log('LOGGER FACTORY');
    // 데코레이터 함수
    return function (constructor: Function) {
      console.log(logString);
      console.log(constructor);
    };
  }

  function WithTemplate(template: string, hookId: string) {
    console.log('TEMPLATE FACTORY');
    return function <T extends { new (...args: any[]): { name: string } }>(
      originalConstructor: T
    ) {
      return class extends originalConstructor {
        constructor(..._: any[]) {
          // 기존 클래스 상속
          // 인스턴스가 생성되는 시점에 동작, 새로운 생성자 호출
          super();
          console.log('Rendering Template');
          const hookEl = document.getElementById(hookId);
          if (hookEl) {
            hookEl.innerHTML = template;
            hookEl.querySelector('h1')!.textContent = this.name;
          }
        }
      };
    };
  }

  @Logger('LOGGING') // 데코레이터 팩토리 사용 시, 인자값 전달 가능
  @WithTemplate('<h1>My Person Object</h1>', 'app')
  class Person {
    name = 'effy';
    constructor() {
      console.log('Creating person object');
    }
  }
  // const person = new Person();
  // console.log(person);
}
