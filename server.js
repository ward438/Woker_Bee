const express = require('express');
const routes = require('./routes');
const sequelize = require('././config/connection');
const SeedDataBase = require('./seeds/seedData');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(routes);


// use force = true to delete tables and start from scratch
sequelize.sync({ force: true })
    .then(() => new SeedDataBase().seedDatabase())
    .then(() => {
        app.listen(PORT, () => console.log('Now listening'));
    });