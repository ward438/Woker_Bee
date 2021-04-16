const request = require('request');
var inquirer = require("inquirer");
const URL = "http://localhost:3001"

module.exports.run = function () {
    inquirer
        .prompt({
            type: 'list',
            name: 'Menu',
            message: "Select from menu:",
            choices: ['List employees', 'Enter new employee', 'Delete Employee', 'Update employee information']
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
                            console.log(data);
                            this.run();
                        }
                    });
                // go do request to get the list of employees.  
                // make sure this is blocking via a promise so it waits to ask another question
                case 'Enter new employee':
                    // code block
                    break;
                default:
                // code block
            }
        });
}

// create user menu 
// call from run() from main.js

// user menu should read out all entries, etc