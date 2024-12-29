// Modules

// in <script> tag, defer is used to let DOM setup first then executes itself but module has defer built-in itself

import playGuitar  from "./guitars.js";
import {shredding as shred, plucking as pluck} from "./guitars.js";

console.log(playGuitar());
console.log(shred());
console.log(pluck());

// no need to import all files at once as it will lead to confusion in namespaces

import User from "./user.js";
const me= new User("email@email.com","Ashish");

console.log(me);
console.log(me.greeting());

// babble-> is used to convert new JS code to older JS code so older browsers can use them