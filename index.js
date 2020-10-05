const Inquirer = require('Inquirer');
const axios = require('axios');
const fs = require('fs');

const Employee = require('./lib/Employee');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');

let employeeArray = [];
let engineerArray = [];
let internArray = [];
let managerArray = [];

const Admin = [
    {
        type: 'input',
        name: 'name',
        message: 'What is your name?'
    },
    {
        type: 'input',
        name: "ID",
        message: 'What is your ID number?'
    },
    {
        type: 'input',
        name: 'Email',
        message: 'What is your work email?'
    }
];
const AdminOptions = [
    {
        type: 'list',
        name: 'AdminOption',
        message: 'What would you like to do?',
        choices: ['Add new hire', 'Generate HTML']
    }
]
const newHire = [
    {
        type: 'input',
        name: 'name',
        message: 'What is their name?'
    },
    {
        type: 'input',
        name: "ID",
        message: 'What is their ID?'
    },
    {
        type: 'input',
        name: 'Email',
        message: 'What is their email?'
    },
    {
        type: 'list',
        name: 'title',
        message: 'What is their job title?',
        choices: ['engineer', 'intern', 'manager']
    }
];
const AdminQuestion = [
    {
        type: 'input',
        name: "officenumber",
        message: 'What is your office number'
    }
];
const engineerQuestion = [
    {
        type: 'input',
        name: 'username',
        message: 'What is your github username'
    }
];
const internQuestion = [
    {
        type: 'input',
        name: 'school',
        message: 'What school did you most recently attend?'
    }
]
let initialize =
    async function adminInitialize() {

        await Inquirer
            .prompt(Admin)

            .then(async function (userData) {
                let managerInfo = {
                    'name': userData.name,
                    'id': (userData.id),
                    'email': userData.email,
                    'role': 'employee',
                    'title': 'manager',
                    'officeNumber': userData.number,
                }
                if (position = true) {
                    employeeArray.push(managerInfo)
                    newemp()
                }
            })
    }
    let next =
    async function adminNext() {
        await Inquirer
            .prompt(AdminOptions)
            .then(async function (answers) {
                if (answers.AdminOption === 'Add new hire') {
                    employeeArray.length = 0;
                    input()
                }
                if (answers.AdminOption === 'Generate HTML') {
                    createteam()
                }
            })
    };
let input =
    async function init() {
        await Inquirer
            .prompt(newHire)

            .then(async function (userData) {
                let userInfo = {
                    'name': userData.name,
                    'id': (userData.id),
                    'email': userData.email,
                    'role': 'employee',
                    'title': userData.title,
                }
                employeeArray.push(userInfo)
                newemp()
            })
           // next()
    };
let newemp =
    async function employeeprofile() {
        const name = employeeArray[0].name;
        const id = employeeArray[0].id;
        const email = employeeArray[0].email;
        const role = employeeArray[0].role;

        const employee = new Employee(name, id, email, role)
        newhirerole()
    };

let newhirerole =         //bytitle
    async function bytitle() {

        if (employeeArray[0].title === "manager") {
            buildManager()
        }
        if (employeeArray[0].title === "engineer") {
            buildEngineer()
        }
        if (employeeArray[0].title === "intern") {
            buildIntern()
        }
    };
async function buildManager() {

    await Inquirer
        .prompt(AdminQuestion)

        .then(async function (userData) {
            let managerAns = {
                'officeNumber': (userData.officeNumber)
            }
            employeeArray[0].officeNumber = managerAns.officeNumber;

            const name = employeeArray[0].name;
            const id = employeeArray[0].id;
            const email = employeeArray[0].email;
            const role = employeeArray[0].role;
            const officeNumber = employeeArray[0].officeNumber;

            const manager = new Manager(name, id, email, officeNumber)
            managerArray.push(manager);

        })

    next()
};
async function buildEngineer() {
    await Inquirer
        .prompt(engineerQuestion)

        .then(async function (userData) {
            let engineerInfo = {
                'Github Username': userData.username
            }
            employeeArray[0].username = engineerInfo.username;
        })
        .then(async function () {

            const username = employeeArray[0].username;
            let queryURL = 'https://api.github.com/users/' + username;
            axios
                .get(queryURL).then(async function (response) {
                    const engineerInfo = {
                        "github": response.data.login,
                    }

                    employeeArray[0].github = engineerInfo.github;
                    const name = employeeArray[0].name;
                    const id = employeeArray[0].id;
                    const email = employeeArray[0].email;
                    const role = employeeArray[0].role;
                    const username = employeeArray[0].username;
                    const github = employeeArray[0].github;

                    const engineer = new Engineer(name, id, email, username, github)

                    engineerArray.push(engineer)

                })
        })
    next()
};
async function buildIntern() {
    await Inquirer
        .prompt(internQuestion)

        .then(async function (userData) {
            let internInfo = {
                'school': userData.school
            }
            employeeArray[0].school = internInfo.school;
        })
    const name = employeeArray[0].name;
    const id = employeeArray[0].id;
    const email = employeeArray[0].email;
    const role = employeeArray[0].role;
    const school = employeeArray[0].school;

    const intern = new Intern(name, id, email, school);
    internArray.push(intern)
    next()
};

createteam =
    async function teamHTML() {


        fs.writeFileSync('./dist-rendered-HTML/teamhomepage.html',
            '<DOCTYPE! HTML>' +
            '<html>' +
            '<head>' +
            '<meta charset="UTF-8">' +
            '<link rel="stylesheet" type="text/css" href="style.css">' +
            '<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous"/>' +
            '<meta name="viewport" content="width=device-width, initial-scale=1.0"/> ' +
            '<meta http-equiv="X-UA-Compatible" content="ie=edge" />' +
            '</head>' +
            '<body>' +
            '<header>' +
            '<h1 justify-content-center;>' + 'HomeBase' + '</h1>' +
            '</header>' +
            '<container>' +
            '<div class="row">' +
            '<div class="col-sm-10">'
        );

        fs.appendFileSync('./dist-rendered-HTML/teamhomepage.html',
            '<div id="manager">' +
            '<div class="card">' +
            '<div class="card-header bg-warning">' + managerArray[0].name + '</div>' +
            '<div class="card-body">' +
            '<div class=content>' +

            '<p>' + "ID: " + managerArray[0].id + '</p>' + '<hr>' +
            '<p>' + "Email: " + managerArray[0].email + '</p>' + '<hr>' +
            '<p>' + "Office Number: " + managerArray[0].number + '</p>' + '<hr>' +

            '</div>' +
            '</div>' +
            '<div class="card-footer bg-warning">' + "Manager" + '</div>' +
            '</div>' +
            '</div>'
        );
        for (i = 0; i < engineerArray.length; i++) {
            fs.appendFileSync('./dist-rendered-HTML/teamhomepage.html',
                '<div id="engineer">' +
                '<div class="card">' +
                '<div class="card-header bg-warning">' + engineerArray[i].name + '</div>' +
                '<div class="card-body">' +
                '<div class=content>' +

                '<p>' + "ID: " + engineerArray[i].id + '</p>' + '<hr>' +
                '<p>' + "Email " + engineerArray[i].email + '</p>' + '<hr>' +
                '<p>' + "GitHub username: " + engineerArray[i].username + '</p>' + '<hr>' +

                '</div>' +
                '</div>' +
                '<div class="card-footer bg-warning">' + 'Engineer' + '</div>' +
                '</div>' +
                '</div>'
            );
        }

        for (i = 0; i < internArray.length; i++) {
            fs.appendFileSync('./dist-rendered-HTML/teamhomepage.html',
                '<div id="intern">' +
                '<div class="card">' +
                '<div class="card-header bg-dark">' + internArray[i].name + '</div>' +
                '<div class="card-body">' +
                '<div class=content>' +

                '<p>' + "ID: " + internArray[i].id + '</p>' + '<hr>' +
                '<p>' + "Email: " + internArray[i].email + '</p>' + '<hr>' +
                '<p>' + "School: " + internArray[i].school + '</p>' + '<hr>' +

                '</div>' +
                '</div>' +
                '<div class="card-footer bg-dark">' + 'Intern' + '</div>' +
                '</div>' +
                '</div>'
            );
        }

        fs.appendFileSync('./dist-rendered-HTML/teamhomepage.html',
            '</div>' +
            '</div>' +
            '</container>' +
            '</body>' +
            '</html>'
        );

        console.log('Your html file for the team page is in the dist-rendered-HTML folder')
    }
initialize()