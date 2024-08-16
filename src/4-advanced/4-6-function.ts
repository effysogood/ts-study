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

// QUIZ
// 1. 클래스와 인터페이스의 주요 차이점은?
// 인터페이스는 인스턴스화 할 수 없으며 컴파일 되지 않는 반면,
// 클래스는 인스턴스화 가능하며 컴파일이 되어진다.
// 인터페이스는 순수 TS 기능

// 2. 인터페이스에 대한 유효한 사용 사례가 아닌 것은?
// 2-1 구현 클래스가 특정 메소드 또는 속성을 갖도록 강요하는 '계약"을 만들고자 한다.
// 2-2 객체의 구조를 정의한다
// ❌ 2-3 유니온 타입을 저장하고자 한다.
// >> 인터페이스는 객체(또는 함수타입)를 서술하지만 유니온 타입과 같은 임의 타입을 저장하거나 서술하지 않는다.
