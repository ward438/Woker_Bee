const express = require('express');
const routes = require('./routes');
const sequelize = require('././config/connection');
const Department = require('./models/department');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(routes);

function initialDataInsert() {
    Department.create({
        name: 'Sales'
    });
    Department.create({
        name: 'Engineering'
    });
    Department.create({
        name: 'Finance'
    });
    Department.create({
        name: 'Legal'
    });
}

// use force = true to delete tables and start from scratch
sequelize.sync({ force: false })
    .then(() => {
        Department.findAll()
            .then((departments) => {
                if (departments.length == 0) {
                    initialDataInsert();
                }
            });
    })
    .then(() => {
        app.listen(PORT, () => console.log('Now listening'));
    });