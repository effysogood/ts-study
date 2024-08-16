/**
 * Interface
 * 객체의 구조를 정의, 규격 사항
 */

{
  type AddFn = (a: number, b: number) => number;
  // interface AddFn {
  //   (a: number, b: number): number;
  //   // 익명 메서드는 커스텀 함수 타입임을 인지
  //   // 대신 해당 방법보다는 type 커스텀 함수가 더 적합
  // }
  let add: AddFn;

  interface Named {
    readonly name?: string;
    outputname?: string;
  }

  interface /* type */ Greetable extends Named {
    greet(phrase: string): void;
  }

  class Person implements Greetable {
    name?: string;
    // age: number;

    constructor(name?: string, age?: number) {
      if (name) {
        this.name = name;
      } // 선택적 프로퍼티로 설정되었으므로 해당 속성
      // this.age = age;
    }

    greet(phrase: string) {
      if (this.name) {
        console.log(`${phrase} ${this.name}`);
      } else {
        console.log('Hi');
      }
    }
  }

  let user: Greetable = new Person();
  // user.name = 'chang'; !!Readyonly!!
  user.greet('hi this is');
  console.log(user);
}
