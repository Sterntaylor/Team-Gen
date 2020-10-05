const Employee = require("./employee.js");

class Manager extends Employee{
    constructor(name, id, email, officenumber){
        super(name, email, id);
        this.office = officenumber;
    }
    getRole(){
        return "Manager" 
     }
     getofficenumber(){
         return this.officenumber
     }
}

module.exports = Manager; 