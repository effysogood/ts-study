/**
 * Type Guards
 * 어떤 속성이나 메소드가 존재하는지, 이용하기 전에 확인하는 작업
 * 사용 가능한 메소드 확인, typeof, (객체)instaceof, in..
 */

{
  type Combinable = string | number;
  type Numeric = number | boolean;
  type Universal = Combinable & Numeric;

  function add(a: Combinable, b: Combinable) {
    if (typeof a === 'string' || typeof b === 'string') {
      return a.toString() + b.toString();
    }
    return a + b;
  }

  // ---------------------------------------

  type Admin = {
    name: string;
    privileges: string[];
  };

  type Employee = {
    name: string;
    startDate: Date;
  };

  type ElevatedEmployee = Admin & Employee;

  const e1: ElevatedEmployee = {
    name: 'effy',
    privileges: ['create-server'],
    startDate: new Date(),
  };

  type UnknownEmployee = Employee | Admin;

  function printEmployeeInfo(emp: UnknownEmployee) {
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
    loadCargo(amount: number) {
      console.log(`Loading cargo: ${amount}`);
    }
  }

  type Vehicle = Car | Truck;

  const v1 = new Car();
  const v2 = new Truck();

  function useVehicle(vehicle: Vehicle) {
    vehicle.drive();
    if (vehicle instanceof Truck) {
      vehicle.loadCargo(1000);
    }
  }
  useVehicle(v1);
  useVehicle(v2);
}
