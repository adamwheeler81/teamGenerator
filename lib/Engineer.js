const Employee = require("./Employee");

class Engineer {
    constructor(name, id, email, github) {
        this.name = name;
        this.id = id;
        this.email = email;
        this.github = github;
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
        return "Engineer";
    }
    getGithub() {
        return "GitHubUser"
    }
    
 }
 
 module.exports = Engineer;