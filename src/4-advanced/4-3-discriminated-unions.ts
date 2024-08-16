/**
 * Discriminated Unions
 * 유니언 타입을 대상으로 타입 가드를 구현할 때 도움이 되는 패턴
 * 유니언에 속한 모든 객체에 객체를 설명하는 추가 속성을 생성 (*공통 키워드)
 * 해당 속성을 이용해 조건을 확인하는 부분에서 타입 보장!
 */

{
  interface Bird {
    type: 'bird';
    flyingSpeed: number;
  }

  interface Horse {
    type: 'horse';
    runningSpeed: number;
  }

  type Animal = Bird | Horse;
  let speed;
  function moveAnimal(animal: Animal) {
    switch (animal.type) {
      case 'bird':
        speed = animal.flyingSpeed;
        break;
      case 'horse':
        speed = animal.runningSpeed;
        break;
    }
    console.log(`Moving with speed: ${speed}`);
  }

  moveAnimal({ type: 'bird', flyingSpeed: 1000 });
}
