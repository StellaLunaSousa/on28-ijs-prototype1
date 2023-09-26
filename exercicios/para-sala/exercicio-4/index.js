const { Employee } = require('./resolucao');

const employee1 = Employee('Luara', 'Kerlen', 10000);
employee1.AddBenefits('VR');
employee1.AddBenefits('VA');
employee1.AddBenefits('Zenklub');
employee1.ListBenefits();
employee1.RemoveBenefits('VA');
employee1.ListBenefits();
