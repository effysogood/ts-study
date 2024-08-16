"use strict";
/**
 * Type Guards
 * 어떤 속성이나 메소드가 존재하는지, 이용하기 전에 확인하는 작업
 * 사용 가능한 메소드 확인, typeof, (객체)instaceof, in..
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
