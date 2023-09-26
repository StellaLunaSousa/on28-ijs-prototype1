function GeneratedID() {
    const crypto = require('crypto');
    const id = crypto.randomUUID();

    return id;
}

const employeeMethods = {
    addBenefits: function AddBenefits(benefit) {
        this.benefits.push(benefit);
    },
    removeBenefits: function RemoveBenefits(benefit) {
        this.benefits = this.benefits.filter(currentBenefit => currentBenefit !== benefit);
    },
    listBenefits: function ListBenefits() {
        console.log(this.benefits);
    },
    raiseSalary: function RaiseSalary(percent) {
        this.salary *= 1 + percent/100;
        return this.salary;
    }

}

function Employee(firstName, lastName, salary) {
    let employee = Object.create(employeeMethods);
    
    employee.id = GeneratedID();
    employee.firstName = firstName;
    employee.lastName = lastName;

    employee.salary = salary;
    employee.benefits = [];
    
    return employee;
}

module.exports = { Employee }