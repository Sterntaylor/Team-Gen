const Employee = require("./employee.js");

class Engineer extends Employee{
    constructor(name, id, email, username){
        super(name, email, id, username);
        this.github = username;

    }
    getRole(){
       return "Engineer" 
    }
    getGithub(){
        return this.username
    }
}

module.exports = Engineer; 