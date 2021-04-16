const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
const Department = require('./department');

class Role extends Model { }


Role.init({
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
    },
    title: {
        type: DataTypes.STRING(30),
    },
    salary: {
        type: DataTypes.DECIMAL,
    },
    departmentId: {
        type: DataTypes.STRING,
        field: "department_id"
    },
}, {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'role',
});

Role.hasOne(Department, { foreignKey: 'department_id' });

module.exports = Role;