const request = require('request');
const cTable = require('console.table');

var inquirer = require("inquirer");
const URL = "http://localhost:3001"

module.exports.run = function () {
    inquirer
        .prompt({
            type: 'list',
            name: 'Menu',
            message: "Select from menu:",
            choices: [
                'List employees',
                'List departments',
                'List roles',
                'Enter new employee',
                'Delete Employee',
                'Update employee information'
            ]
        })
        .then((answer) => {
            let choice = answer['Menu']
            switch (choice) {
                case 'List employees':
                    return request.get({
                        url: `${URL}/employees`,
                        json: true
                    }, (err, res, data) => {
                        if (err) {
                            console.log('Error:', err);
                        } else if (res.statusCode !== 200) {
                            console.log('Status:', res.statusCode);
                        } else {
                            // use the console.table instead here
                            console.table(data);
                            this.run();
                        }

                    });
                case 'List departments':
                    return request.get({
                        url: `${URL}/departments`,
                        json: true
                    }, (err, res, data) => {
                        if (err) {
                            console.log('Error:', err);
                        } else if (res.statusCode !== 200) {
                            console.log('Status:', res.statusCode);
                        } else {
                            // use the console.table instead here
                            console.table(data);
                            this.run();
                        }

                    });
                case 'List roles':
                    return request.get({
                        url: `${URL}/roles`,
                        json: true
                    }, (err, res, data) => {
                        if (err) {
                            console.log('Error:', err);
                        } else if (res.statusCode !== 200) {
                            console.log('Status:', res.statusCode);
                        } else {
                            // use the console.table instead here
                            console.table(data);
                            this.run();
                        }

                    });

                case 'Enter new employee':
                    inquirer
                        .prompt({
                            type: 'input',
                            name: 'entry',
                            message: "Create Role",
                        })

                        .then(() => {

                            return request.post({
                                url: `${URL}/employees`,
                                json: true
                            }, (err, res, data) => {
                                if (err) {
                                    console.log('Error:', err);
                                } else if (res.statusCode !== 200) {
                                    console.log('Status:', res.statusCode);
                                } else {
                                    console.table(data);
                                    this.run();
                                }
                            })

                        })
            }

        })

};