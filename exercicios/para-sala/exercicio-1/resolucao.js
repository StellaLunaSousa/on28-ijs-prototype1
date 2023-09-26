let employee1 = {};

employee1.id = 1;
employee1.firstName = 'Stella';
employee1.lastName = 'Sousa';
employee1.salary = 1000;
employee1.raiseSalary = function raiseSalary(percent) {
    this.salary *= 1 + percent/100;
    return this.salary;
}

let employee2 = {};

employee2.id = 2;
employee2.firstName = 'Luna';
employee2.lastName = 'Sousa';
employee2.salary = 1500;
employee2.raiseSalary = function raiseSalary(percent) {
    this.salary *= 1 + percent/100;
    return this.salary;
}


console.log(employee1);
console.log(employee2);
console.log(employee1.raiseSalary(5));
console.log(employee2.raiseSalary(10));