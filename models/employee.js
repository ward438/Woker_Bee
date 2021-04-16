const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
const Role = require('./role');

class Employee extends Model { }


Employee.init({
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
    },
    firstName: {
        type: DataTypes.STRING(30),
        field: "first_name"
    },
    lastName: {
        type: DataTypes.STRING(30),
        field: "last_name"
    },
    roleId: {
        type: DataTypes.INTEGER,
        field: "role_id"
    },
    managerId: {
        type: DataTypes.INTEGER,
        field: "manager_id"
    }
}, {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'employee',
});

Employee.hasOne(Role, { foreignKey: 'role_id' });
Employee.hasOne(Employee, { foreignKey: 'manager_id' });

module.exports = Employee;