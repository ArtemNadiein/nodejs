var util = require('util');

var str = util.format("My %s %d %j", "sting", 123, {name: "gui"});
console.log(str);