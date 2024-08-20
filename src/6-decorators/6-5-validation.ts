/**
 * class-validator 패키지
 * 다양한 검사 항목, 메타프로그밍에 활용해 부가 설정 및 로직 추가 가능
 * Nest.js, Angular.js 활용
 */

{
  interface ValidatorConfig {
    [property: string]: {
      [validatableProp: string]: string[]; // ['required', 'positive']
    };
  }

  const registeredValidators: ValidatorConfig = {};

  //프로퍼티 데코레이터
  function Required(target: any, propName: string) {
    registeredValidators[target.constructor.name] = {
      ...registeredValidators[target.constructor.name],
      // 검사를 추가할 프로퍼티의 이름을 키로 사용
      [propName]: [
        ...(registeredValidators[target.constructor.name]?.[propName] ?? []),
        'required',
      ],
    };
  }

  function PositiveNumber(target: any, propName: string) {
    registeredValidators[target.constructor.name] = {
      ...registeredValidators[target.constructor.name],
      [propName]: [
        ...(registeredValidators[target.constructor.name]?.[propName] ?? []),
        'positive',
      ],
    };
  }

  function validate(obj: any) {
    const objValidatorConfig = registeredValidators[obj.constructor.name];
    if (!objValidatorConfig) {
      return true;
    }
    let isValid = true;
    for (const prop in objValidatorConfig) {
      for (const validator of objValidatorConfig[prop]) {
        switch (validator) {
          case 'required':
            isValid = isValid && !!obj[prop];
          case 'positive':
            isValid = isValid && obj[prop] > 0;
        }
      }
    }
    return true;
  }

  class Course {
    @Required
    title: string;
    @PositiveNumber
    price: number;

    constructor(t: string, p: number) {
      this.title = t;
      this.price = p;
    }
  }

  const courseForm = document.querySelector('form');
  courseForm?.addEventListener('submit', (e) => {
    e.preventDefault();
    const titleEl = document.getElementById('title') as HTMLInputElement;
    const priceEl = document.getElementById('price') as HTMLInputElement;

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
