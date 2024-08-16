"use strict";
/**
 * Type Guards
 * 어떤 속성이나 메소드가 존재하는지, 이용하기 전 확인!
 * 런타임 시 특정 작업을 수행하기 전에 해당 타입을 검사하는 코드 패턴
 * typeof, (객체)instaceof, in..
 */
{
    function add(a, b) {
        if (typeof a === 'string' || typeof b === 'string') {
            return a.toString() + b.toString();
        }
        return a + b;
    }
    const e1 = {
        name: 'effy',
        privileges: ['create-server'],
        startDate: new Date(),
    };
    function printEmployeeInfo(emp) {
        console.log(`Name: ${emp.name}`);
        if ('privileges' in emp) {
            console.log(`Privileges: ${emp.privileges}`);
        }
        if ('startDate' in emp) {
            console.log(`Start Date: ${emp.startDate}`);
        }
    }
    printEmployeeInfo({ name: 'effy', startDate: new Date() });
    // ---------------------------------------
    class Car {
        drive() {
            console.log(`Driving a car`);
        }
    }
    class Truck {
        drive() {
            console.log(`Driving a truck`);
        }
        loadCargo(amount) {
            console.log(`Loading cargo: ${amount}`);
        }
    }
    const v1 = new Car();
    const v2 = new Truck();
    function useVehicle(vehicle) {
        vehicle.drive();
        if (vehicle instanceof Truck) {
            vehicle.loadCargo(1000);
        }
    }
    useVehicle(v1);
    useVehicle(v2);
}
// QUIZ
// 1. 타입 가드란 무엇인가요?
// 런타임 시 특정 작업을 수행하기 전에 해당 타입을 검사하는 코드 패턴
// 타입 가드를 사용하면 값으로 작업을 수행하기 전에 타입을 검하사여 런타임 오류 방지
// 2. 다음 타입 가드 중 런타임 오류를 절대로 발생시키지 않는 것은 무엇인가요?
{
    // function size1(input: string | number) {
    //   if (input instanceof 'string') {
    //     return input.length;
    //   }
    //   return input;
    // } >> 'string' 문자열은 객체의 인스턴스가 될 수 없음
    // function size2(input: string | number) {
    //   if (<string>input) {
    //     return input.length;
    //   }
    //   return input;
    // } >> string 타입으로 강제 캐스팅 하였기에 number에는 length 메서드 존재하지 않아 에러.
    function size3(input) {
        if (typeof input === 'string') {
            return input.length;
        }
        return input;
    }
}
