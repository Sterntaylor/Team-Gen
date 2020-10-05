const inquirer = require('inquirer');
const { join } = require('path');
const Employee = require('./Employee');
const Engineer = require('./Engineer');
const Intern = require('./Intern');
const Manager = require('./Manager');

function promptUser(response) {
    return inquirer
        .prompt([
            {
                type: 'list',
                name: 'title',
                message: 'What is your job title?',
                choices: ['Engineer', 'Intern', 'Manager']
            },
            {
                type: 'input',
                name: 'name',
                message: 'What is your name?'
            },
            {
                type: 'input',
                name: 'name',
                message: 'What is your ID?'
            },
            {
                type: 'input',
                name: 'name',
                message: 'What is your email address?'
            }])
        .then(function (job) {
            if (job.title === 'Engineer') {
                inquirer.prompt({
                    name: "github",
                    type: "input",
                    message: "What is your github Username?"
                })
            } else if (job.title === 'Intern') {
                inquirer.prompt({
                    name: "school",
                    type: "input",
                    message: "Where did you graduate from college?"
                })
            } else if (job.title === 'Manager') {
                inquirer.prompt({
                    name: "office",
                    type: "input",
                    message: "What is your office number?"
                })
            }
        })
};