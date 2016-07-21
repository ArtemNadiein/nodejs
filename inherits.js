var util = require('util');

function Animal(name) {
    this.name = name;
}

Animal.prototype.walk = function () {
    console.log(this.name + " идет");
};

function Rabbit(name) {
    this.name = name;
}

util.inherits(Rabbit, Animal);

Rabbit.prototype.sleep = function () {
    console.log(this.name + " спит");
};

var rabbit = new Rabbit("Медведь");
rabbit.walk();
rabbit.sleep();