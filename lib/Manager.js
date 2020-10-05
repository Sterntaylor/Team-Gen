const Employee = require("./employee.js");

class Manager extends Employee{
    constructor(name, email, id, officeNumber){
        super(name, email, id);
        this.office = officeNumber;
    }
    getRole(){
        return "Manager" 
     }
     getNumber(){
         return this.number
     }
}

module.exports = Manager; 