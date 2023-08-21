//Business Logic for AddressBook
function AddressBook() {
    this.contacts = {};
    this.currentId = 0;
}

AddressBook.prototype.addContact = function(entry) {
  entry.id = this.assignId();
  this.contacts[entry.id] = entry;
};

AddressBook.prototype.assignId = function () {
  this.currentId += 1;
  return this.currentId;
};

AddressBook.prototype.findContact = function(id) {
    if (this.contacts[id] !== undefined) {
        return this.contacts[id];
    }
    return false;
};

AddressBook.prototype.deleteContact = function(id) {
    if (this.contacts[id] === undefined) {
        return false;
    }
    delete this.contacts[id];
    return true;
};

// Business Logic for contacts
function Contact(first, last, phone) {
    this.firstName = first;
    this.lastName = last;
    this.phoneNumber = phone;
}

Contact.prototype.fullName = function() {
    return this.firstName + " " + this.lastName;
};



// Our added information
let epicodusBook = new AddressBook();
let epicodusStudent = new Contact("Jerry", "Q", 12);
let epicodusStudent2 = new Contact("Hilary", "T", 13);

epicodusBook.addContact(epicodusStudent);
epicodusBook.addContact(epicodusStudent2);
