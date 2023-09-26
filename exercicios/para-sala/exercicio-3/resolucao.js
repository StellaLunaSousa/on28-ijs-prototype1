function GeneratedID() {
    const crypto = require('crypto');
    const id = crypto.randomUUID();

    return id;
}

function Employee(firstName, lastName, salary) {
    let employee = {};
    
    employee.id = GeneratedID();
    employee.firstName = firstName;
    employee.lastName = lastName;

    employee.salary = salary;
    employee.RaiseSalary = function RaiseSalary(percent) {
        this.salary *= 1 + percent/100;
        return this.salary;
    }

    employee.benefits = new Array();
    employee.AddBenefits = function AddBenefits(benefit) {
        this.benefits.push(benefit);
    }
    
    employee.RemoveBenefits = function RemoveBenefits(benefit) {
        this.benefits = this.benefits.filter(currentBenefit => currentBenefit !== benefit);
    }
    
    employee.ListBenefits = function ListBenefits() {
        console.log(this.benefits);
    }
    
    return employee;
}

module.exports = { Employee }