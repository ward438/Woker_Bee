const Employee = require('../models/employee');
const Department = require('../models/department');
const Role = require('../models/role')
const employeeSeedData = require('./employeeSeedData.json');
const departmentSeedData = require('./departmentSeedData.json');
const roleSeedData = require('./roleSeedData.json');

class SeedDatabase {
    seedDatabase = () => {
        return Department.findAll()
            .then((departments) => {
                if (departments.length == 0) {
                    Department.bulkCreate(departmentSeedData)
                    Role.bulkCreate(roleSeedData);
                    Employee.bulkCreate(employeeSeedData);

                }
            });
    };
}



module.exports = SeedDatabase;