const crypto = require('crypto');

function Employee(firstName, lastName, salary) {
    let employee = {};
    
    employee.id = crypto.randomUUID();
    employee.firstName = firstName;
    employee.lastName = lastName;
    employee.salary = salary;
    employee.RaiseSalary = function RaiseSalary(percent) {
        this.salary *= 1 + percent/100;
        return this.salary;
    }

    return employee;
}

const employee1 = Employee('Luara', 'Kerlen', 10000);
console.log(employee1);
console.log(employee1.RaiseSalary(10));

const employee2 = Employee('Maria', 'Santos', 20000);
console.log(employee2);
console.log(employee2.RaiseSalary(5));

module.exports = Employee;