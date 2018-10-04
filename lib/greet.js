'use strict';

let greet = module.exports = {};

greet.hello = function(name){
  if(!isNaN(name)) {return null;}
  return 'hello ' + name;
};
