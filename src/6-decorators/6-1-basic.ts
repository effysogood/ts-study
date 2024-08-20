/**
 * Decorators
 * 코드의 특정 부분을 수정하지 않고도 기능을 확장 가능
 * Meta-programming
 * => 데코레이터의 주 사용처가 최종 사용자에게 직접적인 영향을 주는 곳이 아니라는 의미
 * 그보다 데코레이터는 코드 작성에 특화된 도구로서 다른 개발자들이 사용하기 쉽게 만드는 것이 목적
 */

/**
 * 데코레이터는 일종의 함수이다.
 * 말 그대로 코드 조각을 장식해주는 역할을 하며, 타입스크립트에서는 그 기능을 함수로 구현하는 것
 * 예를 들어, 메소드/클래스/프로퍼티/파라미터 위에 @함수 를 장식해줌으로써, 코드가 실행(런타임)이 되면
 * 데코레이터 함수가 실행되어, 장식한 멤버를 보다 파워풀하게 꾸며주는 것으로 이해하면 된다!
 */

/**
 * 데코레이터 팩토리
 * 데코레이터 팩토리 함수는 데코레이터 함수를 감싸는 래퍼 함수
 * 보통 데코레이터가 선언에 적용되는 방식을 원하는 대로 바꾸고 싶을 때 사용
 * 프로그래밍에서 함수에게 사용자가 인자를 전달할 수 있는 것과 유사하게,
 * 데코레이터 함수 또한 팩토리를 사용해 사용자로부터 인자를 전달 받도록 설정 가능
 */

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

  // 데코레이터 함수의 실행 순서는 상향식으로 진행, 즉! 맨 밑에 있는 데코레이터가 먼저 진행.
  function WithTemplate(template: string, hookId: string) {
    console.log('TEMPLATE FACTORY');
    return function (constructor: any) {
      console.log('Rendering Template');
      const hookEl = document.getElementById(hookId);
      const p = new constructor();
      if (hookEl) {
        hookEl.innerHTML = template;
        hookEl.querySelector('h1')!.textContent = p.name;
      }
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
  const person = new Person();
  console.log(person);
}
