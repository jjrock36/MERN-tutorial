//Modules
const names = require('./4-name');
const sayHi = require('./5-utils');
const data = require('./6-alternative');
const { peter } = names;
require('./7-mind-grenade');

sayHi('susan');
sayHi(names.john);
sayHi(peter);
