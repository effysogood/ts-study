"use strict";
class Department {
    constructor(id, name) {
        this.id = id;
        this.name = name;
        // private readonly id: string;
        // private name: string;
        this.employees = [];
        // this.id = id;
        // this.name = name;
    }
    describe() {
        console.log(`Department (${this.id}): ${this.name}`);
    }
    addEmployee(employee) {
        this.employees.push(employee);
    }
    printEmployeeInformation() {
        console.log(this.employees.length);
        console.log(this.employees);
    }
}
class ITDepartment extends Department {
    constructor(id, admins) {
        super(id, 'IT');
        this.admins = admins;
        this.admins = admins;
    }
}
class AccountingDepartment extends Department {
    constructor(id, reports) {
        super(id, 'Accounting');
        this.reports = reports;
    }
    addReport(text) {
        this.reports.push(text);
    }
    printReports() {
        console.log(this.reports);
    }
}
const it = new ITDepartment('D1', ['Max', 'Effy']);
it.addEmployee('effy');
it.addEmployee('chang');
it.describe();
it.printEmployeeInformation();
const accounting = new AccountingDepartment('A1', ['tax']);
accounting.describe();
accounting.printReports();
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
        constructor(name, pr) {
            this.title = name;
            this.price = pr;
            this.isListed = true;
        }
    }
    class ShortenProduct {
        constructor(title, price) {
            this.title = title;
            this.price = price;
            this.isListed = true;
        }
    }
}
