class Department {
  // private readonly id: string;
  // private name: string;
  private employees: string[] = [];

  constructor(private readonly id: string, private name: string) {
    // this.id = id;
    // this.name = name;
  }

  describe(this: Department) {
    console.log(`Department (${this.id}): ${this.name}`);
  }
  addEmployee(employee: string) {
    this.employees.push(employee);
  }

  printEmployeeInformation() {
    console.log(this.employees.length);
    console.log(this.employees);
  }
}

const development = new Department('D1', 'Development');

development.addEmployee('effy');
development.addEmployee('chang');

// development.employees[2] = 'Anna'; // !! ERROR : Private field !!

development.describe();
development.printEmployeeInformation();

const developmentCopied = { name: 'DUMMY', describe: development.describe };
// developmentCopied.describe();

// QUIZ
// 1. 클래스의 주요 개념은 무엇인가요?
// 클래스는 자바스크립트 객체에 대한 청사진입니다.

// 2. 클래스 속성(프로퍼티)이란 무엇인가요?
// 클래스의 변수를 의미합니다.

// 3. private과 public 한정자(접근제어자)의 개념은 무엇인가요?
// private 속성은 "클래스 밖에서 접근할 수 없는 것"으로 규정
// 오직 클래스 내부에서만(예: 클래스 메소드 내부) 접근 가능

// 4. 다음 코드를 줄일 수 있는 가장 최선의 방법은 무엇인가요?
{
  class Product {
    title: string;
    price: number;
    private isListed: boolean;

    constructor(name: string, pr: number) {
      this.title = name;
      this.price = pr;
      this.isListed = true;
    }
  }
  class ShortenProduct {
    private isListed: boolean;

    constructor(public title: string, public price: number) {
      this.isListed = true;
    }
  }
}
