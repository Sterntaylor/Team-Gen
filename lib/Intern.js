const Employee = require("./employee.js");

class Intern extends Employee{
    constructor(name, id, email, schoolAttended){
        super(name, email, id);
        this.school = schoolAttended;
    }
    getRole(){
        return "Intern" 
     }
    getSchool(){
        return this.school
    }
}

module.exports = Intern; 