const Employee = require("./Employee");

class Manager {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
        this.officeNumber = 100;
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
        return "Manager";
    }
    getOfficeNumber() {
        return this.officeNumber;
    }
    
 }
 
 module.exports = Manager;