/**
 * Intersection Types
 * 다중 타입을 결합하여 하나의 단일 타입으로 조합
 */

{
  type Admin = {
    name: string;
    privileges: string[];
  };

  type Employee = {
    name: string;
    startDate: Date;
  };

  // interface ElevatedEmployee extends Admin, Employee {}
  type ElevatedEmployee = Admin & Employee;

  const e1: ElevatedEmployee = {
    name: 'effy',
    privileges: ['create-server'],
    startDate: new Date(),
  };

  type Combinable = string | number;
  type Numeric = number | boolean;
  type Universal = Combinable & Numeric;
}
