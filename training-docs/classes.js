/**
 * What class User {...} construct really does is:
 *
 * Creates a function named User, that becomes the result of the class declaration. The function code is taken from the constructor method (assumed empty if we don’t write such method).
 * Stores class methods, such as sayHi, in User.prototype.
 * After new User object is created, when we call its method, it’s taken from the prototype, just as described in the chapter F.prototype. So the object has access to class methods.
 *
 * We can illustrate the result of class User declaration as:
 *
 * class User {
 *   constructor(name) { this.name = name; }
 *   sayHi() { alert(this.name); }
 * }
 * -------------
 * User
 * constructor(name) {
 *   this.name = name;
 * }
 *
 * =====> prototype
 *
 * User.prototype
 * sayHi: function
 * constructor: User
 */

class User {
  constructor(name) { this.name = name; }
  sayHi() { alert(this.name); }
}

// class is a function
alert(typeof User); // function

// ...or, more precisely, the constructor method
alert(User === User.prototype.constructor); // true

// The methods are in User.prototype, e.g:
alert(User.prototype.sayHi); // the code of the sayHi method

// there are exactly two methods in the prototype
alert(Object.getOwnPropertyNames(User.prototype)); // constructor, sayHi

// Class creation with simple function :
function Person(name) {
  this.name = name;

  this.sayHi = function() {
    alert( "My name is: " + this.name );
  };
}

let john = new Person("John");

john.sayHi(); // My name is: John
