/**
 * Function Overloading
 * 다른 매개 변수를 가진 같은 이름의 여러 함수 생성 가능
 * 타입 정보와 실행 구문을 결합할 수 있다
 */

{
  type Combinable = string | number;
  type Numeric = number | boolean;
  type Universal = Combinable & Numeric;

  function add(a: number, b: number): number;
  function add(a: string, b: string): string;
  function add(a: string, b: number): string;

  function add(a: Combinable, b: Combinable) {
    if (typeof a === 'string' || typeof b === 'string') {
      return a.toString() + b.toString();
    }
    return a + b;
  }

  const result = add('effy', 'choi');
  result.split('');
}
