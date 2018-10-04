'use strict';

let arithmetic = module.exports = {};

arithmetic.nan = function(a,b){
  if(a||b === NaN){
    return null;
  }
};

arithmetic.add = function(a,b) {
  return a+b;
};

arithmetic.subtract = function (a,b) {
  return a-b;
};

arithmetic.multiply = function (a,b) {
  return a*b;
};

arithmetic.divide = function (a,b) {
  return a/b;
};