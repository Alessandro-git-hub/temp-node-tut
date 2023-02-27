// CommonJS, every file is module (by default)
// Modulew - Encapsulated Code (only share minimum)

const names = require("./4-names")
const sayHi = require("./5-utils")  
const data = require("./6-alternative-flavor")
require("./7-mind-grenade")

sayHi("Susan")
sayHi(names.John)
sayHi(names.Peter)
