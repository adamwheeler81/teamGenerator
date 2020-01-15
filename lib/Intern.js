const Employee = require("./Employee");

class Intern {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
        this.school = "UCLA";
    }
 
    getName() {
        return this.name;
    }
 
    getId() {
        return this.id;
    }
 
    getEmail() {
        return this.email;
    }
 
    getRole() {
        return "Intern";
    }
    getSchool() {
        return this.school;
    }
    
 }
 
 module.exports = Intern;