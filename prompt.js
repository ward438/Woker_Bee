const express = require('express');
const request = require('request');

const cTable = require('console.table');


var inquirer = require("inquirer");
const URL = "http://localhost:3001"

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

module.exports.run = function() {
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
                'Create Role',
                'Update employee information',
                "Exit"
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
                    (async() => {
                        const ans1 = await inquirer.prompt([{
                            type: 'input',
                            name: 'firstName',
                            message: "What is their first name?",
                        }, ]);
                        const ans2 = await inquirer.prompt([{
                            type: 'input',
                            name: 'lastName',
                            message: "What is their last name?",
                        }, ]);
                        const ans3 = await inquirer.prompt([{
                            type: 'input',
                            name: 'roleId',
                            message: "What is their Role id?",
                        }, ]);
                        const ans4 = await inquirer.prompt([{
                            type: 'input',
                            name: 'managerId',
                            message: "What is their Manager id?",
                        }, ]);

                        return {...ans1, ...ans2, ...ans3, ...ans4 };
                    })().then((data) => {
                        return request.post({
                                url: `${URL}/employees`,
                                json: true,
                                body: data
                            },
                            (err, res, data) => {
                                if (err) {
                                    console.log('Error:', err);
                                } else {
                                    console.log("Employee Created!")
                                    console.table(data);
                                    this.run();
                                }
                            })

                    });
                    break;
                case "Create Role":
                    (async() => {
                        const ans2 = await inquirer.prompt([{
                            type: 'input',
                            name: 'title',
                            message: "Enter Role Title: ",
                        }, ]);
                        const ans3 = await inquirer.prompt([{
                            type: 'input',
                            name: 'salary',
                            message: "Enter Salary: ",
                        }, ]);
                        const ans4 = await inquirer.prompt([{
                            type: 'input',
                            name: 'departmentId',
                            message: "Enter the department id: ",
                        }, ]);

                        return {...ans2, ...ans3, ...ans4 };
                    })().then((data) => {
                        return request.post({
                                url: `${URL}/roles`,
                                json: true,
                                body: data
                            },
                            (err, res, data) => {
                                if (err) {
                                    console.log('Error:', err);
                                } else {
                                    console.log("Role Created!")
                                    console.table(data);
                                    this.run();
                                }
                            })

                    });

            }
        })


};