abstract class Department {
  // private readonly id: string;
  // private name: string;
  static fiscalYear = 2024;
  protected employees: string[] = [];

  constructor(protected readonly id: string, private name: string) {
    // this.id = id;
    // this.name = name;
    // console.log(Department.fiscalYear); // 정적 속성, 클래스 레벨
  }

  abstract describe(this: Department): void;

  static createEmployee(employee: string) {
    return { employee };
  }

  addEmployee(employee: string) {
    this.employees.push(employee);
  }

  printEmployeeInformation() {
    console.log(this.employees.length);
    console.log(this.employees);
  }
}

class ITDepartment extends Department {
  constructor(id: string, public admins: string[]) {
    super(id, 'IT');
    this.admins = admins;
  }

  describe(this: ITDepartment): void {
    console.log('IT Deparment - ID : ' + this.id);
  }
}

class AccountingDepartment extends Department {
  private lastReport: string;
  private static instance: AccountingDepartment;
  // 정적 프로퍼티이므로 클래스 이름으로만 액세스 가능,
  // private이므로 클래스 안에서만 액세스 가능.
  private constructor(id: string, private reports: string[]) {
    super(id, 'Accounting');
    this.lastReport = reports[0];
  }

  get mostRecentReport() {
    if (this.lastReport) {
      return this.lastReport;
    }
    throw new Error('No report found');
  }

  set mostRecentReport(value: string) {
    if (!value) {
      throw new Error('Please pass in a valid value!');
    }
    this.addReport(value);
  }

  static getInstance() {
    // 생성된 인스턴스가 있다면
    if (this.instance) return this.instance;
    // 생성된 인스턴스가 없다면
    this.instance = new AccountingDepartment('d2', []);
    return this.instance;
  }

  describe(this: AccountingDepartment): void {
    console.log('Accounting Deparment - ID : ' + this.id);
  }

  addEmployee(employee: string): void {
    if (employee === 'Max') {
      return;
    }
    this.employees.push(employee);
  }

  addReport(text: string) {
    this.reports.push(text);
    this.lastReport = text;
  }

  printReports() {
    console.log(this.reports);
  }
}

const employee1 = Department.createEmployee('effy');
console.log(`static employee: ${employee1}`);
const yearOfFiscal = Department.fiscalYear;
console.log(`yearOfFiscal: ${yearOfFiscal}`);

const it = new ITDepartment('D1', ['Max', 'Effy']);

it.addEmployee('effy');
it.addEmployee('chang');

it.describe();
it.printEmployeeInformation();

// const accounting = new ('A1', ['tax']);
const accounting = AccountingDepartment.getInstance();

accounting.describe();
accounting.printReports();

// Getter와 Setter는 메서드처럼 사용하는 것이 아닌 프로퍼티에 접근하듯이 사용.
accounting.mostRecentReport = 'New Report!';
accounting.addReport('Add another Report');
console.log(accounting.mostRecentReport);

accounting.addEmployee('Max'); // nothing happend
accounting.addEmployee('Effy');

accounting.printReports();
accounting.printEmployeeInformation();

// development.employees[2] = 'Anna'; // !! ERROR : Private field !!
const itCopied = { name: 'DUMMY', describe: it.describe };
// accountingCopied.describe();

// --------------------------------------------------------------------

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

// --------------------------------------------------------------------

// QUIZ
// 1. "정적 메소드"는 무엇인가요?
// 클래스를 기반으로 생성된 객체가 아니라 클래스에서 직접 호출하는 메소드입니다.
// 2. "상속" 의 개념은 무엇인가요?
// 상속을 사용하면 일부 공통적인 기능을 공유하면서 특수화된 청사진을 생성할 수 있다.
// > 기본 클래스를 설정한 다음 이를 상속하는 특수화된 클래스를 생성할 수 있다.
// 3. 추상 클래스란 무엇인가요?
// 인스턴스화 될 수 없고 확장되어야 하는 클래스이다.
// 4. '싱글톤' 클래스의 개념은 무엇인가요?
// 싱글톤 클래스에서는 단 하나의 인스턴스만 생성할 수 있다.
// > 싱글톤 클래스는 new 생성자를 사용하는 것이 아닌 메소드를 호출하여 구성하므로
// 특정 시점에 반드시 단 하나의 클래스 인스턴스가 존재한다.
