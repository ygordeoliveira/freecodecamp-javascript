const Person = function(firstAndLast) { 
    this.getFirstName = function() {
        return firstAndLast.split(" ")[0];
    }

    this.getLastName = function() {
        return firstAndLast.split(" ")[1];
    }

    this.getFullName = function() {
        return firstAndLast;
    }

    this.setFirstName = function(newFirstName) {
        firstAndLast = newFirstName + " " + this.getLastName();
    }
    
    this.setLastName = function(newLastName) {
        firstAndLast = this.getFirstName() + " " + newLastName;
    }

    this.setFullName = function(newFullName) {
        firstAndLast = newFullName;
    }
};

const bob = new Person("Bob Ross");

bob.getFullName();